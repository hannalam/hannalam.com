'use client';

import { Github, Linkedin, Instagram, ArrowUp, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <button
              onClick={scrollToTop}
              className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-white"
            >
              <span className="gradient-text">hanna</span>
              <span className="text-white/90">lam</span>
            </button>
            <p className="mt-2 text-sm text-white/40">
              Full Stack Developer & Fly Yoga Tutor
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/30">
              <MapPin className="h-3 w-3 text-purple-400" />
              Hong Kong & France
            </p>
            <p className="mt-1 items-center gap-1.5 text-xs text-white/30">
              hannalam.work@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hannalam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:bg-white/8"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white/70" />
            </a>
            <a
              href="https://www.linkedin.com/in/sautinglam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:bg-white/8"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white/70" />
            </a>
            <a
              href="https://www.instagram.com/hanna.lam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:bg-white/8"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white/70" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-xs font-medium text-white/60 transition-all hover:bg-white/8 hover:text-white"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>

          <div className="border-t border-white/10 pt-6 text-xs text-white/30">
            © {new Date().getFullYear()} Hanna Lam — Full Stack Developer & Fly
            Yoga Tutor | Hong Kong & France. Built with intention.
          </div>
        </div>
      </div>
    </footer>
  );
}
