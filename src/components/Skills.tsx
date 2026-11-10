import { Content } from '@/data/types';

interface SkillsProps {
  content: Content;
}

const categoryColors = [
  { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', tag: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
  { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800', tag: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
  { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800', tag: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
];

export default function Skills({ content }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
          {content.skills.sectionTitle}
        </h2>
        <div className="w-16 h-1 bg-teal-600 mb-10 fade-in" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.skills.categories.map((cat, i) => {
            const colors = categoryColors[i % categoryColors.length];
            return (
              <div
                key={i}
                className={`rounded-xl p-6 border ${colors.bg} ${colors.border} fade-in`}
              >
                <h3 className="text-lg font-semibold text-navy-500 dark:text-white mb-4">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${colors.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
