import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-jp',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'M. Ilham Sani Alamsyah - Portfolio',
  description:
    'IT Professional | IT Support • Network Administration • Web Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors">
        {children}
      </body>
    </html>
  );
}
