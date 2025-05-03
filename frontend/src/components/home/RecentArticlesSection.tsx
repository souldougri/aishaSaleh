import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// This would normally come from an API
const dummyArticles = [
  {
    id: 1,
    slug: 'climate-change-impact-chad',
    title: 'The Impact of Climate Change on Chad\'s Lake Region',
    summary: 'An in-depth look at how climate change is affecting communities around Lake Chad.',
    image: '/placeholder-images/2.jpg',
    date: '2025-04-15',
    category: 'Environment',
  },
  {
    id: 2,
    slug: 'women-entrepreneurs-ndjamena',
    title: 'Women Entrepreneurs Reshaping N\'Djamena\'s Economy',
    summary: 'Profiles of women business leaders driving economic change in Chad\'s capital.',
    image: '/placeholder-images/3.jpg',
    date: '2025-03-22',
    category: 'Business',
  },
  {
    id: 3,
    slug: 'traditional-music-revival',
    title: 'The Revival of Traditional Chadian Music in Modern Culture',
    summary: 'How young musicians are incorporating traditional sounds into contemporary music.',
    image: '/placeholder-images/4.jpg',
    date: '2025-02-10',
    category: 'Culture',
  },
];

const RecentArticlesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">{t('recentArticles')}</h2>
          <Link
            to="/portfolio"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition duration-300"
          >
            {t('viewAll')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticlesSection;
