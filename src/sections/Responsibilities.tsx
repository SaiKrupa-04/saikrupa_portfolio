import React from 'react';
import { responsibilities } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import { Calendar } from 'lucide-react';

const Responsibilities: React.FC = () => {
  return (
    <section id="responsibilities" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Positions of Responsibility" 
          subtitle="Leadership roles and contributions"
        />

        <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b from-purple-400 via-pink-400 to-purple-600">
          <div className="space-y-14">
            {responsibilities.map((role, index) => (
              <div key={index} className="relative md:flex md:items-start">
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 bg-gradient-to-tr from-pink-500 to-purple-600 w-5 h-5 rounded-full z-10 shadow-lg animate-pulse"></div>

                {/* Time Period */}
                <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0 text-sm text-gray-600 text-left md:text-right flex items-center md:justify-end gap-2 md:gap-1">
                  <Calendar size={16} className="text-purple-500" />
                  <span className="font-medium">{role.period}</span>
                </div>

                {/* Role Card */}
                <div className="md:w-1/2 bg-white/80 backdrop-blur border-l-4 border-purple-500 shadow-xl rounded-md p-6 ml-8 md:ml-0 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {role.title}
                  </h3>
                  <p className="text-purple-700 font-medium mb-3">{role.organization}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
