import { Content } from '@/data/types';

interface EducationProps {
  content: Content;
}

export default function Education({ content }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
          {content.education.sectionTitle}
        </h2>
        <div className="w-16 h-1 bg-teal-600 mb-10 fade-in" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.education.degrees.map((deg, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 fade-in"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-500/10 dark:bg-teal-400/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy-500 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy-500 dark:text-white">
                    {deg.degree}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic mt-0.5">
                    {deg.institution}
                  </p>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mt-1">
                    {deg.period}
                  </p>
                  {deg.detail && (
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                      {deg.detail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12 fade-in">
          <h3 className="text-xl font-semibold text-navy-500 dark:text-white mb-4">
            {content.languages.sectionTitle}
          </h3>
          <div className="flex flex-wrap gap-4">
            {content.languages.items.map((lang, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg px-5 py-3 border border-slate-100 dark:border-slate-700"
              >
                <p className="font-medium text-navy-500 dark:text-white text-sm">
                  {lang.language}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
