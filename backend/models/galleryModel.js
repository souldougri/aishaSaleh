import mongoose from 'mongoose';

const gallerySchema = mongoose.Schema(
  {
    title: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    description: {
      type: {
        en: { type: String },
        fr: { type: String },
        ar: { type: String },
      },
    },
    image: {
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
    location: {
      type: {
        en: { type: String },
        fr: { type: String },
        ar: { type: String },
      },
    },
    date: {
      type: Date,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
