import { Code, Dumbbell, BookOpen, Mail } from 'lucide-react';

export const navigationLinks = [
  {
    href: '#about',
    icon: Code,
    text: 'Tech',
  },
  {
    href: '#yoga',
    icon: Dumbbell,
    text: 'Yoga',
  },
  {
    href: 'https://medium.com/@hanna.lam',
    icon: BookOpen,
    text: 'Blog',
    external: true,
  },
  {
    href: '#contact',
    icon: Mail,
    text: 'Contact',
  },
] as const;