import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import fs from 'fs';

// Routes
import articleRoutes from './routes/articleRoutes.js';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load translation files
const enTranslation = JSON.parse(fs.readFileSync('./locales/en.json', 'utf8'));
const frTranslation = JSON.parse(fs.readFileSync('./locales/fr.json', 'utf8'));
const arTranslation = JSON.parse(fs.readFileSync('./locales/ar.json', 'utf8'));

// i18next setup
i18next.use(i18nextMiddleware.LanguageDetector).init({
  supportedLngs: ['en', 'fr', 'ar'],
  fallbackLng: 'en',
  detection: {
    order: ['querystring', 'cookie', 'header'],
    caches: ['cookie']
  },
  preload: ['en', 'fr', 'ar'],
  resources: {
    en: {
      translation: enTranslation
    },
    fr: {
      translation: frTranslation
    },
    ar: {
      translation: arTranslation
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(i18nextMiddleware.handle(i18next));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
