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
    google: 'METTRE_VOTRE_CODE_GOOGLE_ICI',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white font-sans antialiased overflow-x-hidden">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}