import React from 'react';
import { projects } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  return (
    <div className="bg-white/70 backdrop-blur border border-purple-200 rounded-2xl shadow-md hover:shadow-2xl hover:border-purple-400 transition-all duration-300 relative overflow-hidden">
      {project.current && (
        <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-br-2xl z-10">
          Current Project
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-700 mb-1">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-purple-100 text-purple-800 font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-purple-700 mb-1">Key Features</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-purple-600 transition"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-purple-600 transition"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Projects" 
          subtitle="A selection of my development work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
