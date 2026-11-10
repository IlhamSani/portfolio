'use client';

import { useState } from 'react';
import { Content, Project } from '@/data/types';

interface ProjectsProps {
  content: Content;
}

function ProjectCard({ project }: { project: Project }) {
  const gallery =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentImg = gallery[activeIndex];

  const prevImage = () =>
    setActiveIndex((idx) => (idx - 1 + gallery.length) % gallery.length);
  const nextImage = () =>
    setActiveIndex((idx) => (idx + 1) % gallery.length);

  return (
    <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in flex flex-col">
      {currentImg && (
        <div className="relative h-52 bg-slate-200 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-700">
          <a
            href={currentImg}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={currentImg}
              alt={`${project.title} (${activeIndex + 1})`}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </a>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-slate-900/65 text-white text-[11px] font-medium">
                {activeIndex + 1} / {gallery.length}
              </span>
            </>
          )}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {!currentImg && (
            <div className="w-10 h-10 rounded-lg bg-teal-600/10 dark:bg-teal-400/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          )}

          <h3 className="text-lg font-semibold text-navy-500 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, k) => (
              <span
                key={k}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-navy-500/10 text-navy-500 dark:bg-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-700/60">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {project.link.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
          {content.projects.sectionTitle}
        </h2>
        <div className="w-16 h-1 bg-teal-600 mb-10 fade-in" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.projects.items.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
