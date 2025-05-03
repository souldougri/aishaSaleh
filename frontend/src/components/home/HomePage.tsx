import { useTranslation } from 'react-i18next';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExpertiseSection from './ExpertiseSection';
import RecentArticlesSection from './RecentArticlesSection';
import GalleryPreviewSection from './GalleryPreviewSection';
import ContactCTA from './ContactCTA';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <RecentArticlesSection />
      <GalleryPreviewSection />
      <ContactCTA />
    </div>
  );
};

export default HomePage;
