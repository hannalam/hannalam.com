import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Hanna Lam — Full Stack Developer & Fly Yoga Tutor | Hong Kong & France',
  description:
    'Portfolio of Hanna Lam — CS graduate, International Fashion Business background, certified Fly Yoga Tutor, and founder of iPrana. Building micro-SaaS and mobile apps at the intersection of tech, wellness, and fashion.',
  openGraph: {
    title: 'Hanna Lam — Full Stack Developer & Fly Yoga Tutor | Hong Kong & France',
    description:
      'CS graduate, International Fashion Business background, Fly Yoga Tutor, and founder of iPrana. Building micro-SaaS and mobile apps at the intersection of tech, wellness, and fashion.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0B0F17' }}>
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
