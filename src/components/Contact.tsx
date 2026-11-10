import { Content } from '@/data/types';

interface ContactProps {
  content: Content;
}

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-navy-500 dark:text-white mb-2 fade-in">
          {content.contact.sectionTitle}
        </h2>
        <div className="w-16 h-1 bg-teal-600 mx-auto mb-6 fade-in" />
        <p className="text-slate-600 dark:text-slate-300 mb-10 fade-in">
          {content.contact.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 fade-in">
          {/* Email */}
          <a
            href={`mailto:${content.contact.email}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600/10 dark:bg-teal-400/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 dark:text-slate-500">Email</p>
              <p className="text-sm font-medium text-navy-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {content.contact.email}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${content.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600/10 dark:bg-teal-400/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 dark:text-slate-500">Phone</p>
              <p className="text-sm font-medium text-navy-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {content.contact.phone}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600/10 dark:bg-teal-400/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 dark:text-slate-500">LinkedIn</p>
              <p className="text-sm font-medium text-navy-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {content.contact.linkedinLabel}
              </p>
            </div>
          </a>
        </div>

        {/* Big CTA */}
        <div className="fade-in">
          <a
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors text-lg"
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {content.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
