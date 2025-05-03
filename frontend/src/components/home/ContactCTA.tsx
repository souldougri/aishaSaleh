import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            {t('interestedInCollaboration')}
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            {t('collaborationText', "Whether you're looking for a journalist for your publication, a speaker for your event, or a media consultant for your project, I'd love to hear from you.")}
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-md font-medium text-lg transition duration-300 inline-block"
          >
            {t('contactMe')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
