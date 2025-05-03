import mongoose from 'mongoose';

const articleSchema = mongoose.Schema(
  {
    title: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    summary: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    content: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    category: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    tags: [
      {
        type: {
          en: { type: String, required: true },
          fr: { type: String, required: true },
          ar: { type: String, required: true },
        },
      },
    ],
    publishDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    externalLink: {
      type: String,
    },
    publication: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
