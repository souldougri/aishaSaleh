import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  date: string;
}

interface GalleryModalProps {
  image: GalleryImage;
  closeModal: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ image, closeModal }) => {
  // Translation will be used in future updates
  // const { t } = useTranslation();

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={closeModal}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-300"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <div className="md:w-2/3 h-[50vh] md:h-auto">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/3 p-6 overflow-y-auto">
            <span className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium mb-3">
              {image.category}
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">{image.title}</h3>

            <div className="flex items-center text-gray-600 mb-2">
              <FaMapMarkerAlt className="mr-2 text-primary-500" />
              <span>{image.location}</span>
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2 text-primary-500" />
              <span>{new Date(image.date).toLocaleDateString()}</span>
            </div>

            <p className="text-gray-700">{image.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
