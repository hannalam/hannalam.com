'use client';

import dynamic from 'next/dynamic';
import { Github, Linkedin, ArrowDown, Sparkles, MapPin } from 'lucide-react';

const CosmicCanvas = dynamic(() => import('./cosmic-canvas'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-purple-400" />
    </div>
  ),
});

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-[15%] top-[40%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[40%] h-[300px] w-[300px] rounded-full bg-pink-500/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-4">
        {/* Text — appears first on mobile, left on desktop */}
        <div className="order-1 lg:order-1">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            Available for freelance & collaborations
          </div>

          <h1
            className="animate-fade-up mt-6 font-[var(--font-space-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.1s' }}
          >
            Hanna Lam
            <br />
            <span className="gradient-text animate-gradient">
              Full Stack Developer
            </span>
            <br />
            <span className="text-white/90 text-3xl sm:text-4xl lg:text-5xl">
              & Micro-SaaS Builder
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            CS graduate with an International Fashion Business background,
            certified Fly Yoga Tutor, and founder of{' '}
            <span className="text-white/80 font-medium">iPrana</span> — building
            micro-SaaS and mobile apps at the intersection of tech, wellness,
            and fashion.
          </p>

          <div
            className="animate-fade-up mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40"
            style={{ animationDelay: '0.25s' }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-purple-400" />
              Hong Kong & France
            </span>
            <span className="text-white/20">•</span>
            <span>Fly Yoga Tutor</span>
            <span className="text-white/20">•</span>
            <span>Building under iPrana</span>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Explore Projects</span>
              <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <a
              href="https://github.com/hannalam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3.5 text-sm font-medium text-white/80 transition-all hover:bg-white/8"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sautinglam/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3.5 text-sm font-medium text-white/80 transition-all hover:bg-white/8"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-up mt-10 flex gap-8 border-t border-white/10 pt-6"
            style={{ animationDelay: '0.4s' }}
          >
            <div>
              <div className="font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
                9+
              </div>
              <div className="text-xs text-white/50">Products Built</div>
            </div>
            <div>
              <div className="font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
                4
              </div>
              <div className="text-xs text-white/50">Micro-SaaS Live</div>
            </div>
            <div>
              <div className="font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
                HK & FR
              </div>
              <div className="text-xs text-white/50">Based Between</div>
            </div>
          </div>
        </div>

        {/* 3D Canvas — appears after text on mobile, right on desktop */}
        <div className="order-2 h-[320px] sm:h-[400px] lg:order-2 lg:h-[560px]">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl glass-card" />
            <div className="absolute inset-0">
              <CosmicCanvas />
            </div>
            <div className="pointer-events-none absolute left-4 top-4 rounded-lg glass px-3 py-1.5 text-xs text-white/50">
              Cosmic Map — Interactive
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2 text-white/30">
          <div className="text-xs">Scroll</div>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
