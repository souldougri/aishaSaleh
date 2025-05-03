import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import GalleryFilter from './GalleryFilter';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';

// This would normally come from an API
const dummyGalleryImages = [
  {
    id: 2,
    title: 'Traditional Market in N\'Djamena',
    description: 'Vibrant scenes from the central market in N\'Djamena, showcasing local produce and crafts.',
    image: '/placeholder-images/6.jpg',
    category: 'Culture',
    location: 'N\'Djamena, Chad',
    date: '2024-10-22',
  },

  {
    id: 4,
    title: 'Sunset over the Sahel',
    description: 'The breathtaking colors of sunset over the Sahelian landscape in eastern Chad.',
    image: '/placeholder-images/8.jpg',
    category: 'Landscape',
    location: 'Ouaddaï Region, Chad',
    date: '2024-08-30',
  },
  {
    id: 5,
    title: 'Refugee Camp in Eastern Chad',
    description: 'Daily life in one of the refugee camps along the Chad-Sudan border.',
    image: '/placeholder-images/9.jpg',
    category: 'Documentary',
    location: 'Eastern Chad',
    date: '2024-07-12',
  },
  {
    id: 6,
    title: 'Traditional Dancers',
    description: 'Performers at a cultural festival showcasing traditional Chadian dance forms.',
    image: '/placeholder-images/11.jpg',
    category: 'Culture',
    location: 'Moundou, Chad',
    date: '2024-06-25',
  },
  {
    id: 7,
    title: 'Nomadic Herders',
    description: 'Fulani herders moving their cattle across the grasslands during seasonal migration.',
    image: '/placeholder-images/12.jpg',
    category: 'People',
    location: 'Southern Chad',
    date: '2024-05-18',
  },
  {
    id: 8,
    title: 'Urban Development in N\'Djamena',
    description: 'New construction and development projects changing the skyline of Chad\'s capital city.',
    image: '/placeholder-images/34.jpg',
    category: 'Urban',
    location: 'N\'Djamena, Chad',
    date: '2024-04-10',
  },
  {
    id: 9,
    title: 'Wildlife in Zakouma National Park',
    description: 'Elephants and other wildlife in one of Africa\'s most important conservation areas.',
    image: '/placeholder-images/56.jpg',
    category: 'Wildlife',
    location: 'Zakouma National Park, Chad',
    date: '2024-03-22',
  },
  {
    id: 10,
    title: 'Oasis in the Sahara',
    description: 'A life-giving oasis in the northern desert regions of Chad.',
    image: '/placeholder-images/66.jpg',
    category: 'Landscape',
    location: 'Northern Chad',
    date: '2024-02-15',
  },
  {
    id: 11,
    title: 'Traditional Pottery Making',
    description: 'Artisans creating traditional pottery using techniques passed down through generations.',
    image: '/placeholder-images/67.jpg',
    category: 'Culture',
    location: 'Sarh, Chad',
    date: '2024-01-20',
  },
  {
    id: 12,
    title: 'Children at School',
    description: 'Students at a rural school in central Chad, highlighting education challenges and opportunities.',
    image: '/placeholder-images/12.jpg',
    category: 'Education',
    location: 'Guéra Region, Chad',
    date: '2023-12-05',
  },
  {
    id: 13,
    title: 'Women Entrepreneurs Meeting',
    description: 'A gathering of women entrepreneurs discussing business strategies and opportunities in Chad.',
    image: '/placeholder-images/new-photo1.jpg',
    category: 'Business',
    location: 'N\'Djamena, Chad',
    date: '2023-11-10',
  },
  {
    id: 14,
    title: 'Cultural Festival Celebration',
    description: 'Annual cultural festival showcasing the rich heritage and traditions of Chad\'s diverse communities.',
    image: '/placeholder-images/new-photo2.jpg',
    category: 'Culture',
    location: 'Abéché, Chad',
    date: '2023-10-15',
  },
  {
    id: 15,
    title: 'Rural Healthcare Initiative',
    description: 'Mobile healthcare clinics bringing essential medical services to remote villages in southern Chad.',
    image: '/placeholder-images/121.jpg',
    category: 'Health',
    location: 'Moyen-Chari Region, Chad',
    date: '2023-09-20',
  },
  {
    id: 16,
    title: 'Women\'s Rights Conference',
    description: 'Activists and community leaders gather to discuss gender equality and women\'s empowerment initiatives.',
    image: '/placeholder-images/122.jpg',
    category: 'Social Issues',
    location: 'N\'Djamena, Chad',
    date: '2023-08-15',
  },
  {
    id: 17,
    title: 'Traditional Craftsmanship',
    description: 'Artisans demonstrating traditional weaving techniques that have been passed down through generations.',
    image: '/placeholder-images/123.jpg',
    category: 'Culture',
    location: 'Logone Oriental, Chad',
    date: '2023-07-28',
  },
  {
    id: 18,
    title: 'Environmental Conservation Efforts',
    description: 'Local conservation teams working to protect Chad\'s diverse ecosystems and wildlife habitats.',
    image: '/placeholder-images/124.jpg',
    category: 'Environment',
    location: 'Zakouma National Park, Chad',
    date: '2023-06-12',
  },
  {
    id: 19,
    title: 'Youth Education Programs',
    description: 'Innovative educational initiatives aimed at improving literacy and skills among rural youth.',
    image: '/placeholder-images/125.jpg',
    category: 'Education',
    location: 'Batha Region, Chad',
    date: '2023-05-05',
  },
];

const GalleryPage = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState(dummyGalleryImages);
  const [filteredImages, setFilteredImages] = useState(dummyGalleryImages);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique categories
  const categories = ['All', ...new Set(dummyGalleryImages.map(image => image.category))];

  // Filter images based on category
  useEffect(() => {
    setIsLoading(true);

    // Simulate API call delay
    const timer = setTimeout(() => {
      if (activeCategory === 'All') {
        setFilteredImages(images);
      } else {
        setFilteredImages(images.filter(image => image.category === activeCategory));
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, images]);

  const openModal = (image: any) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">{t('gallery')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('galleryIntro', "A visual journey through Chad and beyond, capturing moments, landscapes, and stories through photography.")}
          </p>
        </motion.div>

        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-600 mb-4">
              {t('noImagesFound')}
            </h3>
            <p className="text-gray-500">
              {t('tryDifferentCategory')}
            </p>
          </div>
        ) : (
          <GalleryGrid images={filteredImages} openModal={openModal} />
        )}

        {isModalOpen && selectedImage && (
          <GalleryModal image={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
