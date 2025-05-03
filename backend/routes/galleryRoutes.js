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
    cb(null, path.join(__dirname, '../uploads/gallery'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create the multer instance
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit for high-quality photos
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
  getGalleryImages,
  getGalleryImageById,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} from '../controllers/galleryController.js';

// Import middleware
// Note: These will be implemented later
import { protect, admin } from '../middleware/authMiddleware.js';

// Routes
router.route('/').get(getGalleryImages).post(protect, admin, upload.single('image'), createGalleryImage);
router
  .route('/:id')
  .get(getGalleryImageById)
  .put(protect, admin, upload.single('image'), updateGalleryImage)
  .delete(protect, admin, deleteGalleryImage);

export default router;
