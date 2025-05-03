import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFolder, FaArrowLeft, FaShare } from 'react-icons/fa';

// This would normally come from an API
const dummyArticles = [
  {
    id: 1,
    slug: 'climate-change-impact-chad',
    title: 'The Impact of Climate Change on Chad\'s Lake Region',
    summary: 'An in-depth look at how climate change is affecting communities around Lake Chad.',
    content: `
      <p>The Lake Chad Basin has been experiencing severe climate change impacts over the past few decades. Once one of Africa\'s largest water bodies, Lake Chad has shrunk by 90% since the 1960s, affecting millions of people who depend on it for their livelihoods.</p>

      <p>In this investigative report, I traveled to communities around the lake to document how changing weather patterns, desertification, and water scarcity are transforming traditional ways of life. Fishermen who once relied on the lake\'s abundant resources now struggle to make ends meet, while farmers face increasingly unpredictable rainfall patterns.</p>

      <h2>A Crisis Unfolding</h2>

      <p>The shrinking of Lake Chad represents one of the most severe environmental crises in Africa. The lake\'s recession has been attributed to a combination of climate change, population growth, and unsustainable water management practices.</p>

      <p>"We used to catch enough fish to feed our families and sell at the market," says Ibrahim, a 65-year-old fisherman from Bol. "Now we travel farther and farther into the lake, spending days away from home, only to return with a fraction of what we once caught."</p>

      <h2>Adaptation Strategies</h2>

      <p>Despite these challenges, local communities are developing innovative adaptation strategies. Some fishermen have transitioned to small-scale farming during the dry season, while others have formed cooperatives to share resources and knowledge.</p>

      <p>International organizations are also working with local communities to implement sustainable water management practices and introduce drought-resistant crops. However, these efforts face significant challenges due to regional insecurity and limited resources.</p>

      <h2>Looking Ahead</h2>

      <p>The future of the Lake Chad region depends on coordinated action at local, national, and international levels. Climate adaptation funding, improved water governance, and conflict resolution are all essential components of a sustainable solution.</p>

      <p>As one community leader told me, "We cannot stop the climate from changing, but we can change how we respond to it. Our ancestors have lived through droughts before, and we will find a way to survive this one too."</p>
    `,
    image: '/placeholder-article1.jpg',
    date: '2025-04-15',
    category: 'Environment',
    author: 'Aisha Saleh',
    tags: ['Climate Change', 'Lake Chad', 'Environment', 'Water Crisis'],
  },
  {
    id: 2,
    slug: 'women-entrepreneurs-ndjamena',
    title: 'Women Entrepreneurs Reshaping N\'Djamena\'s Economy',
    summary: 'Profiles of women business leaders driving economic change in Chad\'s capital.',
    content: `
      <p>In the bustling markets and growing business districts of N\'Djamena, a quiet revolution is taking place. Women entrepreneurs are increasingly taking leadership roles in sectors traditionally dominated by men, from technology to manufacturing.</p>

      <p>This feature story profiles five remarkable women who are not only building successful businesses but also mentoring the next generation of female entrepreneurs in Chad.</p>

      <h2>Breaking Barriers</h2>

      <p>Fatima Mahamat, founder of TchadTech, a software development company with clients across Central Africa, represents a new wave of tech entrepreneurs in the country. "When I started my company in 2018, people were surprised to see a woman leading a tech business," she says. "Now, nearly half of my 30 employees are women, many of whom I\'ve personally mentored."</p>

      <p>Similarly, Amina Ibrahim has transformed her small tailoring business into a fashion brand that employs over 50 people and exports to neighboring countries. "I started with one sewing machine in my living room," she recalls. "Today, we have a factory and a training center where we teach young women valuable skills."</p>

      <h2>Access to Finance</h2>

      <p>Despite their success, these entrepreneurs face significant challenges, particularly in accessing finance. Traditional banks often require collateral that many women don\'t have, and cultural attitudes can create additional barriers.</p>

      <p>To address this gap, organizations like the Chadian Women\'s Business Association have created microfinance programs specifically for women entrepreneurs. "We\'ve provided loans to over 500 women in the past three years," says the association\'s president, Halima Deby. "The repayment rate is over 95%, which shows that women are reliable borrowers when given the opportunity."</p>

      <h2>Changing Perceptions</h2>

      <p>Beyond the economic impact, these women are changing societal perceptions about gender roles. "My daughter sees me running a business and knows she can do the same," says Khadija Oumar, who owns a successful restaurant chain. "That\'s perhaps the most important legacy of our work."</p>

      <p>As N\'Djamena continues to develop as a regional business hub, the contributions of women entrepreneurs will be crucial to creating an inclusive and sustainable economy.</p>
    `,
    image: '/placeholder-article2.jpg',
    date: '2025-03-22',
    category: 'Business',
    author: 'Aisha Saleh',
    tags: ['Women Entrepreneurs', 'Business', 'N\'Djamena', 'Economic Development'],
  },
  // Add more detailed articles as needed
];

const ArticleDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  // const navigate = useNavigate(); // Will be used for future navigation features
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);

    setTimeout(() => {
      const foundArticle = dummyArticles.find(a => a.slug === slug);

      if (foundArticle) {
        setArticle(foundArticle);
        setError(null);
      } else {
        setError('Article not found');
      }

      setIsLoading(false);
    }, 800);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container-custom py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">{error || 'Article not found'}</h2>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/portfolio"
          className="btn-primary inline-flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          {t('backToPortfolio')}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            {t('backToPortfolio')}
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-md text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary-500" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <FaFolder className="mr-2 text-primary-500" />
                <span>{article.category}</span>
              </div>
              <div>
                <span className="font-medium">By {article.author}</span>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="rounded-lg overflow-hidden mb-10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article content */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-10 mb-10">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-medium text-gray-800 mb-3">{t('tags')}</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">{t('shareArticle')}</h3>
            <div className="flex space-x-4">
              <button
                className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
                aria-label="Share on Twitter"
              >
                <FaShare />
              </button>
              <button
                className="bg-[#4267B2] text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
                aria-label="Share on Facebook"
              >
                <FaShare />
              </button>
              <button
                className="bg-[#0077B5] text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
                aria-label="Share on LinkedIn"
              >
                <FaShare />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetail;
