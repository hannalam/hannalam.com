import React from 'react';

interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Galaxia Web",
    description: "A modern web application showcasing interactive space exploration",
    url: "https://galaxia-web.netlify.app/",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Yoga Newsletter",
    description: "A platform for yoga enthusiasts to stay updated with latest practices",
    url: "https://yoga-newsletter-website.netlify.app/",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Mario-like Game",
    description: "A classic platformer game built with JavaScript",
    url: "https://mario-like-game.netlify.app/",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Drawing App",
    description: "Interactive drawing application with various tools",
    url: "https://drawing-app-javascript.netlify.app/",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Angry Birds Clone",
    description: "Recreation of the popular Angry Birds game",
    url: "https://angrybird-clone.netlify.app/",
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Asteroid Game",
    description: "Classic asteroid shooting game implementation",
    url: "https://asteroidgameclone.netlify.app/",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A showcase of my recent development work and technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, url, image }: Project) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
    </div>
    <div className="p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  </a>
);