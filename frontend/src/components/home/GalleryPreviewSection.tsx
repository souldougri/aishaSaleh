import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// This would normally come from an API
const dummyGalleryImages = [
  {
    id: 2,
    title: 'Traditional Market in N\'Djamena',
    image: '/placeholder-images/6.jpg',
    category: 'Culture',
  },
  {
    id: 3,
    title: 'Women Entrepreneurs Meeting',
    image: '/placeholder-images/new-photo1.jpg',
    category: 'Business',
  },
  {
    id: 4,
    title: 'Cultural Festival Celebration',
    image: '/placeholder-images/new-photo2.jpg',
    category: 'Culture',
  },
  {
    id: 5,
    title: 'Rural Healthcare Initiative',
    image: '/placeholder-images/121.jpg',
    category: 'Health',
  },
];

const GalleryPreviewSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">{t('fieldPhotos')}</h2>
          <Link
            to="/gallery"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dummyGalleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Link to="/gallery" className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs font-medium text-primary-200 mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
