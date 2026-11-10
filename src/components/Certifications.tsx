'use client';

import { useState } from 'react';
import { Content } from '@/data/types';
import { LangCode } from '@/data';

interface CertificationsProps {
  content: Content;
  lang?: LangCode;
}

type FilterKey = 'all' | 'it' | 'training' | 'language';

export default function Certifications({ content, lang = 'en' }: CertificationsProps) {
  const [filter, setFilter] = useState<FilterKey>('all');

  const viewTextMap: Record<LangCode, string> = {
    en: 'View Credential',
    id: 'Lihat Sertifikat',
    ja: '証明書を表示',
  };
  const viewText = viewTextMap[lang] || 'View Credential';

  const filters = content.certifications.filters || {
    all: 'All',
    it: 'Security & Network',
    training: 'Training & Internship',
    language: 'Languages',
  };

  const items = content.certifications.items;
  const filteredItems = filter === 'all' ? items : items.filter((item) => item.category === filter);

  const filterButtons: { key: FilterKey; label: string; count: number }[] = [
    { key: 'all', label: filters.all, count: items.length },
    { key: 'it', label: filters.it, count: items.filter((i) => i.category === 'it').length },
    { key: 'training', label: filters.training, count: items.filter((i) => i.category === 'training').length },
    { key: 'language', label: filters.language, count: items.filter((i) => i.category === 'language').length },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
              {content.certifications.sectionTitle}
            </h2>
            <div className="w-16 h-1 bg-teal-600 fade-in" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 fade-in">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                type="button"
                onClick={() => setFilter(btn.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  filter === btn.key
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400'
                }`}
              >
                <span>{btn.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    filter === btn.key
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {btn.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {filteredItems.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {cert.thumbnail ? (
                <a
                  href={cert.file || '#'}
                  target={cert.file ? '_blank' : undefined}
                  rel={cert.file ? 'noopener noreferrer' : undefined}
                  className="relative h-44 bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-700 block cursor-pointer"
                >
                  <img
                    src={cert.thumbnail}
                    alt={cert.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-900/40">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-100 shadow flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {viewText}
                    </span>
                  </div>
                </a>
              ) : (
                <div className="h-20 bg-gradient-to-r from-navy-500/10 to-teal-500/10 dark:from-navy-900/40 dark:to-teal-900/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                      {cert.year}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 truncate">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-navy-500 dark:text-white leading-snug">
                    {cert.name}
                  </h3>
                </div>

                {cert.file && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {viewText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
