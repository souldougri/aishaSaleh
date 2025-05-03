import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="/placeholder-images/1.jpg"
              alt="Aisha Saleh"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="section-title">{t('about')}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('aboutMe')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md text-primary-700 mr-3">
                  <span className="font-bold">6+</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Years of Experience</h3>
                  <p className="text-sm text-gray-600">In journalism</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md text-primary-700 mr-3">
                  <span className="font-bold">200+</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Published Articles</h3>
                  <p className="text-sm text-gray-600">In various publications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md text-primary-700 mr-3">
                  <span className="font-bold">7+</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Countries Covered</h3>
                  <p className="text-sm text-gray-600">International reporting</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md text-primary-700 mr-3">
                  <span className="font-bold">5+</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Awards Won</h3>
                  <p className="text-sm text-gray-600">For excellence in journalism</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/resume"
                className="btn-primary inline-flex items-center"
              >
                <span className="mr-2">{t('resume')}</span>
              </Link>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary inline-flex items-center"
              >
                <FaDownload className="mr-2" />
                <span>{t('downloadCV')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
