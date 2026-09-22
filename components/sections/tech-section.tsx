'use client';

import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
  Terminal,
  Layers,
  Server,
  Cpu,
} from 'lucide-react';

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Primary Stack',
    level: 'Advanced',
    levelColor: 'text-green-400',
    techs: [
      'React',
      'Next.js',
      'TypeScript',
      'React Native',
      'Node.js',
      'Supabase',
      'Tailwind CSS',
    ],
    accent: 'from-purple-500/10 to-blue-500/10',
    iconColor: 'text-purple-300',
  },
  {
    icon: Server,
    title: 'Backend & Cloud',
    level: 'Proficient',
    levelColor: 'text-cyan-400',
    techs: [
      'Python',
      'FastAPI',
      'Django',
      'PostgreSQL',
      'SQLite',
      'AWS / Vercel',
    ],
    accent: 'from-cyan-500/10 to-teal-500/10',
    iconColor: 'text-cyan-300',
  },
  {
    icon: Cpu,
    title: 'Exploratory & Systems',
    level: 'Exploring',
    levelColor: 'text-amber-400',
    techs: ['WebAssembly', 'Rust', 'D3.js', 'Three.js'],
    accent: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-300',
  },
];

const TOOLS = [
  { icon: Code2, label: 'React' },
  { icon: Database, label: 'Supabase' },
  { icon: Cloud, label: 'AWS' },
  { icon: Smartphone, label: 'React Native' },
  { icon: GitBranch, label: 'Git' },
  { icon: Terminal, label: 'Vercel' },
];

export default function TechSection() {
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Description */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-purple-300">
              <Layers className="h-3.5 w-3.5" />
              Tech
            </div>
            <h2 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering with{' '}
              <span className="gradient-text-purple">precision</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              I specialize in full stack development with a focus on shipping
              micro-SaaS products. My toolkit spans modern web frameworks,
              serverless architecture, and privacy-first technologies. I
              believe in clean code, thoughtful architecture, and tools that
              solve real problems.
            </p>

            {/* Tool grid */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.label}
                    className="flex flex-col items-center gap-2 rounded-xl glass-card p-4 transition-all hover:bg-white/8"
                  >
                    <Icon className="h-6 w-6 text-purple-300" />
                    <span className="text-xs font-medium text-white/60">
                      {tool.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Category grid */}
          <div className="flex flex-col gap-4">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="relative overflow-hidden rounded-2xl glass-card p-5 transition-all hover:bg-white/8"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.accent} opacity-50`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg glass">
                          <Icon className={`h-5 w-5 ${category.iconColor}`} />
                        </div>
                        <h3 className="font-[var(--font-space-grotesk)] text-base font-bold text-white">
                          {category.title}
                        </h3>
                      </div>
                      <span
                        className={`rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium ${category.levelColor}`}
                      >
                        {category.level}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
