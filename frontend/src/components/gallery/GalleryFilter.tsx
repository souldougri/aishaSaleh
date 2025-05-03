import React from 'react';
import { useTranslation } from 'react-i18next';

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  // Translation will be used in future updates
  // const { t } = useTranslation();

  return (
    <div className="mb-12">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;
