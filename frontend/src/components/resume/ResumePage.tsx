import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa';
import ResumeSection from './ResumeSection';
import SkillsSection from './SkillsSection';

const ResumePage = () => {
  const { t } = useTranslation();

  // This would normally come from an API
  const education = [
    {
      id: 1,
      institution: 'University of N\'Djamena',
      degree: 'Master\'s in Journalism and Mass Communication',
      location: 'N\'Djamena, Chad',
      startDate: '2010',
      endDate: '2012',
      description: 'Specialized in international reporting and digital journalism. Graduated with honors.',
    },
    {
      id: 2,
      institution: 'Cairo University',
      degree: 'Bachelor\'s in Media Studies',
      location: 'Cairo, Egypt',
      startDate: '2006',
      endDate: '2010',
      description: 'Focus on broadcast journalism and political reporting. Participated in student media initiatives.',
    },
    {
      id: 3,
      institution: 'London School of Journalism',
      degree: 'Certificate in Investigative Journalism',
      location: 'London, UK (Online)',
      startDate: '2014',
      endDate: '2015',
      description: 'Advanced training in investigative techniques, source protection, and data journalism.',
    },
  ];

  const experience = [
    {
      id: 1,
      title: 'Founder & CEO',
      company: 'Eta Media Production Company',
      location: 'N\'Djamena, Chad',
      startDate: '2020',
      endDate: 'Present',
      description: 'Founded and lead a media production company specializing in documentary filmmaking and journalism training.',
    },
    {
      id: 2,
      title: 'News Presenter',
      company: 'Tchad24 TV',
      location: 'N\'Djamena, Chad',
      startDate: '2018',
      endDate: 'Present',
      description: 'Present daily news broadcasts focusing on current affairs, politics, and social issues in Chad and the region.',
    },
    {
      id: 3,
      title: 'Correspondent',
      company: 'TRT Arabi',
      location: 'Chad, Libya, Turkey',
      startDate: '2016',
      endDate: 'Present',
      description: 'Report on political, economic, and social developments in Chad, Libya, and Turkey for international audiences.',
    },
    {
      id: 4,
      title: 'Senior Journalist',
      company: 'Al-Jazeera Network',
      location: 'Doha, Qatar',
      startDate: '2013',
      endDate: '2016',
      description: 'Covered major stories across Africa with a focus on conflict zones, humanitarian crises, and political transitions.',
    },
  ];

  const awards = [
    {
      id: 1,
      title: 'Excellence in Journalism Award',
      organization: 'African Journalists Association',
      date: '2022',
      description: 'Recognized for outstanding reporting on environmental challenges in the Lake Chad region.',
    },
    {
      id: 2,
      title: 'Women in Media Leadership Award',
      organization: 'International Women\'s Media Foundation',
      date: '2020',
      description: 'Honored for contributions to advancing women\'s representation in media leadership in Central Africa.',
    },
    {
      id: 3,
      title: 'Best Documentary',
      organization: 'Pan-African Film Festival',
      date: '2019',
      description: 'Award for "Voices of the Desert," a documentary on traditional cultures in northern Chad.',
    },
  ];

  const skills = [
    { id: 1, name: 'Investigative Reporting', level: 95 },
    { id: 2, name: 'Video Production', level: 90 },
    { id: 3, name: 'Multilingual Reporting', level: 95 },
    { id: 4, name: 'Digital Storytelling', level: 85 },
    { id: 5, name: 'Interview Techniques', level: 90 },
    { id: 6, name: 'Data Journalism', level: 80 },
    { id: 7, name: 'Social Media Management', level: 85 },
    { id: 8, name: 'Photography', level: 75 },
  ];

  const languages = [
    { id: 1, name: 'Arabic', level: 100 },
    { id: 2, name: 'French', level: 100 },
    { id: 3, name: 'English', level: 90 },
    { id: 4, name: 'Turkish', level: 70 },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">{t('resume')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t('resumeIntro', "My professional journey in journalism and media production across Africa and the Middle East.")}
          </p>
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center"
          >
            <FaDownload className="mr-2" />
            <span>{t('downloadCV')}</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ResumeSection
              title={t('education')}
              icon={<FaGraduationCap className="text-primary-600" />}
              items={education}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ResumeSection
              title={t('experience')}
              icon={<FaBriefcase className="text-primary-600" />}
              items={experience}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <ResumeSection
            title={t('awards')}
            icon={<FaTrophy className="text-primary-600" />}
            items={awards}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SkillsSection
              title={t('professionalSkills')}
              icon={<FaCode className="text-primary-600" />}
              skills={skills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SkillsSection
              title={t('languages')}
              icon={<FaCode className="text-primary-600" />}
              skills={languages}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
