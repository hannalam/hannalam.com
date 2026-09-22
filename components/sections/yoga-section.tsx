'use client';

import { Flower2, Wind, Heart, Brain, Sparkles } from 'lucide-react';

const PRACTICES = [
  {
    icon: Wind,
    title: 'Fly & Floor Yoga',
    description:
      'Certified Fly Yoga and traditional floor yoga tutor — combining aerial hammock sequences and grounded mat practice for strength, flexibility, and balance.',
  },
  {
    icon: Flower2,
    title: 'Asana Flow',
    description:
      'Vinyasa and Hatha-inspired sequences. Designing mindful movement that mirrors good code: structured, intentional, and expressive.',
  },
  {
    icon: Brain,
    title: 'Mindful Contemplation',
    description:
      'Reflecting on life, human connection, and philosophy. Using quiet moments to gain perspective and spark intentional product design.',
  },
  {
    icon: Heart,
    title: 'iPrana',
    description:
      'My wellness & tech initiative — building micro-SaaS and mobile apps that bring mindful philosophy into digital tools.',
  },
];

export default function YogaSection() {
  return (
    <section id="yoga" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-12">
          {/* Left: Image / Visual — 2 of 5 columns (40%) */}
          <div className="relative order-2 lg:order-1 lg:col-span-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl glass-card mx-auto max-w-sm">
              {/* Decorative mandala-like pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 animate-float-slow rounded-full border border-cyan-400/20"
                      style={{
                        transform: `rotate(${i * 22.5}deg) scaleY(0.4)`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 animate-float rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-400/20 blur-md" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flower2 className="h-10 w-10 text-cyan-300/80" />
                  </div>
                </div>
              </div>
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 animate-float"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${15 + i * 13}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Content — 3 of 5 columns (60%) */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Yoga & Wellness
            </div>
            <h2 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building with <span className="text-cyan-400">breath</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              As a certified Fly Yoga & Traditional Floor Yoga Tutor and founder
              of iPrana, yoga is not just my off-screen practice — it shapes how
              I approach problem-solving and product design. The discipline of
              the mat translates directly to the discipline of the keyboard:
              presence, patience, and purposeful movement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PRACTICES.map((practice) => {
                const Icon = practice.icon;
                return (
                  <div
                    key={practice.title}
                    className="rounded-xl glass-card p-5 transition-all hover:bg-white/8"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-white">
                      {practice.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                      {practice.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
