import React from 'react';
import { motion } from 'framer-motion';

interface ResumeItem {
  id: number;
  institution?: string;
  company?: string;
  title: string;
  degree?: string;
  organization?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  description: string;
}

interface ResumeSectionProps {
  title: string;
  icon: React.ReactNode;
  items: ResumeItem[];
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center mb-6">
        <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-800">{title}</h2>
      </div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary-200"
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-primary-100"></div>
            
            <div className="mb-2">
              {item.degree ? (
                <h3 className="text-xl font-serif font-bold text-gray-800">{item.degree}</h3>
              ) : item.title ? (
                <h3 className="text-xl font-serif font-bold text-gray-800">{item.title}</h3>
              ) : null}
              
              {item.institution ? (
                <div className="text-primary-600 font-medium">{item.institution}</div>
              ) : item.company ? (
                <div className="text-primary-600 font-medium">{item.company}</div>
              ) : item.organization ? (
                <div className="text-primary-600 font-medium">{item.organization}</div>
              ) : null}
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
              {item.location && (
                <span className="mr-4">{item.location}</span>
              )}
              
              {(item.startDate || item.date) && (
                <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                  {item.startDate && item.endDate
                    ? `${item.startDate} - ${item.endDate}`
                    : item.date}
                </span>
              )}
            </div>
            
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
