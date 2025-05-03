import asyncHandler from '../middleware/asyncHandler.js';
import Article from '../models/articleModel.js';
import { slugify } from '../utils/helpers.js';

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        $or: [
          { 'title.en': { $regex: req.query.keyword, $options: 'i' } },
          { 'title.fr': { $regex: req.query.keyword, $options: 'i' } },
          { 'title.ar': { $regex: req.query.keyword, $options: 'i' } },
          { 'content.en': { $regex: req.query.keyword, $options: 'i' } },
          { 'content.fr': { $regex: req.query.keyword, $options: 'i' } },
          { 'content.ar': { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};

  const categoryFilter = req.query.category
    ? { 'category.en': req.query.category }
    : {};

  const count = await Article.countDocuments({ ...keyword, ...categoryFilter });

  const articles = await Article.find({ ...keyword, ...categoryFilter })
    .populate('author', 'name')
    .sort({ publishDate: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    articles,
    page,
    pages: Math.ceil(count / pageSize),
    total: count,
  });
});

// @desc    Get article by ID
// @route   GET /api/articles/:id
// @access  Public
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id).populate('author', 'name');

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

// @desc    Create a new article
// @route   POST /api/articles
// @access  Private/Admin
const createArticle = asyncHandler(async (req, res) => {
  const {
    title,
    summary,
    content,
    category,
    tags,
    publishDate,
    isPublished,
    externalLink,
    publication,
  } = req.body;

  // Generate slug from English title
  const slug = slugify(title.en);

  // Check if slug already exists
  const slugExists = await Article.findOne({ slug });
  if (slugExists) {
    res.status(400);
    throw new Error('An article with this title already exists');
  }

  // Get the file path if an image was uploaded
  const featuredImage = req.file ? `/uploads/articles/${req.file.filename}` : '';

  if (!featuredImage) {
    res.status(400);
    throw new Error('Featured image is required');
  }

  const article = new Article({
    title,
    slug,
    summary,
    content,
    author: req.user._id,
    featuredImage,
    category,
    tags: tags || [],
    publishDate: publishDate || new Date(),
    isPublished: isPublished || false,
    externalLink,
    publication,
  });

  const createdArticle = await article.save();
  res.status(201).json(createdArticle);
});

// @desc    Update an article
// @route   PUT /api/articles/:id
// @access  Private/Admin
const updateArticle = asyncHandler(async (req, res) => {
  const {
    title,
    summary,
    content,
    category,
    tags,
    publishDate,
    isPublished,
    externalLink,
    publication,
  } = req.body;

  const article = await Article.findById(req.params.id);

  if (article) {
    // If title is being updated, update the slug
    if (title && title.en !== article.title.en) {
      const newSlug = slugify(title.en);

      // Check if new slug already exists (excluding current article)
      const slugExists = await Article.findOne({ slug: newSlug, _id: { $ne: req.params.id } });
      if (slugExists) {
        res.status(400);
        throw new Error('An article with this title already exists');
      }

      article.slug = newSlug;
    }

    article.title = title || article.title;
    article.summary = summary || article.summary;
    article.content = content || article.content;
    article.category = category || article.category;
    article.tags = tags || article.tags;
    article.publishDate = publishDate || article.publishDate;
    article.isPublished = isPublished !== undefined ? isPublished : article.isPublished;
    article.externalLink = externalLink || article.externalLink;
    article.publication = publication || article.publication;

    // Update featured image if a new one was uploaded
    if (req.file) {
      article.featuredImage = `/uploads/articles/${req.file.filename}`;
    }

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

// @desc    Delete an article
// @route   DELETE /api/articles/:id
// @access  Private/Admin
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    await article.deleteOne();
    res.json({ message: 'Article removed' });
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

export {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
