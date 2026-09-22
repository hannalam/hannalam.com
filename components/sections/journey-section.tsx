'use client';

import { Rocket, Code, Sparkles, Building2, Heart, Target } from 'lucide-react';

type Milestone = {
  year: string;
  title: string;
  description: string;
  icon: typeof Rocket;
  color: string;
};

const MILESTONES: Milestone[] = [
  {
    year: '2022',
    title: 'First Lines',
    description:
      'Started with HTML, CSS, and JS. Built initial web concepts and fell in love with crafting digital tools.',
    icon: Code,
    color: 'text-white/40',
  },
  {
    year: '2023',
    title: 'Full Stack Leap',
    description:
      'Dived deep into React, Node.js, and databases. Shipped my first full-stack application.',
    icon: Sparkles,
    color: 'text-purple-300',
  },
  {
    year: '2024',
    title: 'Airbnb Concierge Operator',
    description:
      'Managed short-term rental concierge operations. Gained deep domain insights into host pain points that directly inspired AutoClean and Invoice Assistant.',
    icon: Building2,
    color: 'text-cyan-300',
  },
  {
    year: '2025',
    title: 'Yoga Studio Founder & iPrana',
    description:
      'Founded a physical yoga studio and launched the iPrana brand. Combined Fly Yoga instruction with software product design (PranaDeck, Life Mission App).',
    icon: Heart,
    color: 'text-pink-300',
  },
  {
    year: '2026–2027',
    title: '10+ Impactful Micro-SaaS & Apps',
    description:
      'Building 10+ impactful web and mobile apps at the intersection of Tech, Wellness, and Fashion Business. Shipping products like AutoClean, Watermark PDF, Helper Record, OmniFlow, Wishing Tree, and House Builder.',
    icon: Target,
    color: 'text-yellow-300',
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/6 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/60">
            <Rocket className="h-3.5 w-3.5 text-purple-400" />
            Journey
          </div>
          <h2 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From first line to <span className="gradient-text">micro-SaaS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            A timeline of how I grew from curious beginner to product builder —
            every step shaped by what came before.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {MILESTONES.map((milestone, i) => {
              const Icon = milestone.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full glass-card">
                      <Icon className={`h-4 w-4 ${milestone.color}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 flex-1 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="rounded-2xl glass-card p-5 transition-all hover:bg-white/8">
                      <div
                        className={`text-xs font-bold uppercase tracking-wider ${milestone.color}`}
                      >
                        {milestone.year}
                      </div>
                      <h3 className="mt-1 font-[var(--font-space-grotesk)] text-lg font-bold text-white">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
