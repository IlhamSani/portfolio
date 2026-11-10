# M. Ilham Sani Alamsyah — Portfolio

Personal portfolio website built with **Next.js 14** + **Tailwind CSS** + **TypeScript**.

- Live Site: https://ilham-portfolio-delta.vercel.app
- GitHub Repo: https://github.com/IlhamSani/portfolio
- Supports **3 languages** (`EN`, `ID`, `JP`), **dark mode**, interactive profile photo switcher, project photo galleries, and certificate previews.

## 🚀 Quick Start (Local Preview)

```powershell
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── certificates/                 ← Certificate PDFs / images + thumbnails/
│   │   ├── fortinet-nse3.pdf
│   │   └── thumbnails/
│   │       └── fortinet-nse3.png
│   ├── cv/                           ← Language-specific PDF CVs
│   │   ├── CV_Ilham_Sani_EN.pdf
│   │   ├── CV_Ilham_Sani_ID.pdf
│   │   └── CV_Ilham_Sani_JP.pdf
│   └── images/                       ← Profile photos (+ create projects/ here for project photos)
│       ├── profile-wb.jpg
│       ├── profile-red.jpg
│       ├── profile-yellow.jpg
│       └── full-profile-wb.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx                ← Root layout (fonts, metadata)
│   │   ├── page.tsx                  ← Main page
│   │   └── globals.css               ← Global styles + fade-in animation
│   ├── components/                   ← UI sections
│   └── data/                         ← ⭐ ALL YOUR CONTENT IS HERE ⭐
│       ├── types.ts                  ← TypeScript types
│       ├── index.ts                  ← Language switcher helper
│       ├── en.ts                     ← 🇬🇧 English content
│       ├── id.ts                     ← 🇮🇩 Indonesian content
│       └── ja.ts                     ← 🇯🇵 Japanese content
├── tailwind.config.ts                ← Colors & theme
└── package.json
```

---

## ✏️ How to Update Content in VS Code

Remember: because the site supports **3 languages**, update the same section in all 3 files:
- `src/data/en.ts` (English)
- `src/data/id.ts` (Indonesian)
- `src/data/ja.ts` (Japanese)

---

### 1. Edit the About Section

Open `src/data/en.ts`, `id.ts`, and `ja.ts`, find the `about:` block, and edit `paragraphs` (each string is one paragraph):

```typescript
about: {
  sectionTitle: 'About Me',
  paragraphs: [
    'First paragraph...',
    'Second paragraph...',
    'Third paragraph...',
  ],
  photoAlt: 'M. Ilham Sani Alamsyah',
},
```

To replace the **About photo**, overwrite `public/images/full-profile-wb.jpg` (or update the filename in `src/components/About.tsx`).

---

### 2. Add a New Certification

1. Drop your certificate file (`.pdf`, `.jpg`, or `.png`) into `public/certificates/`, e.g. `public/certificates/ccna.pdf`.
2. *(Optional)* Put a preview image (`.png` / `.jpg`) in `public/certificates/thumbnails/`, e.g. `public/certificates/thumbnails/ccna.png`.
   - **Tip:** If your certificate is already a `.jpg` or `.png`, just use the same path for both `file` and `thumbnail`!
   - If you omit `thumbnail`, it automatically shows a clean badge header instead.
3. Add an entry inside `certifications.items` in `src/data/en.ts`, `id.ts`, and `ja.ts`:

```typescript
{
  name: 'Cisco Certified Network Associate (CCNA)',
  issuer: 'Cisco',
  year: '2026',
  category: 'it', // 'it' | 'training' | 'language'
  file: '/certificates/ccna.pdf',
  thumbnail: '/certificates/thumbnails/ccna.png', // optional
},
```

---

### 3. Add a New Project (With 1 or Multiple Photos)

1. Create a folder `public/images/projects/` and put your screenshots or photos inside it (e.g. `tank-1.jpg`, `tank-2.jpg`).
2. Open `src/data/en.ts`, `id.ts`, and `ja.ts`, find `projects.items`, and add:

**With 1 cover photo:**
```typescript
{
  title: 'New Project Name',
  description: 'Short explanation of what you built and the impact.',
  tags: ['Laravel', 'MySQL'],
  image: '/images/projects/cover.jpg', // optional
  link: 'https://github.com/IlhamSani/project-repo', // optional
},
```

**With multiple photos (carousel with next/prev arrows):**
```typescript
{
  title: 'Multi-Tank IoT Monitoring System',
  description: 'Arduino-based real-time monitoring system using RS-485...',
  tags: ['Arduino', 'IoT', 'RS-485'],
  images: [
    '/images/projects/tank-hardware.jpg',
    '/images/projects/tank-dashboard.png',
    '/images/projects/tank-wiring.jpg',
  ],
},
```

*(Note: paths starting with `/images/...` or `/certificates/...` automatically map to the `public/` folder — never include `public` in the string!)*

---

## 🌐 Publish Your Changes to GitHub & Vercel

After testing locally with `npm run dev` (or `npm run build` to check for errors):

```powershell
git add .
git commit -m "Add new project and certificate"
git push
vercel --prod
```

*(If you connect `IlhamSani/portfolio` under **Vercel Dashboard → Settings → Git**, future `git push` commands will trigger Vercel builds automatically without running `vercel --prod`.)*
