import { Content } from '@/data/types';

interface ExperienceProps {
  content: Content;
}

export default function Experience({ content }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
          {content.experience.sectionTitle}
        </h2>
        <div className="w-16 h-1 bg-teal-600 mb-10 fade-in" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {content.experience.jobs.map((job, i) => (
              <div key={i} className="relative pl-12 md:pl-20 fade-in">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-teal-600 border-2 border-white dark:border-slate-800 z-10" />

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-500 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-teal-600 dark:text-teal-400 font-medium mt-1 sm:mt-0 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-600/60 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, k) => (
                      <span
                        key={k}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
