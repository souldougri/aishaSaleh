import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id: number;
  name: string;
  level: number;
}

interface SkillsSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center mb-6">
        <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-800">{title}</h2>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-800">{skill.name}</span>
              <span className="text-primary-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-primary-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
