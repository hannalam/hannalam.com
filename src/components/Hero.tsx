import React from 'react';
import { Github, Linkedin, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-8 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Hanna Lam</span>
                <span className="block text-indigo-600">Full Stack Developer & Yoga Tutor</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Bridging technology and wellness through innovative solutions and mindful practices.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com/hannalam" icon={<Github />} label="GitHub" />
                  <SocialLink href="https://linkedin.com/in/sautinglam" icon={<Linkedin />} label="LinkedIn" />
                  <SocialLink href="https://medium.com/@hanna.lam" icon={<BookOpen />} label="Blog" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Woman practicing yoga with laptop nearby"
        />
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 hover:text-indigo-700 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {icon}
  </a>
);