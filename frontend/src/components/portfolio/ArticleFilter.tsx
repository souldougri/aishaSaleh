import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

interface ArticleFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ArticleFilter: React.FC<ArticleFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
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

        {/* Search */}
        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t('searchArticles')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
