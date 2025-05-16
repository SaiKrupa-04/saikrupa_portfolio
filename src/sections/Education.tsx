import React from 'react';
import { profile } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const { education } = profile;

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and achievements"
        />

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03] border border-purple-200">
            <div className="p-8 border-b border-purple-300">
              <h3 className="text-3xl font-extrabold text-purple-800 mb-3">
                {education.degree}
              </h3>
              <div className="flex items-center text-purple-700 space-x-3">
                <GraduationCap size={24} />
                <span className="text-lg font-semibold">{education.institution}</span>
              </div>
            </div>

            <div className="p-8 bg-purple-50 rounded-b-2xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Calendar size={22} className="text-purple-600" />
                <div>
                  <p className="text-sm text-purple-500">Expected Graduation</p>
                  <p className="text-lg font-semibold text-purple-700">{education.graduation}</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <Award size={22} className="text-purple-600" />
                <div>
                  <p className="text-sm text-purple-500">GPA</p>
                  <p className="text-lg font-semibold text-purple-700">{education.gpa}</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <Calendar size={22} className="text-purple-600" />
                <div>
                  <p className="text-sm text-purple-500">Current Status</p>
                  <p className="text-lg font-semibold text-purple-700">{education.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
