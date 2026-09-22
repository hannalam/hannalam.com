'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Tech', href: '#tech' },
  { label: 'Yoga', href: '#yoga' },
  { label: 'Art', href: '#art' },
  { label: 'Journey', href: '#journey' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-3 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white"
        >
          <span className="gradient-text">hanna</span>
          <span className="text-white/90">lam</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/hannalam"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sautinglam/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-3 glass mx-4 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="rounded-lg px-4 py-2.5 text-left text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
              <a
                href="https://github.com/hannalam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 text-sm text-white/80"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sautinglam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 text-sm text-white/80"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
