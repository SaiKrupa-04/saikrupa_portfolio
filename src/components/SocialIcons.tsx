import React from 'react';
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';

interface SocialIconsProps {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  size?: number;
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  email,
  phone,
  linkedin,
  github,
  portfolio,
  size = 20,
  className = '',
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href={`mailto:${email}`}
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="Email"
        title="Email"
      >
        <Mail size={size} />
      </a>
      <a
        href={`tel:${phone.replace(/\s+/g, '')}`}
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="Phone"
        title="Phone"
      >
        <Phone size={size} />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <Linkedin size={size} />
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="GitHub"
        title="GitHub"
      >
        <Github size={size} />
      </a>
      <a
        href={portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="Portfolio"
        title="Portfolio"
      >
        <Globe size={size} />
      </a>
    </div>
  );
};

export default SocialIcons;