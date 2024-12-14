import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tech Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Full stack developer with expertise in modern web technologies and a passion for creating intuitive user experiences.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Code2 className="h-8 w-8 text-indigo-600" />}
              title="Frontend Development"
              description="Expertise in React, TypeScript, and modern CSS frameworks for building responsive and accessible web applications."
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-indigo-600" />}
              title="Backend Development"
              description="Strong foundation in Node.js, Python, Django, and database design for scalable server-side solutions."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-indigo-600" />}
              title="Full Stack Solutions"
              description="End-to-end development experience with React, Django, and Node.js, focusing on performance and best practices."
            />
          </div>
        </div>
      </div>
    </section>
  );
}