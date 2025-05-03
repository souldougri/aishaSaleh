import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations directly
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Aisha Saleh's Portfolio",
      about: "About Me",
      resume: "Resume",
      portfolio: "Portfolio",
      gallery: "Gallery",
      contact: "Contact",
      language: "Language",
      readMore: "Read More",
      viewAll: "View All",
      heroTitle: "Journalist & Storyteller",
      heroSubtitle: "Sharing stories from Chad and beyond",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      interestedInCollaboration: "Interested in Collaboration?",
      collaborationText: "Whether you're looking for a journalist for your publication, a speaker for your event, or a media consultant for your project, I'd love to hear from you.",
      myExpertise: "My Expertise",
      investigativeJournalism: "Investigative Journalism",
      featureWriting: "Feature Writing",
      photojournalism: "Photojournalism",
      documentaryProduction: "Documentary Production",
      fieldPhotos: "Field Photography",
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur le Portfolio d'Aisha Saleh",
      about: "À Propos de Moi",
      resume: "CV",
      portfolio: "Portfolio",
      gallery: "Galerie",
      contact: "Contact",
      language: "Langue",
      readMore: "Lire Plus",
      viewAll: "Voir Tout",
      heroTitle: "Journaliste & Narratrice",
      heroSubtitle: "Partage d'histoires du Tchad et d'ailleurs",
      downloadCV: "Télécharger CV",
      contactMe: "Me Contacter",
      interestedInCollaboration: "Intéressé par une Collaboration?",
      collaborationText: "Que vous recherchiez une journaliste pour votre publication, une conférencière pour votre événement ou une consultante média pour votre projet, je serais ravie de vous entendre.",
      myExpertise: "Mon Expertise",
      investigativeJournalism: "Journalisme d'Investigation",
      featureWriting: "Rédaction d'Articles",
      photojournalism: "Photojournalisme",
      documentaryProduction: "Production Documentaire",
      fieldPhotos: "Photographie de Terrain",
    }
  },
  ar: {
    translation: {
      welcome: "مرحبًا بكم في معرض أعمال عائشة صالح",
      about: "عني",
      resume: "السيرة الذاتية",
      portfolio: "معرض الأعمال",
      gallery: "معرض الصور",
      contact: "اتصل بي",
      language: "اللغة",
      readMore: "قراءة المزيد",
      viewAll: "عرض الكل",
      heroTitle: "صحفية وراوية قصص",
      heroSubtitle: "مشاركة القصص من تشاد وخارجها",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      interestedInCollaboration: "مهتم بالتعاون؟",
      collaborationText: "سواء كنت تبحث عن صحفية لمنشورك، أو متحدثة في فعاليتك، أو مستشارة إعلامية لمشروعك، أود أن أسمع منك.",
      myExpertise: "خبراتي",
      investigativeJournalism: "الصحافة الاستقصائية",
      featureWriting: "كتابة المقالات",
      photojournalism: "التصوير الصحفي",
      documentaryProduction: "إنتاج الأفلام الوثائقية",
      fieldPhotos: "التصوير الميداني",
    }
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
