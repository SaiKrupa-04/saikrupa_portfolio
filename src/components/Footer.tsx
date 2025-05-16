import React from 'react';
import { profile } from '../data/profile';
import SocialIcons from './SocialIcons';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl font-extrabold text-purple-800 mb-2">
              {profile.name}
            </h2>
            <p className="text-gray-600 text-sm">{profile.title}</p>
          </div>

          <div>
            <SocialIcons
              email={profile.contact.email}
              phone={profile.contact.phone}
              linkedin={profile.contact.linkedin}
              github={profile.contact.github}
              portfolio={profile.contact.portfolio}
              className="flex justify-center gap-4 md:justify-end"
              size={24}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            &copy; {year} {profile.name}. Made with
            <Heart className="text-pink-500 animate-pulse" size={16} /> love. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
