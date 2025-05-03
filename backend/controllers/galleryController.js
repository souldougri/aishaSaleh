import asyncHandler from '../middleware/asyncHandler.js';
import Gallery from '../models/galleryModel.js';

// @desc    Get all gallery images
// @route   GET /api/gallery
// @access  Public
const getGalleryImages = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const categoryFilter = req.query.category
    ? { 'category.en': req.query.category }
    : {};

  const count = await Gallery.countDocuments(categoryFilter);

  const images = await Gallery.find(categoryFilter)
    .sort({ date: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    images,
    page,
    pages: Math.ceil(count / pageSize),
    total: count,
  });
});

// @desc    Get gallery image by ID
// @route   GET /api/gallery/:id
// @access  Public
const getGalleryImageById = asyncHandler(async (req, res) => {
  const image = await Gallery.findById(req.params.id);

  if (image) {
    res.json(image);
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

// @desc    Create a new gallery image
// @route   POST /api/gallery
// @access  Private/Admin
const createGalleryImage = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    location,
    date,
    featured,
  } = req.body;

  // Get the file path if an image was uploaded
  const imagePath = req.file ? `/uploads/gallery/${req.file.filename}` : '';

  if (!imagePath) {
    res.status(400);
    throw new Error('Image is required');
  }

  const galleryImage = new Gallery({
    title,
    description,
    image: imagePath,
    category,
    location,
    date: date || new Date(),
    featured: featured || false,
    user: req.user._id,
  });

  const createdImage = await galleryImage.save();
  res.status(201).json(createdImage);
});

// @desc    Update a gallery image
// @route   PUT /api/gallery/:id
// @access  Private/Admin
const updateGalleryImage = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    location,
    date,
    featured,
  } = req.body;

  const galleryImage = await Gallery.findById(req.params.id);

  if (galleryImage) {
    galleryImage.title = title || galleryImage.title;
    galleryImage.description = description || galleryImage.description;
    galleryImage.category = category || galleryImage.category;
    galleryImage.location = location || galleryImage.location;
    galleryImage.date = date || galleryImage.date;
    galleryImage.featured = featured !== undefined ? featured : galleryImage.featured;

    // Update image if a new one was uploaded
    if (req.file) {
      galleryImage.image = `/uploads/gallery/${req.file.filename}`;
    }

    const updatedImage = await galleryImage.save();
    res.json(updatedImage);
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

// @desc    Delete a gallery image
// @route   DELETE /api/gallery/:id
// @access  Private/Admin
const deleteGalleryImage = asyncHandler(async (req, res) => {
  const galleryImage = await Gallery.findById(req.params.id);

  if (galleryImage) {
    await galleryImage.deleteOne();
    res.json({ message: 'Image removed' });
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

export {
  getGalleryImages,
  getGalleryImageById,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
};
