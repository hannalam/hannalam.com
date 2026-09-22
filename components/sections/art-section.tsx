'use client';

import { Palette, Video, Camera, Youtube, Sparkles } from 'lucide-react';

const GALLERY = [
  {
    icon: Video,
    title: 'Video Editing & AI Films',
    description:
      'Crafting engaging video content using modern editing tools and AI generative video models (Runway, Sora, Pika).',
    color: 'text-pink-300',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Camera,
    title: 'AI Photography & Visuals',
    description:
      'Exploring visual aesthetics through AI prompt engineering, digital image synthesis, and photography.',
    color: 'text-rose-300',
    bg: 'bg-rose-500/10',
  },
  {
    icon: Youtube,
    title: 'Life Vlog & Content Sharing',
    description:
      'Documenting and sharing daily life, remote work, Fly Yoga practices, and tech building across social media.',
    color: 'text-fuchsia-300',
    bg: 'bg-fuchsia-500/10',
  },
  {
    icon: Sparkles,
    title: 'Generative Art & Design',
    description:
      'Code-driven visual experiments, shaders, and UI aesthetics blending art with technology.',
    color: 'text-purple-300',
    bg: 'bg-purple-500/10',
  },
];

export default function ArtSection() {
  return (
    <section id="art" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-pink-300">
            <Palette className="h-3.5 w-3.5" />
            Art
          </div>
          <h2 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Creating at the <span className="text-pink-400">edge</span> of code & canvas
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55">
            Art is where my technical skills meet intuition. Whether it's
            AI-generated visuals, video editing, or life vlogging, I treat
            every creative act as an exploration of form, feeling, and
            function.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${item.bg} blur-2xl transition-all duration-500 group-hover:scale-150`}
                />
                <div className="relative">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="mt-4 font-[var(--font-space-grotesk)] text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
