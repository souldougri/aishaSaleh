import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import ArticleFilter from './ArticleFilter';

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
  {
    id: 4,
    slug: 'refugee-crisis-eastern-chad',
    title: 'The Ongoing Refugee Crisis in Eastern Chad',
    summary: 'Reporting from refugee camps along the Sudan border as the humanitarian situation worsens.',
    image: '/placeholder-images/6.jpg',
    date: '2025-01-18',
    category: 'Humanitarian',
  },
  {
    id: 5,
    slug: 'oil-industry-transparency',
    title: 'Transparency Challenges in Chad\'s Oil Industry',
    summary: 'Investigating the management of oil revenues and implications for development.',
    image: '/placeholder-images/8.jpg',
    date: '2024-12-05',
    category: 'Politics',
  },
  {
    id: 6,
    slug: 'sahel-security-challenges',
    title: 'Security Challenges Across the Sahel Region',
    summary: 'Analysis of cross-border security issues affecting Chad and neighboring countries.',
    image: '/placeholder-images/9.jpg',
    date: '2024-11-20',
    category: 'Politics',
  },
  {
    id: 7,
    slug: 'traditional-crafts-preservation',
    title: 'Preserving Traditional Crafts in Modern Chad',
    summary: 'How artisans are keeping traditional craftsmanship alive in the digital age.',
    image: '/placeholder-images/11.jpg',
    date: '2024-10-12',
    category: 'Culture',
  },
  {
    id: 8,
    slug: 'education-access-rural-areas',
    title: 'Education Access Challenges in Rural Chad',
    summary: 'Examining the disparities in education opportunities between urban and rural areas.',
    image: '/placeholder-images/12.jpg',
    date: '2024-09-28',
    category: 'Education',
  },
  {
    id: 9,
    slug: 'healthcare-innovations-chad',
    title: 'Healthcare Innovations in Remote Regions of Chad',
    summary: 'How mobile clinics and telemedicine are transforming healthcare delivery.',
    image: '/placeholder-images/34.jpg',
    date: '2024-08-15',
    category: 'Health',
  },
];

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [articles] = useState(dummyArticles);
  const [filteredArticles, setFilteredArticles] = useState(dummyArticles);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Extract unique categories
  const categories = ['All', ...new Set(dummyArticles.map(article => article.category))];

  // Filter articles based on category and search query
  useEffect(() => {
    setIsLoading(true);

    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = articles;

      // Filter by category
      if (activeCategory !== 'All') {
        filtered = filtered.filter(article => article.category === activeCategory);
      }

      // Filter by search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          article =>
            article.title.toLowerCase().includes(query) ||
            article.summary.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query)
        );
      }

      setFilteredArticles(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, articles]);

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">{t('portfolio')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('portfolioIntro', "A collection of my published articles, investigative reports, and feature stories from across Africa and the Middle East.")}
          </p>
        </motion.div>

        <ArticleFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-600 mb-4">
              {t('noArticlesFound')}
            </h3>
            <p className="text-gray-500">
              {t('tryDifferentSearch')}
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
