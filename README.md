# M. Ilham Sani Alamsyah — Portfolio

Personal portfolio website built with **Next.js 14** + **Tailwind CSS** + **TypeScript**.

Supports **3 languages** (English, Indonesian, Japanese) and **dark mode**.

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile-placeholder.svg   ← REPLACE WITH YOUR PHOTO
│   └── cv/                           ← PUT YOUR PDF CVs HERE
│       ├── CV_Ilham_Sani.pdf
│       ├── CV_Ilham_Sani_ID.pdf
│       └── CV_Ilham_Sani_JP.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root layout (fonts, metadata)
│   │   ├── page.tsx          ← Main page (wires everything together)
│   │   └── globals.css       ← Global styles + animations
│   ├── components/           ← All UI sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/                 ← ⭐ ALL YOUR CONTENT IS HERE ⭐
│       ├── types.ts          ← TypeScript types (don't change unless adding fields)
│       ├── index.ts          ← Language switcher logic
│       ├── en.ts             ← 🇬🇧 English content
│       ├── id.ts             ← 🇮🇩 Indonesian content
│       └── ja.ts             ← 🇯🇵 Japanese content
├── tailwind.config.ts        ← Colors, fonts, etc.
├── package.json
└── README.md                 ← You're reading this!
```

---

## ✏️ How to Edit Content (VS Code)

### Change text content

All text lives in `src/data/`. Open the file for the language you want to edit:

| File | Language |
|------|----------|
| `src/data/en.ts` | 🇬🇧 English |
| `src/data/id.ts` | 🇮🇩 Indonesian |
| `src/data/ja.ts` | 🇯🇵 Japanese |

Each file exports an object with sections like `hero`, `about`, `experience`, `projects`, etc.
Just change the text strings! The dev server hot-reloads automatically.

**Example — change your summary:**
```typescript
// src/data/en.ts
hero: {
  summary: 'Your new summary text here...',
},
```

### Add a new job

In `src/data/en.ts` (and `id.ts` / `ja.ts`), find the `experience.jobs` array and add:
```typescript
{
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'Jan 2026 – Present',
  bullets: [
    'What you did...',
    'Another achievement...',
  ],
  tags: ['Skill1', 'Skill2'],
},
```

### Add a new project

Find `projects.items` and add:
```typescript
{
  title: 'Project Name',
  description: 'What the project does...',
  tags: ['Tech1', 'Tech2'],
},
```

### Add a new certification

Find `certifications.items` and add:
```typescript
{
  name: 'Certification Name',
  issuer: 'Issuing Organization',
  year: '2026',
},
```

---

## 📸 How to Add Your Photo

1. Put your photo in `public/images/` (e.g., `profile.jpg`)
2. Open `src/components/Hero.tsx`
3. Replace the placeholder `<div>` with:
```tsx
<img
  src="/images/profile.jpg"
  alt="M. Ilham Sani Alamsyah"
  className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-slate-200 dark:border-slate-700 shadow-lg"
/>
```
4. Do the same in `src/components/About.tsx` (the smaller photo)

**Recommended:** Square photo, at least 400x400px, JPG or WebP.

---

## 📄 How to Add CV Downloads

1. Put your PDF files in `public/cv/`
2. The "Download CV" button in Hero already links to `/cv/CV_Ilham_Sani.pdf`
3. To change the link, edit `src/components/Hero.tsx` — find the `href="/cv/..."` line

---

## 🌐 Deploy to Vercel + GitHub

### 1. Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `portfolio` repository
4. Click **Deploy** — that's it!
5. (Optional) Add a custom domain in Vercel project settings

Every time you push to GitHub, Vercel auto-deploys! 🎉

---

## 🎨 Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  navy: { ... },   // Primary color (headers, text)
  teal: { ... },    // Accent color (buttons, highlights)
},
```

## 🌙 Dark Mode

Dark mode auto-detects system preference. Users can toggle it with the sun/moon button in the navbar.
