import express from 'express';
const router = express.Router();

// Import controllers
// Note: These will be implemented later
import {
  submitContactForm,
  getContactMessages,
  getContactMessageById,
  updateContactMessageStatus,
  deleteContactMessage,
} from '../controllers/contactController.js';

// Import middleware
// Note: These will be implemented later
import { protect, admin } from '../middleware/authMiddleware.js';

// Routes
router.route('/').post(submitContactForm).get(protect, admin, getContactMessages);
router
  .route('/:id')
  .get(protect, admin, getContactMessageById)
  .put(protect, admin, updateContactMessageStatus)
  .delete(protect, admin, deleteContactMessage);

export default router;
