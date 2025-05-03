import React from 'react';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  date: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  openModal: (image: GalleryImage) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, openModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-lg cursor-pointer"
          onClick={() => openModal(image)}
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <span className="text-xs font-medium text-primary-200 mb-1">
              {image.category}
            </span>
            <h3 className="text-lg font-serif font-bold text-white">
              {image.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
