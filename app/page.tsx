"use client";

import Scene from '@/components/Scene';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Parcours from '@/components/Parcours';
import Projects from '@/components/Projects';
import Veille from '@/components/Veille';
import EpreuveE5 from '@/components/EpreuveE5';
import Contacts from '@/components/Contacts.js';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="text-white min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <Scene />
      
      <Hero />
      <div className="w-full h-24 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
      <div className="flex w-full justify-center px-6 py-8 relative z-10">
        <div className="max-w-5xl w-full flex flex-col gap-y-8">
          <About />
          <Certifications />
          <Parcours />
          <Projects />
          <Veille />
          <EpreuveE5 />
          <Contacts />
          <Footer />
        </div>
      </div>
    </main>
  );
}