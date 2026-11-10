'use client';

import { useState, useEffect } from 'react';
import { getContent, LangCode } from '@/data';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<LangCode>('en');
  const [dark, setDark] = useState(false);
  const content = getContent(lang);

  // Dark mode: check system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <>
      <Navbar
        content={content}
        lang={lang}
        setLang={setLang}
        dark={dark}
        setDark={setDark}
      />
      <main>
        <Hero content={content} lang={lang} />
        <About content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Skills content={content} />
        <Education content={content} />
        <Certifications content={content} lang={lang} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
