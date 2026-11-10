import { Content } from '@/data/types';

interface AboutProps {
  content: Content;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
          {content.about.sectionTitle}
        </h2>
        <div className="w-16 h-1 bg-teal-600 mb-10 fade-in" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Portrait Photo Card */}
          <div className="flex-shrink-0 fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500 to-navy-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-300" />
              <img
                src="/images/full-profile-wb.jpg"
                alt={content.about.photoAlt}
                className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl object-cover object-top border-4 border-white dark:border-slate-800 shadow-xl transition duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed fade-in text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
