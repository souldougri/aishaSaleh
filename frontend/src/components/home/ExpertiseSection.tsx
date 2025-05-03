import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaNewspaper, FaPen, FaCamera, FaVideo } from 'react-icons/fa';

const ExpertiseSection = () => {
  const { t } = useTranslation();

  const expertiseItems = [
    {
      icon: <FaNewspaper className="text-4xl text-primary-600" />,
      title: 'investigativeJournalism',
      description: 'Uncovering stories that matter through thorough research and fact-finding.',
    },
    {
      icon: <FaPen className="text-4xl text-primary-600" />,
      title: 'featureWriting',
      description: 'Crafting compelling narratives that engage and inform readers.',
    },
    {
      icon: <FaCamera className="text-4xl text-primary-600" />,
      title: 'photojournalism',
      description: 'Capturing powerful images that tell stories beyond words.',
    },
    {
      icon: <FaVideo className="text-4xl text-primary-600" />,
      title: 'documentaryProduction',
      description: 'Creating visual stories that document important social and cultural issues.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('myExpertise')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in journalism, I've developed expertise in various areas of media and storytelling.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="flex justify-center items-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-gray-800 w-full">
                {t(item.title)}
              </h3>
              <p className="text-gray-600 w-full">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
