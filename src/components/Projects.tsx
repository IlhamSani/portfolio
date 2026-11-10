import { Content } from '@/data/types';

interface ProjectsProps {
  content: Content;
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
            <div
              key={i}
              className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in"
            >
              {/* Project icon */}
              <div className="w-10 h-10 rounded-lg bg-teal-600/10 dark:bg-teal-400/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-navy-500 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
