'use client';

import { useState } from 'react';
import {
  Bot,
  FileLock,
  ClipboardList,
  Receipt,
  CalendarHeart,
  Share2,
  Target,
  TreePine,
  Home,
  Circle,
 X,
  ExternalLink,
  Github,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

type ProjectStatus = 'done' | 'ongoing' | 'pipeline';

type Project = {
  title: string;
  category: string;
  description: string;
  icon: typeof Bot;
  status: ProjectStatus;
  link: string;
  linkType: 'demo' | 'store' | 'progress';
  tech: string[];
  gradient: string;
  glow: string;
  caseStudy: {
    overview: string;
    architecture: string[];
    highlights: string[];
  };
};

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; textColor: string; dotColor: string; pulse: boolean }
> = {
  done: {
    label: 'Done',
    textColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
    pulse: false,
  },
  ongoing: {
    label: 'Ongoing',
    textColor: 'text-green-400',
    dotColor: 'bg-green-400',
    pulse: true,
  },
  pipeline: {
    label: 'In Pipeline',
    textColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    pulse: false,
  },
};

const PROJECTS: Project[] = [
  {
    title: 'AutoClean',
    category: 'Airbnb Automation Bot',
    description:
      'Automated messaging and cleaning coordination bot for Airbnb hosts via WhatsApp/Telegram API.',
    icon: Bot,
    status: 'ongoing',
    link: 'https://cleaner.hannalam.com',
    linkType: 'demo',
    tech: ['Node.js', 'FastAPI', 'Supabase', 'Twilio API'],
    gradient: 'from-purple-600/20 to-blue-500/20',
    glow: 'shadow-purple-500/10',
    caseStudy: {
      overview:
        'AutoClean streamlines Airbnb host operations by automating guest communication and cleaner scheduling through WhatsApp and Telegram bots.',
      architecture: [
        'Node.js bot server handling WhatsApp/Telegram webhooks',
        'FastAPI microservice for cleaning schedule logic',
        'Supabase for host/guest/cleaner data and real-time state',
        'Twilio API for SMS fallback and voice reminders',
      ],
      highlights: [
        'Reduced host response time by 90%',
        'Automatic cleaner dispatch based on checkout times',
        'Multi-property support with per-host configuration',
      ],
    },
  },
  {
    title: 'Watermark PDF',
    category: 'Document Privacy & Security',
    description:
      'Secure Web Reader featuring client-side WebAssembly rendering, encrypted local storage, and dynamic anti-leak watermarking.',
    icon: FileLock,
    status: 'done',
    link: 'https://pdf.hannalam.com',
    linkType: 'demo',
    tech: ['Next.js', 'WebAssembly', 'pdf-lib', 'Tailwind CSS'],
    gradient: 'from-cyan-500/20 to-teal-500/20',
    glow: 'shadow-cyan-500/10',
    caseStudy: {
      overview:
        'A privacy-first PDF reader that renders documents entirely client-side via WebAssembly, with dynamic watermarking and encrypted local storage.',
      architecture: [
        'Next.js frontend with WebAssembly-based PDF rendering',
        'pdf-lib for dynamic, per-user watermark overlay',
        'Encrypted IndexedDB local storage — no file leaves the device',
        'Tailwind CSS for a calm, distraction-free reading UI',
      ],
      highlights: [
        'Zero server-side file storage',
        'Dynamic watermark with viewer name + timestamp',
        'Screenshot detection via Visibility API',
      ],
    },
  },
  {
    title: 'Helper Record App',
    category: 'Mobile Work Tracker',
    description:
      'Offline-first salary and work-hour logging mobile app with automatic PDF/CSV invoice generation for part-time workers and tutors.',
    icon: ClipboardList,
    status: 'done',
    link: 'https://play.google.com',
    linkType: 'store',
    tech: ['React Native', 'Expo', 'SQLite', 'Chart Kit'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    glow: 'shadow-pink-500/10',
    caseStudy: {
      overview:
        'A mobile app for part-time workers and tutors to log work hours, track earnings, and generate professional invoices offline.',
      architecture: [
        'React Native + Expo for cross-platform deployment',
        'SQLite for offline-first local data persistence',
        'Chart Kit for earnings visualization',
        'Automatic PDF/CSV invoice generation',
      ],
      highlights: [
        'Fully offline — no internet required',
        'One-tap PDF invoice export',
        'Google Play Store published',
      ],
    },
  },
  {
    title: 'Invoice Assistant',
    category: 'Airbnb Tax Compliance',
    description:
      'Automated tourist tax calculation and local compliant PDF invoice generator for European & global short-term rental hosts.',
    icon: Receipt,
    status: 'done',
    link: 'https://invoice.hannalam.com',
    linkType: 'demo',
    tech: ['Next.js', 'Supabase', 'PDFKit', 'Stripe'],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    glow: 'shadow-blue-500/10',
    caseStudy: {
      overview:
        'A compliance tool that calculates tourist taxes across European cities and generates locally compliant PDF invoices for short-term rental hosts.',
      architecture: [
        'Next.js app with dynamic tax rule engine',
        'Supabase for host and property management',
        'PDFKit for server-side compliant invoice generation',
        'Stripe for payment processing',
      ],
      highlights: [
        'Supports 20+ European city tax rules',
        'Auto-filled guest and stay details',
        'Stripe checkout for tax collection',
      ],
    },
  },
  {
    title: 'PranaDeck',
    category: 'Solo Educator Booking Platform',
    description:
      'One-page booking, bio-link, and automated scheduling platform for independent yoga teachers and wellness instructors.',
    icon: CalendarHeart,
    status: 'ongoing',
    link: 'https://prana.hannalam.com',
    linkType: 'demo',
    tech: ['Next.js', 'Stripe Connect', 'Google Calendar API', 'Supabase'],
    gradient: 'from-teal-500/20 to-cyan-500/20',
    glow: 'shadow-teal-500/10',
    caseStudy: {
      overview:
        'PranaDeck gives independent yoga teachers a one-page booking site with automated scheduling, payments, and calendar sync.',
      architecture: [
        'Next.js with dynamic per-teacher pages',
        'Stripe Connect for direct payments to instructors',
        'Google Calendar API for real-time availability',
        'Supabase for teacher profiles and bookings',
      ],
      highlights: [
        'Zero-commission direct payments',
        'Automatic calendar sync',
        'Bio-link page with booking embed',
      ],
    },
  },
  {
    title: 'OmniFlow',
    category: 'Creator Content Command Center',
    description:
      'Centralized control panel for multi-platform creators (IG, Rednote, YouTube). Features an interactive bidirectional tree canvas, smart content calendar, and async publishing pipelines.',
    icon: Share2,
    status: 'ongoing',
    link: 'https://map.hannalam.com',
    linkType: 'demo',
    tech: ['React Flow / D3.js', 'React', 'Tailwind CSS', 'Zustand'],
    gradient: 'from-orange-500/20 to-amber-500/20',
    glow: 'shadow-orange-500/10',
    caseStudy: {
      overview:
        'OmniFlow is a command center for multi-platform content creators, with an interactive tree canvas for content strategy and async publishing pipelines.',
      architecture: [
        'React Flow / D3.js for bidirectional content tree canvas',
        'React with Zustand for lightweight state management',
        'Tailwind CSS for the control panel UI',
        'Async publishing pipelines for IG, Rednote, YouTube',
      ],
      highlights: [
        'Visual content strategy mapping',
        'Multi-platform scheduling',
        'Smart content calendar view',
      ],
    },
  },
  {
    title: 'Life Mission App',
    category: 'Mindfulness PWA',
    description:
      'Lightweight, offline-capable PWA for daily mental wellness check-ins, intentional habit tracking, and personal alignment.',
    icon: Target,
    status: 'done',
    link: 'https://life.hannalam.com',
    linkType: 'demo',
    tech: ['PWA', 'Alpine.js', 'Tailwind CSS', 'LocalStorage'],
    gradient: 'from-green-500/20 to-emerald-500/20',
    glow: 'shadow-green-500/10',
    caseStudy: {
      overview:
        'A lightweight PWA for daily mental wellness check-ins, habit tracking, and personal alignment — works fully offline.',
      architecture: [
        'PWA with service worker for offline capability',
        'Alpine.js for lightweight reactivity',
        'Tailwind CSS for calm, minimal UI',
        'LocalStorage for zero-backend data persistence',
      ],
      highlights: [
        'Installable on any device',
        'No backend — 100% private',
        'Daily intention and habit tracking',
      ],
    },
  },
  {
    title: 'Wishing Tree',
    category: 'Social Goal-Sharing App',
    description:
      'Collaborative mobile app where couples and friends cultivate a shared 2D/3D digital tree with customizable visual dream fruits, synced to an interactive global forest.',
    icon: TreePine,
    status: 'pipeline',
    link: 'In Progress',
    linkType: 'progress',
    tech: ['React Native', 'Skia', 'Three.js', 'Firebase Realtime DB'],
    gradient: 'from-purple-500/20 to-fuchsia-500/20',
    glow: 'shadow-purple-500/10',
    caseStudy: {
      overview:
        'A collaborative social app where couples and friends grow a shared digital tree with customizable dream fruits, connected to a global forest.',
      architecture: [
        'React Native with Skia for 2D/3D tree rendering',
        'Three.js for immersive global forest view',
        'Firebase Realtime DB for shared tree sync',
        'Customizable visual dream fruits per goal',
      ],
      highlights: [
        'Real-time collaborative tree growth',
        '2D and 3D visualization modes',
        'Global forest community view',
      ],
    },
  },
  {
    title: 'House Builder',
    category: 'Interactive 2D Layout Canvas',
    description:
      'Gamified 2D drag-and-drop floor plan and space puzzle builder for interior layout visualization.',
    icon: Home,
    status: 'pipeline',
    link: 'In Progress',
    linkType: 'progress',
    tech: ['HTML5 Canvas', 'PixiJS', 'React', 'Zustand'],
    gradient: 'from-amber-500/20 to-yellow-500/20',
    glow: 'shadow-amber-500/10',
    caseStudy: {
      overview:
        'A gamified drag-and-drop floor plan builder for interior space visualization, turning layout design into a puzzle game.',
      architecture: [
        'HTML5 Canvas with PixiJS for smooth 2D rendering',
        'React with Zustand for state management',
        'Drag-and-drop furniture and wall placement',
        'Puzzle-mode challenges for space optimization',
      ],
      highlights: [
        'Real-time collision detection',
        'Furniture catalog with dimensions',
        'Export to image or JSON',
      ],
    },
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
      <span className="relative flex h-2 w-2">
        {config.pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${config.dotColor} opacity-75`}
          />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${config.dotColor}`}
        />
      </span>
      <span className={config.textColor}>{config.label}</span>
    </div>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl glass-card p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl glass">
            <Icon className="h-7 w-7 text-white/80" />
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-white/40">
              {project.category}
            </div>
            <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/60">
          {project.caseStudy.overview}
        </p>

        {/* Architecture */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
            Architecture
          </h4>
          <ul className="mt-3 space-y-2">
            {project.caseStudy.architecture.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-white/60"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
            Highlights
          </h4>
          <ul className="mt-3 space-y-2">
            {project.caseStudy.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-white/60"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.linkType === 'demo' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
            >
              <ExternalLink className="h-4 w-4" />
              View Live Demo
            </a>
          )}
          <a
            href="https://github.com/hannalam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/8"
          >
            <Github className="h-4 w-4" />
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const MOBILE_VISIBLE_COUNT = 3;
  const visibleProjects = PROJECTS.slice(0, MOBILE_VISIBLE_COUNT);
  const hiddenProjects = PROJECTS.slice(MOBILE_VISIBLE_COUNT);

  const toggleExpand = () => {
    const wasExpanded = mobileExpanded;
    setMobileExpanded(!wasExpanded);
    if (wasExpanded) {
      const el = document.querySelector('#projects');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/60">
            <Circle className="h-3 w-3 fill-purple-400 text-purple-400" />
            Built & Shipped
          </div>
          <h2 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured Products & <span className="gradient-text">Micro-SaaS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            A curated collection of SaaS products, mobile apps, and creative
            tech experiments — shipped or actively in build.
          </p>
        </div>

        {/* Project cards — Desktop: all visible. Mobile: only first 3 by default */}
        {/* Desktop grid (all 9) */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${project.glow}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Gradient overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex flex-1 flex-col">
                  {/* Icon + Status */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl glass">
                      <Icon className="h-6 w-6 text-white/80" />
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  {/* Title */}
                  <div className="mt-5">
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {project.category}
                    </div>
                    <h3 className="mt-1 font-[var(--font-space-grotesk)] text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer actions */}
                  <div className="mt-auto flex items-center gap-3 pt-5">
                    {project.linkType === 'demo' || project.linkType === 'store' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30">
                        <Circle className="h-3 w-3" />
                        In Progress
                      </span>
                    )}

                    <span className="text-white/15">|</span>

                    <button
                      onClick={() => setModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      GitHub / Case Study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: visible projects (first 3) */}
        <div className="grid gap-6 md:hidden">
          {visibleProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${project.glow}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl glass">
                      <Icon className="h-6 w-6 text-white/80" />
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <div className="mt-5">
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {project.category}
                    </div>
                    <h3 className="mt-1 font-[var(--font-space-grotesk)] text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-3 pt-5">
                    {project.linkType === 'demo' || project.linkType === 'store' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30">
                        <Circle className="h-3 w-3" />
                        In Progress
                      </span>
                    )}
                    <span className="text-white/15">|</span>
                    <button
                      onClick={() => setModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      GitHub / Case Study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: expandable hidden projects */}
        <div
          className={`grid gap-6 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            mobileExpanded
              ? 'grid-rows-[1fr] opacity-100 mt-6'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <div className="grid gap-6">
              {hiddenProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className={`group relative flex flex-col overflow-hidden rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${project.glow}`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="relative flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl glass">
                          <Icon className="h-6 w-6 text-white/80" />
                        </div>
                        <StatusBadge status={project.status} />
                      </div>
                      <div className="mt-5">
                        <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                          {project.category}
                        </div>
                        <h3 className="mt-1 font-[var(--font-space-grotesk)] text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/55">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-3 pt-5">
                        {project.linkType === 'demo' || project.linkType === 'store' ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            View Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30">
                            <Circle className="h-3 w-3" />
                            In Progress
                          </span>
                        )}
                        <span className="text-white/15">|</span>
                        <button
                          onClick={() => setModalProject(project)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                          GitHub / Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile toggle button */}
        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={toggleExpand}
            className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/8 hover:text-white"
          >
            {mobileExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show All Projects ({PROJECTS.length})
              </>
            )}
          </button>
        </div>
      </div>

      {modalProject && (
        <CaseStudyModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
