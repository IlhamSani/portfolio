import { Content } from './types';

export const id: Content = {
  meta: {
    title: 'M. Ilham Sani Alamsyah - Portofolio',
    description: 'Praktisi IT | IT Support • Administrasi Jaringan • Web Development',
  },
  nav: {
    about: 'Tentang',
    experience: 'Pengalaman',
    projects: 'Proyek',
    skills: 'Keahlian',
    education: 'Pendidikan',
    certifications: 'Sertifikasi',
    contact: 'Kontak',
  },
  hero: {
    greeting: 'Halo, saya',
    name: 'M. Ilham Sani Alamsyah',
    tagline: 'IT Support • Administrasi Jaringan • Web Development',
    summary:
      'Praktisi IT dengan pengalaman 3+ tahun di bidang technical support, administrasi jaringan, dan web development. Terbiasa menangani troubleshooting hardware/software, setup dan pengelolaan jaringan berbasis MikroTik, serta pengembangan aplikasi web menggunakan PHP/Laravel.',
    cta: 'Hubungi Saya',
    downloadCV: 'Unduh CV',
  },
  about: {
    sectionTitle: 'Tentang Saya',
    paragraphs: [
      'Saya seorang praktisi IT yang berdomisili di Cianjur, Jawa Barat. Dengan pengalaman lebih dari 3 tahun di bidang technical support, administrasi jaringan, dan web development, saya terbiasa bekerja di berbagai lingkungan IT — baik di perusahaan maupun dunia pendidikan.',
      'Di PT Multindo, saya terlibat dalam pengembangan sistem IoT berbasis Arduino dan aplikasi web. Sebelumnya di SMK PGRI 1 Pariwisata Cianjur, saya bertanggung jawab mengelola jaringan MikroTik, membangun website sekolah, hingga mengajar Informatika dan Pemrograman. Saya juga memiliki sertifikasi Fortinet NSE3, MTCNA, dan CyberWarfare.',
      'Saya selalu antusias untuk terus belajar hal baru. Saat ini saya juga sedang mendalami bahasa Jepang di samping terus mengasah kemampuan di bidang network security dan pengembangan software.',
    ],
    photoAlt: 'M. Ilham Sani Alamsyah',
  },
  experience: {
    sectionTitle: 'Pengalaman Kerja',
    jobs: [
      {
        title: 'Programmer & IT Support',
        company: 'PT Multindo Technology Utama',
        period: 'Des 2025 – Sekarang',
        bullets: [
          'Mengembangkan dan menguji aplikasi web (PHP/Laravel) serta sistem IoT (Arduino/RS-485) sesuai kebutuhan bisnis',
          'Mengelola infrastruktur IT, website perusahaan, dan sistem informasi internal',
          'Menangani support teknis untuk permasalahan hardware, software, dan jaringan',
          'Monitoring sistem dan penanganan masalah secara proaktif untuk meminimalkan downtime',
        ],
        tags: ['PHP', 'Laravel', 'Arduino', 'IoT', 'IT Support'],
      },
      {
        title: 'Staff IT',
        company: 'SMK PGRI 1 Pariwisata Cianjur',
        period: 'Mar 2024 – Des 2025',
        bullets: [
          'Mengelola lab komputer untuk kebutuhan siswa, guru, dan staf serta upgrade infrastruktur jaringan menggunakan MikroTik',
          'Merancang dan membangun website resmi sekolah',
          'Menangani IT support untuk permasalahan hardware, software, dan jaringan di lingkungan sekolah',
          'Mengajar mata pelajaran Informatika dan Pemrograman',
        ],
        tags: ['MikroTik', 'Web Dev', 'Pengajaran', 'IT Support'],
      },
      {
        title: 'Teknisi IT Support (Magang)',
        company: 'PT Dirgantara Indonesia',
        period: 'Des 2019 – Mar 2020',
        bullets: [
          'Membantu karyawan menyelesaikan kendala hardware, software, dan jaringan di Indonesian Aerospace',
          'Melakukan instalasi kabel jaringan terstruktur untuk kebutuhan kantor',
          'Mendata dan mendokumentasikan aset IT di berbagai departemen',
        ],
        tags: ['IT Support', 'Networking', 'Cabling'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Proyek',
    items: [
      {
        title: 'Sistem Monitoring IoT Multi-Tank',
        description:
          'Sistem monitoring real-time berbasis Arduino yang menggunakan komunikasi RS-485 untuk memantau level tangki industri secara simultan dan menampilkan visualisasi data.',
        tags: ['Arduino', 'IoT', 'RS-485', 'Real-time'],
      },
      {
        title: 'Platform Manajemen Donasi',
        description:
          'Aplikasi web full-stack yang dibangun dengan Laravel untuk mengelola donasi di pondok pesantren, dilengkapi fitur pencatatan donatur, laporan, dan cetak kwitansi.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Full-Stack'],
      },
      {
        title: 'Infrastruktur Jaringan Sekolah',
        description:
          'Perancangan ulang dan implementasi jaringan sekolah secara menyeluruh menggunakan MikroTik RouterOS dengan segmentasi VLAN, manajemen bandwidth, dan monitoring via Telegram Bot.',
        tags: ['MikroTik', 'Networking', 'Telegram Bot'],
      },
      {
        title: 'Website Resmi Sekolah',
        description:
          'Merancang dan mengembangkan website responsif untuk SMK PGRI 1 Pariwisata Cianjur guna meningkatkan visibilitas sekolah secara online dan menyediakan informasi bagi calon siswa.',
        tags: ['Web Dev', 'CMS', 'UI/UX'],
      },
    ],
  },
  skills: {
    sectionTitle: 'Keahlian Teknis',
    categories: [
      {
        name: 'Support & Jaringan',
        items: [
          'Troubleshooting Hardware/Software',
          'MikroTik RouterOS',
          'LAN/WAN',
          'Firewall',
          'TCP/IP',
          'Instalasi Kabel Jaringan',
          'Windows',
          'Linux',
        ],
      },
      {
        name: 'Development',
        items: ['PHP', 'Laravel', 'Python', 'HTML/CSS', 'Arduino', 'CMS', 'Git', 'Telegram Bot'],
      },
      {
        name: 'Keamanan',
        items: ['Network Security', 'Penetration Testing', 'Blue Team', 'GNS3'],
      },
    ],
  },
  education: {
    sectionTitle: 'Pendidikan',
    degrees: [
      {
        degree: 'Sarjana Teknik – Teknologi Informasi',
        institution: 'Universitas Suryakancana, Cianjur',
        period: 'Sep 2021 – Jul 2025',
        detail: 'IPK: 3,68 | Fokus: Pengembangan software & sistem jaringan',
      },
      {
        degree: 'SMK – Teknik Komputer dan Jaringan',
        institution: 'SMK Negeri 1 Cianjur',
        period: '2018 – 2021',
        detail: '',
      },
    ],
  },
  certifications: {
    sectionTitle: 'Sertifikasi',
    filters: {
      all: 'Semua',
      it: 'Keamanan & Jaringan',
      training: 'Pelatihan & Magang',
      language: 'Bahasa',
    },
    items: [
      {
        name: 'Fortinet NSE 3 Certified in Cybersecurity',
        issuer: 'Fortinet Training Institute',
        year: '2026',
        category: 'it',
        file: '/certificates/fortinet-nse3.pdf',
        thumbnail: '/certificates/thumbnails/fortinet-nse3.png',
      },
      {
        name: 'FortiGate 7.6 Operator',
        issuer: 'Fortinet Training Institute',
        year: '2026',
        category: 'it',
        file: '/certificates/fortigate-operator.pdf',
        thumbnail: '/certificates/thumbnails/fortigate-operator.png',
      },
      {
        name: 'Certified Cyber Security Analyst (C3SA)',
        issuer: 'CyberWarFare Labs',
        year: '2026',
        category: 'it',
        file: '/certificates/c3sa.pdf',
        thumbnail: '/certificates/thumbnails/c3sa.png',
      },
      {
        name: 'Certified Blue Team Fundamentals (BTF)',
        issuer: 'CyberWarFare Labs',
        year: '2026',
        category: 'it',
        file: '/certificates/cyberwarfare-btf.pdf',
        thumbnail: '/certificates/thumbnails/cyberwarfare-btf.png',
      },
      {
        name: 'MikroTik Certified Network Associate (MTCNA)',
        issuer: 'MikroTik',
        year: '2020',
        category: 'it',
        file: '/certificates/mtcna.pdf',
        thumbnail: '/certificates/thumbnails/mtcna.png',
      },
      {
        name: 'Sertifikat Kompetensi – Teknik Komputer & Jaringan (Level II)',
        issuer: 'BNSP / LSP SMKN 1 Cianjur',
        year: '2021',
        category: 'it',
        file: '/certificates/bnsp.pdf',
        thumbnail: '/certificates/thumbnails/bnsp.png',
      },
      {
        name: 'Cyber Security Training (CompTIA Linux+, Security+, CySA+)',
        issuer: 'InfraDigital Foundation & Boer Technology',
        year: '2021',
        category: 'training',
        file: '/certificates/cyber-security-training.pdf',
        thumbnail: '/certificates/thumbnails/cyber-security-training.png',
      },
      {
        name: 'Cyberwarriors Bootcamp 2022',
        issuer: 'InfraDigital Foundation & SGI Asia',
        year: '2022',
        category: 'training',
        file: '/certificates/cyberwarrior.jpg',
        thumbnail: '/certificates/thumbnails/cyberwarrior.png',
      },
      {
        name: 'Cyberwarriors Bootcamp 2022 – Soft Skill Class',
        issuer: 'Lingkaran',
        year: '2022',
        category: 'training',
        file: '/certificates/lingkaran-cyberwarriors.pdf',
        thumbnail: '/certificates/thumbnails/lingkaran-cyberwarriors.png',
      },
      {
        name: 'AR Application Developer – Interactive Multimedia Project',
        issuer: 'Universitas Suryakancana',
        year: '2025',
        category: 'training',
        file: '/certificates/multimedia-ar.png',
        thumbnail: '/certificates/thumbnails/multimedia-ar.png',
      },
      {
        name: 'Program Pemagangan Lulusan Perguruan Tinggi – Programmer',
        issuer: 'Kemnaker RI & PT Heo Utama Industri',
        year: '2026',
        category: 'training',
        file: '/certificates/magang-nasional.pdf',
        thumbnail: '/certificates/thumbnails/magang-nasional.png',
      },
      {
        name: 'Praktik Kerja Lapangan (PKL) – Dept. IT Tata Kelola',
        issuer: 'PT Dirgantara Indonesia (Persero)',
        year: '2020',
        category: 'training',
        file: '/certificates/pkl.pdf',
        thumbnail: '/certificates/thumbnails/pkl.png',
      },
      {
        name: 'Akademi Edukreator Public Class – Edutainment #2',
        issuer: 'Kok Bisa / Akademi Edukreator',
        year: '2021',
        category: 'training',
        file: '/certificates/educreator.pdf',
        thumbnail: '/certificates/thumbnails/educreator.png',
      },
      {
        name: 'Test of English Proficiency & Academic (TOEFL – Skor 670)',
        issuer: 'Elskill English Course',
        year: '2025',
        category: 'language',
        file: '/certificates/toefl.pdf',
        thumbnail: '/certificates/thumbnails/toefl.png',
      },
      {
        name: 'J.TEST Practical Japanese Proficiency – Level G',
        issuer: 'Association for Testing Japanese Proficiency',
        year: '2026',
        category: 'language',
        file: '/certificates/jtest-cert.pdf',
        thumbnail: '/certificates/thumbnails/jtest-cert.png',
      },
    ],
  },
  languages: {
    sectionTitle: 'Bahasa',
    items: [
      { language: 'Bahasa Indonesia', level: 'Bahasa Ibu' },
      { language: 'Bahasa Inggris', level: 'Profesional – TOEFL' },
      { language: 'Bahasa Jepang', level: 'Dasar – J-Test G' },
    ],
  },
  contact: {
    sectionTitle: 'Hubungi Saya',
    description: 'Tertarik untuk bekerja sama? Silakan hubungi saya!',
    email: 'ilham.sani111@gmail.com',
    phone: '+62 851-5632-3938',
    linkedin: 'https://www.linkedin.com/in/ilhamsani111/',
    linkedinLabel: 'linkedin.com/in/ilhamsani111',
    github: '',
    githubLabel: '',
  },
  footer: {
    copyright: '© 2026 M. Ilham Sani Alamsyah. Hak cipta dilindungi.',
  },
};
