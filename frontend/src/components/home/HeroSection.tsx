import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-images/hero-pattern.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                عائشـة صالـح
                <span className="block text-2xl md:text-3xl mt-2 text-primary-200">Aisha Saleh</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">{t('heroTitle')}</h2>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  {t('contactMe')}
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  {t('portfolio')}
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/placeholder-images/0.jpg"
                  alt="Aisha Saleh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-primary-700 py-2 px-4 rounded-lg shadow-lg">
                <span className="font-medium">The Founder of Eta Media</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
