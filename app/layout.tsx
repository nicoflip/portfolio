import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/components/SmoothScrolling';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Portfolio DevOps & Cybersécurité | Dimitri Linqué',
  description: 'Portfolio professionnel de Dimitri Linqué, passionné par le DevOps, l\'administration système, réseau et la cybersécurité. Découvrez mes compétences et projets.',
  keywords: ['Dimitri Linqué', 'Portfolio', 'DevOps', 'Cybersécurité', 'SysAdmin', 'Cloud', 'Infrastructure', 'Réseau'],
  authors: [{ name: 'Dimitri Linqué' }],
  creator: 'Dimitri Linqué',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Portfolio DevOps & Cybersécurité | Dimitri Linqué',
    description: 'Découvrez le portfolio professionnel de Dimitri Linqué : projets DevOps, Cybersécurité et infrastructures IT.',
    siteName: 'Dimitri Linqué Portfolio'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'SKfmHWqJW3aSmuk_nlDd8vtPlncQkb5DDjrXCNaGCJ4',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dimitri Linqué',
    url: 'https://dimitri-linque.fr', // Mettez à jour si différent
    jobTitle: 'Technicien Système, Réseau, DevOps et Cybersécurité',
    knowsAbout: [
      'DevOps', 
      'Cybersécurité', 
      'Administration Système', 
      'Réseaux Informatiques', 
      'Développement Web', 
      'React', 
      'Next.js'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'BTS SIO SISR'
    }
  };

  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white font-sans antialiased overflow-x-hidden">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}