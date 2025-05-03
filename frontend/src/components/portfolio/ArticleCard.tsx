import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Article {
  id: number;
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/portfolio/${article.slug}`} className="block">
        <div className="h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-xs text-gray-500 ml-2">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        <Link to={`/portfolio/${article.slug}`} className="block">
          <h3 className="text-xl font-serif font-bold mb-2 text-gray-800 hover:text-primary-600 transition-colors duration-300">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{article.summary}</p>
        <Link
          to={`/portfolio/${article.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center transition duration-300"
        >
          {t('readMore')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
