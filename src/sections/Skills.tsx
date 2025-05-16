import React from 'react';
import { skills } from '../data/profile';
import SectionHeading from '../components/SectionHeading';

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 text-gray-800 shadow-md border border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300 text-sm font-semibold">
      {skill}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Toolbox" 
          subtitle="A mix of tools, languages, and platforms I excel at"
        />

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {skills.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-800 tracking-wide">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">🚀 Currently Exploring</h3>
          <div className="flex flex-wrap gap-4">
            {["Cloud Architecture", "TypeScript", "Docker", "Next.js", "Machine Learning"].map((topic, idx) => (
              <span
                key={idx}
                className="bg-white bg-opacity-20 backdrop-blur-lg text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-opacity-30 transition"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
