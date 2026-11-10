'use client';

import { useState } from 'react';
import { Content } from '@/data/types';
import { LangCode } from '@/data';

interface HeroProps {
  content: Content;
  lang?: LangCode;
}

export default function Hero({ content, lang = 'en' }: HeroProps) {
  const [photoStyle, setPhotoStyle] = useState<'wb' | 'red' | 'yellow'>('wb');

  const photoMap = {
    wb: '/images/profile-wb.jpg',
    red: '/images/profile-red.jpg',
    yellow: '/images/profile-yellow.jpg',
  };

  const cvMap: Record<LangCode, string> = {
    en: '/cv/CV_Ilham_Sani_EN.pdf',
    id: '/cv/CV_Ilham_Sani_ID.pdf',
    ja: '/cv/CV_Ilham_Sani_JP.pdf',
  };

  const currentCv = cvMap[lang] || '/cv/CV_Ilham_Sani.pdf';

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-teal-600 dark:text-teal-400 font-medium text-lg mb-2">
              {content.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-500 dark:text-white mb-4 leading-tight">
              {content.hero.name}
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-6">
              {content.hero.tagline}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              {content.hero.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow"
              >
                {content.hero.cta}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={currentCv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy-500 dark:border-teal-400 text-navy-500 dark:text-teal-400 hover:bg-navy-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-900 font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {content.hero.downloadCV} ({lang.toUpperCase()})
              </a>
            </div>
          </div>

          {/* Photo Showcase */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative group">
              {/* Subtle background glow */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-500 to-navy-500 dark:from-teal-400 dark:to-blue-600 opacity-25 group-hover:opacity-50 blur-lg transition duration-500" />
              <img
                src={photoMap[photoStyle]}
                alt={content.hero.name}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl transition duration-300"
              />
            </div>

            {/* Quick photo switcher */}
            <div className="flex items-center gap-1.5 mt-4 px-3 py-1 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs text-slate-500 dark:text-slate-400">
              <span className="text-[11px] font-medium mr-1">Photo:</span>
              <button
                type="button"
                onClick={() => setPhotoStyle('wb')}
                className={`px-2 py-0.5 rounded-full transition-colors ${photoStyle === 'wb' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-semibold' : 'hover:text-slate-800 dark:hover:text-white'}`}
              >
                Studio
              </button>
              <button
                type="button"
                onClick={() => setPhotoStyle('red')}
                className={`px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 ${photoStyle === 'red' ? 'bg-red-600 text-white font-semibold' : 'hover:text-red-600'}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Red
              </button>
              <button
                type="button"
                onClick={() => setPhotoStyle('yellow')}
                className={`px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 ${photoStyle === 'yellow' ? 'bg-amber-500 text-white font-semibold' : 'hover:text-amber-500'}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                Yellow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
