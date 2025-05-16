import React from 'react';
import { profile } from '../data/profile';
import SocialIcons from '../components/SocialIcons';
import saikrupaImg from './saikrupa.jpg';
import { ChevronDown } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Left Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-4 leading-tight">
              Hello, I'm <span className="text-pink-600">SaiKrupa</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-6">
              {profile.title}
            </h2>

            <p className="text-base md:text-lg text-purple-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              {profile.summary}
            </p>

            {/* Social Links */}
            <SocialIcons
              email={profile.contact.email}
              phone={profile.contact.phone}
              linkedin={profile.contact.linkedin}
              github={profile.contact.github}
              portfolio={profile.contact.portfolio}
              size={24}
              className="mb-8 justify-center md:justify-start"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transform transition duration-300 font-semibold shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-pink-500 text-pink-600 rounded-full hover:bg-pink-100 transition font-semibold shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-tr from-purple-500 to-pink-500 shadow-2xl overflow-hidden hover:scale-105 transform transition duration-300">
              <img
                src={saikrupaImg}
                alt="SaiKrupa"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#education" aria-label="Scroll down">
            <ChevronDown size={36} className="text-pink-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
