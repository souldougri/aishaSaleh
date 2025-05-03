import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/articles'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create the multer instance
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  },
});

// Import controllers
// Note: These will be implemented later
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/articleController.js';

// Import middleware
// Note: These will be implemented later
import { protect, admin } from '../middleware/authMiddleware.js';

// Routes
router.route('/').get(getArticles).post(protect, admin, upload.single('featuredImage'), createArticle);
router
  .route('/:id')
  .get(getArticleById)
  .put(protect, admin, upload.single('featuredImage'), updateArticle)
  .delete(protect, admin, deleteArticle);

export default router;
