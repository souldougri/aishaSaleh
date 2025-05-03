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
    cb(null, path.join(__dirname, '../uploads/profile'));
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
  getProfile,
  updateProfile,
  addEducation,
  updateEducation,
  deleteEducation,
  addExperience,
  updateExperience,
  deleteExperience,
  addAward,
  updateAward,
  deleteAward,
  addSocial,
  updateSocial,
  deleteSocial,
} from '../controllers/profileController.js';

// Import middleware
// Note: These will be implemented later
import { protect, admin } from '../middleware/authMiddleware.js';

// Routes
router.route('/').get(getProfile).put(protect, admin, upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'coverImage', maxCount: 1 }
]), updateProfile);

router.route('/education').post(protect, admin, addEducation);
router.route('/education/:id').put(protect, admin, updateEducation).delete(protect, admin, deleteEducation);

router.route('/experience').post(protect, admin, addExperience);
router.route('/experience/:id').put(protect, admin, updateExperience).delete(protect, admin, deleteExperience);

router.route('/awards').post(protect, admin, addAward);
router.route('/awards/:id').put(protect, admin, updateAward).delete(protect, admin, deleteAward);

router.route('/social').post(protect, admin, addSocial);
router.route('/social/:id').put(protect, admin, updateSocial).delete(protect, admin, deleteSocial);

export default router;
