import asyncHandler from '../middleware/asyncHandler.js';
import Contact from '../models/contactModel.js';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400);
    throw new Error('Please fill all fields');
  }

  const contact = new Contact({
    name,
    email,
    subject,
    message,
  });

  const createdContact = await contact.save();
  res.status(201).json({ message: 'Message sent successfully' });
});

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
const getContactMessages = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Contact.countDocuments({});

  const messages = await Contact.find({})
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    messages,
    page,
    pages: Math.ceil(count / pageSize),
    total: count,
  });
});

// @desc    Get contact message by ID
// @route   GET /api/contact/:id
// @access  Private/Admin
const getContactMessageById = asyncHandler(async (req, res) => {
  const message = await Contact.findById(req.params.id);

  if (message) {
    res.json(message);
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

// @desc    Update contact message status (mark as read/unread)
// @route   PUT /api/contact/:id
// @access  Private/Admin
const updateContactMessageStatus = asyncHandler(async (req, res) => {
  const { isRead } = req.body;

  const message = await Contact.findById(req.params.id);

  if (message) {
    message.isRead = isRead !== undefined ? isRead : message.isRead;

    const updatedMessage = await message.save();
    res.json(updatedMessage);
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

// @desc    Delete a contact message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContactMessage = asyncHandler(async (req, res) => {
  const message = await Contact.findById(req.params.id);

  if (message) {
    await message.deleteOne();
    res.json({ message: 'Message removed' });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

export {
  submitContactForm,
  getContactMessages,
  getContactMessageById,
  updateContactMessageStatus,
  deleteContactMessage,
};
