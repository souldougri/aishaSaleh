import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import bcrypt from 'bcryptjs';

// Import models
import User from './models/userModel.js';
import Profile from './models/profileModel.js';
import Article from './models/articleModel.js';
import Gallery from './models/galleryModel.js';
import Contact from './models/contactModel.js';

// Import database connection
import connectDB from './config/db.js';

dotenv.config();

// Connect to database
connectDB();

// Sample data
const users = [
  {
    name: 'Aisha Saleh',
    email: 'aichasaleh2812@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

const profile = {
  name: {
    en: 'Aisha Saleh',
    fr: 'Aisha Saleh',
    ar: 'عائشـة صالـح',
  },
  title: {
    en: 'Journalist & Media Producer',
    fr: 'Journaliste & Productrice de Médias',
    ar: 'صحفية ومنتجة إعلامية',
  },
  bio: {
    en: 'The Founder of Eta Media Production Company, News Presenter on tchad24_tv, and trtarabi Correspondent for Chad, Libya, and Turkey.',
    fr: 'Fondatrice de la société de production Eta Media, présentatrice de nouvelles sur tchad24_tv et correspondante trtarabi pour le Tchad, la Libye et la Turquie.',
    ar: 'مؤسسة شركة إيتا للإنتاج الإعلامي، مقدمة أخبار في تشاد24 تي في، ومراسلة تي آر تي عربي في تشاد وليبيا وتركيا.',
  },
  location: {
    en: 'N\'Djamena, Chad',
    fr: 'N\'Djamena, Tchad',
    ar: 'نجامينا، تشاد',
  },
  avatar: '/uploads/profile/avatar.jpg',
  coverImage: '/uploads/profile/cover.jpg',
  phone: '+235 12345678',
  email: 'aichasaleh2812@gmail.com',
  website: 'https://aichasaleh.com',
  skills: [
    {
      name: {
        en: 'Investigative Journalism',
        fr: 'Journalisme d\'Investigation',
        ar: 'الصحافة الاستقصائية',
      },
      level: 5,
    },
    {
      name: {
        en: 'Media Production',
        fr: 'Production Médiatique',
        ar: 'الإنتاج الإعلامي',
      },
      level: 5,
    },
    {
      name: {
        en: 'News Presenting',
        fr: 'Présentation des Nouvelles',
        ar: 'تقديم الأخبار',
      },
      level: 5,
    },
    {
      name: {
        en: 'International Reporting',
        fr: 'Reportage International',
        ar: 'التقارير الدولية',
      },
      level: 4,
    },
  ],
  education: [
    {
      institution: 'University of N\'Djamena',
      degree: 'Master\'s in Journalism and Mass Communication',
      fieldOfStudy: 'Journalism',
      startDate: new Date('2010-09-01'),
      endDate: new Date('2012-06-30'),
      current: false,
      description: 'Specialized in international reporting and digital journalism. Graduated with honors.',
      location: 'N\'Djamena, Chad',
    },
    {
      institution: 'Cairo University',
      degree: 'Bachelor\'s in Media Studies',
      fieldOfStudy: 'Media',
      startDate: new Date('2006-09-01'),
      endDate: new Date('2010-06-30'),
      current: false,
      description: 'Focus on broadcast journalism and political reporting. Participated in student media initiatives.',
      location: 'Cairo, Egypt',
    },
  ],
  experience: [
    {
      title: 'Founder & CEO',
      company: 'Eta Media Production Company',
      location: 'N\'Djamena, Chad',
      startDate: new Date('2020-01-01'),
      current: true,
      description: 'Founded and lead a media production company specializing in documentary filmmaking and journalism training.',
    },
    {
      title: 'News Presenter',
      company: 'Tchad24 TV',
      location: 'N\'Djamena, Chad',
      startDate: new Date('2018-03-01'),
      current: true,
      description: 'Present daily news broadcasts focusing on current affairs, politics, and social issues in Chad and the region.',
    },
    {
      title: 'Correspondent',
      company: 'TRT Arabi',
      location: 'Chad, Libya, Turkey',
      startDate: new Date('2016-06-01'),
      current: true,
      description: 'Report on political, economic, and social developments in Chad, Libya, and Turkey for international audiences.',
    },
  ],
  awards: [
    {
      title: 'Excellence in Journalism Award',
      organization: 'African Journalists Association',
      date: new Date('2022-05-15'),
      description: 'Recognized for outstanding reporting on environmental challenges in the Lake Chad region.',
    },
    {
      title: 'Women in Media Leadership Award',
      organization: 'International Women\'s Media Foundation',
      date: new Date('2020-11-10'),
      description: 'Honored for contributions to advancing women\'s representation in media leadership in Central Africa.',
    },
  ],
  social: [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/aichasaleh',
      icon: 'twitter',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/aichasaleh',
      icon: 'instagram',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/aichasaleh',
      icon: 'linkedin',
    },
  ],
};

const articles = [
  {
    title: {
      en: 'The Impact of Climate Change on Chad\'s Lake Region',
      fr: 'L\'impact du changement climatique sur la région du lac Tchad',
      ar: 'تأثير تغير المناخ على منطقة بحيرة تشاد',
    },
    slug: 'climate-change-impact-chad',
    summary: {
      en: 'An in-depth look at how climate change is affecting communities around Lake Chad.',
      fr: 'Un regard approfondi sur la façon dont le changement climatique affecte les communautés autour du lac Tchad.',
      ar: 'نظرة متعمقة حول كيفية تأثير تغير المناخ على المجتمعات حول بحيرة تشاد.',
    },
    content: {
      en: '<p>The Lake Chad Basin has been experiencing severe climate change impacts over the past few decades. Once one of Africa\'s largest water bodies, Lake Chad has shrunk by 90% since the 1960s, affecting millions of people who depend on it for their livelihoods.</p>',
      fr: '<p>Le bassin du lac Tchad connaît de graves impacts du changement climatique depuis plusieurs décennies. Autrefois l\'un des plus grands plans d\'eau d\'Afrique, le lac Tchad a diminué de 90% depuis les années 1960, affectant des millions de personnes qui en dépendent pour leur subsistance.</p>',
      ar: '<p>يعاني حوض بحيرة تشاد من آثار شديدة لتغير المناخ على مدى العقود القليلة الماضية. بعد أن كانت واحدة من أكبر المسطحات المائية في إفريقيا، تقلصت بحيرة تشاد بنسبة 90٪ منذ الستينيات، مما أثر على ملايين الأشخاص الذين يعتمدون عليها في كسب عيشهم.</p>',
    },
    featuredImage: '/uploads/articles/lake-chad.jpg',
    category: {
      en: 'Environment',
      fr: 'Environnement',
      ar: 'البيئة',
    },
    tags: [
      {
        en: 'Climate Change',
        fr: 'Changement Climatique',
        ar: 'تغير المناخ',
      },
      {
        en: 'Lake Chad',
        fr: 'Lac Tchad',
        ar: 'بحيرة تشاد',
      },
    ],
    publishDate: new Date('2023-04-15'),
    isPublished: true,
  },
  {
    title: {
      en: 'Women Entrepreneurs Reshaping N\'Djamena\'s Economy',
      fr: 'Les femmes entrepreneurs qui transforment l\'économie de N\'Djamena',
      ar: 'رائدات الأعمال يعدن تشكيل اقتصاد نجامينا',
    },
    slug: 'women-entrepreneurs-ndjamena',
    summary: {
      en: 'Profiles of women business leaders driving economic change in Chad\'s capital.',
      fr: 'Profils de femmes chefs d\'entreprise qui stimulent le changement économique dans la capitale du Tchad.',
      ar: 'نبذة عن رائدات الأعمال اللواتي يقدن التغيير الاقتصادي في عاصمة تشاد.',
    },
    content: {
      en: '<p>In the bustling markets and growing business districts of N\'Djamena, a quiet revolution is taking place. Women entrepreneurs are increasingly taking leadership roles in sectors traditionally dominated by men, from technology to manufacturing.</p>',
      fr: '<p>Dans les marchés animés et les quartiers d\'affaires en pleine croissance de N\'Djamena, une révolution silencieuse est en cours. Les femmes entrepreneurs prennent de plus en plus des rôles de leadership dans des secteurs traditionnellement dominés par les hommes, de la technologie à la fabrication.</p>',
      ar: '<p>في الأسواق المزدحمة ومناطق الأعمال المتنامية في نجامينا، تحدث ثورة هادئة. تتولى رائدات الأعمال بشكل متزايد أدوارًا قيادية في قطاعات يهيمن عليها الرجال تقليديًا، من التكنولوجيا إلى التصنيع.</p>',
    },
    featuredImage: '/uploads/articles/women-entrepreneurs.jpg',
    category: {
      en: 'Business',
      fr: 'Affaires',
      ar: 'الأعمال',
    },
    tags: [
      {
        en: 'Women Entrepreneurs',
        fr: 'Femmes Entrepreneurs',
        ar: 'رائدات الأعمال',
      },
      {
        en: 'Economy',
        fr: 'Économie',
        ar: 'الاقتصاد',
      },
    ],
    publishDate: new Date('2023-03-22'),
    isPublished: true,
  },
];

const galleryImages = [
  {
    title: {
      en: 'Desert Landscape in Northern Chad',
      fr: 'Paysage désertique dans le nord du Tchad',
      ar: 'المناظر الطبيعية الصحراوية في شمال تشاد',
    },
    description: {
      en: 'The stunning rock formations and sand dunes of the Ennedi Plateau in northern Chad.',
      fr: 'Les impressionnantes formations rocheuses et dunes de sable du plateau de l\'Ennedi dans le nord du Tchad.',
      ar: 'تكوينات الصخور المذهلة والكثبان الرملية في هضبة إنيدي في شمال تشاد.',
    },
    image: '/uploads/gallery/desert-landscape.jpg',
    category: {
      en: 'Landscape',
      fr: 'Paysage',
      ar: 'المناظر الطبيعية',
    },
    location: {
      en: 'Ennedi Plateau, Chad',
      fr: 'Plateau de l\'Ennedi, Tchad',
      ar: 'هضبة إنيدي، تشاد',
    },
    date: new Date('2023-11-15'),
    featured: true,
  },
  {
    title: {
      en: 'Traditional Market in N\'Djamena',
      fr: 'Marché traditionnel à N\'Djamena',
      ar: 'السوق التقليدي في نجامينا',
    },
    description: {
      en: 'Vibrant scenes from the central market in N\'Djamena, showcasing local produce and crafts.',
      fr: 'Scènes vibrantes du marché central de N\'Djamena, présentant des produits locaux et de l\'artisanat.',
      ar: 'مشاهد نابضة بالحياة من السوق المركزي في نجامينا، تعرض المنتجات المحلية والحرف اليدوية.',
    },
    image: '/uploads/gallery/traditional-market.jpg',
    category: {
      en: 'Culture',
      fr: 'Culture',
      ar: 'الثقافة',
    },
    location: {
      en: 'N\'Djamena, Chad',
      fr: 'N\'Djamena, Tchad',
      ar: 'نجامينا، تشاد',
    },
    date: new Date('2023-10-22'),
    featured: true,
  },
];

// Import data to database
const importData = async () => {
  try {
    // Clear all existing data
    await User.deleteMany();
    await Profile.deleteMany();
    await Article.deleteMany();
    await Gallery.deleteMany();
    await Contact.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Insert profile with admin user reference
    const profileData = { ...profile, user: adminUser };
    await Profile.create(profileData);

    // Insert articles with admin user reference
    const articlesWithUser = articles.map(article => {
      return { ...article, author: adminUser };
    });
    await Article.insertMany(articlesWithUser);

    // Insert gallery images with admin user reference
    const galleryWithUser = galleryImages.map(image => {
      return { ...image, user: adminUser };
    });
    await Gallery.insertMany(galleryWithUser);

    console.log('Data imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Delete all data from database
const destroyData = async () => {
  try {
    // Clear all existing data
    await User.deleteMany();
    await Profile.deleteMany();
    await Article.deleteMany();
    await Gallery.deleteMany();
    await Contact.deleteMany();

    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Run script based on command line argument
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
