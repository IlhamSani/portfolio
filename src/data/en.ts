import { Content } from './types';

export const en: Content = {
  meta: {
    title: 'M. Ilham Sani Alamsyah - Portfolio',
    description: 'IT Professional | IT Support • Network Administration • Web Development',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    certifications: 'Certifications',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'M. Ilham Sani Alamsyah',
    tagline: 'IT Support • Network Administration • Web Development',
    summary:
      'IT professional with 3+ years of combined experience in technical support, network administration, and web development. Hands-on with hardware/software troubleshooting, MikroTik network setup and management, and building web applications using PHP/Laravel.',
    cta: 'Get in Touch',
    downloadCV: 'Download CV',
  },
  about: {
    sectionTitle: 'About Me',
    paragraphs: [
      'I\'m an IT professional based in Cianjur, West Java, Indonesia. With 3+ years of hands-on experience spanning technical support, network administration, and web development, I bring a versatile skill set to any IT team.',
      'I\'ve worked in both corporate and educational environments — from building IoT systems with Arduino at PT Multindo, to managing MikroTik networks and teaching programming at a vocational school. I hold certifications in Fortinet NSE3, MTCNA, and CyberWarfare.',
      'I\'m always looking to learn and grow. Currently exploring Japanese language and culture alongside deepening my network security and development skills.',
    ],
    photoAlt: 'M. Ilham Sani Alamsyah',
  },
  experience: {
    sectionTitle: 'Work Experience',
    jobs: [
      {
        title: 'Programmer & IT Support',
        company: 'PT Multindo Technology Utama',
        period: 'Dec 2025 – Present',
        bullets: [
          'Develop and test software solutions including web applications (PHP/Laravel) and IoT systems (Arduino/RS-485)',
          'Maintain IT infrastructure, administer company website and internal information systems',
          'Provide end-to-end technical support for hardware, software, and network issues across the organisation',
          'Monitor systems and proactively resolve issues to minimise downtime',
        ],
        tags: ['PHP', 'Laravel', 'Arduino', 'IoT', 'IT Support'],
      },
      {
        title: 'IT Staff',
        company: 'SMK PGRI 1 Pariwisata Cianjur',
        period: 'Mar 2024 – Dec 2025',
        bullets: [
          'Managed computer lab serving students, teachers, and staff while also upgrading network infrastructure using MikroTik',
          'Designed and developed the school\'s official website to strengthen its digital presence',
          'Provided comprehensive IT support for hardware, software, and network issues across the school',
          'Taught Informatics and Programming subjects to students',
        ],
        tags: ['MikroTik', 'Web Dev', 'Teaching', 'IT Support'],
      },
      {
        title: 'IT Support Technician (Intern)',
        company: 'PT Dirgantara Indonesia',
        period: 'Dec 2019 – Mar 2020',
        bullets: [
          'Assisted employees with hardware, software, and network-related issues at Indonesian Aerospace',
          'Performed structured network cabling installation for office infrastructure',
          'Maintained IT asset inventory and documentation across departments',
        ],
        tags: ['IT Support', 'Networking', 'Cabling'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    items: [
      {
        title: 'Multi-Tank IoT Monitoring System',
        description:
          'Arduino-based real-time monitoring system using RS-485 communication for industrial multi-tank level monitoring and data visualization.',
        tags: ['Arduino', 'IoT', 'RS-485', 'Real-time'],
      },
      {
        title: 'Donation Management Platform',
        description:
          'Full-stack web application built with Laravel for managing donations at an Islamic boarding school, featuring donor tracking, reporting, and receipt generation.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Full-Stack'],
      },
      {
        title: 'School Network Infrastructure',
        description:
          'Complete network redesign and implementation using MikroTik RouterOS with VLAN segmentation, bandwidth management, and monitoring via Telegram Bot.',
        tags: ['MikroTik', 'Networking', 'Telegram Bot'],
      },
      {
        title: 'School Official Website',
        description:
          'Designed and developed a responsive website for SMK PGRI 1 Pariwisata Cianjur to enhance the school\'s online visibility and provide information to prospective students.',
        tags: ['Web Dev', 'CMS', 'UI/UX'],
      },
    ],
  },
  skills: {
    sectionTitle: 'Technical Skills',
    categories: [
      {
        name: 'Support & Network',
        items: [
          'Hardware/Software Troubleshooting',
          'MikroTik RouterOS',
          'LAN/WAN',
          'Firewall',
          'TCP/IP',
          'Network Cabling',
          'Windows',
          'Linux',
        ],
      },
      {
        name: 'Development',
        items: ['PHP', 'Laravel', 'Python', 'HTML/CSS', 'Arduino', 'CMS', 'Git', 'Telegram Bot'],
      },
      {
        name: 'Security',
        items: ['Network Security', 'Penetration Testing', 'Blue Team', 'GNS3'],
      },
    ],
  },
  education: {
    sectionTitle: 'Education',
    degrees: [
      {
        degree: 'Bachelor of Engineering – Information Technology',
        institution: 'Universitas Suryakancana, Cianjur',
        period: 'Sep 2021 – Jul 2025',
        detail: 'GPA: 3.68 | Focus: Software development & network systems',
      },
      {
        degree: 'Vocational Diploma – Computer Networking & Telecom',
        institution: 'SMK Negeri 1 Cianjur',
        period: '2018 – 2021',
        detail: '',
      },
    ],
  },
  certifications: {
    sectionTitle: 'Certifications',
    filters: {
      all: 'All',
      it: 'Security & Network',
      training: 'Training & Internship',
      language: 'Languages',
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
        name: 'Certificate of Competence – Computer & Network Engineering (Level II)',
        issuer: 'BNSP Indonesia / LSP SMKN 1 Cianjur',
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
        name: 'National Graduate Internship Program – Programmer',
        issuer: 'Kemnaker RI & PT Heo Utama Industri',
        year: '2026',
        category: 'training',
        file: '/certificates/magang-nasional.pdf',
        thumbnail: '/certificates/thumbnails/magang-nasional.png',
      },
      {
        name: 'Industrial Internship (PKL) – IT Governance Dept.',
        issuer: 'PT Dirgantara Indonesia (Indonesian Aerospace)',
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
        name: 'Test of English Proficiency & Academic (TOEFL – Score 670)',
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
    sectionTitle: 'Languages',
    items: [
      { language: 'Bahasa Indonesia', level: 'Native' },
      { language: 'English', level: 'Professional – TOEFL' },
      { language: 'Japanese', level: 'Elementary – J-Test G' },
    ],
  },
  contact: {
    sectionTitle: 'Get in Touch',
    description: 'Interested in working together? Feel free to reach out!',
    email: 'ilham.sani111@gmail.com',
    phone: '+62 851-5632-3938',
    linkedin: 'https://www.linkedin.com/in/ilhamsani111/',
    linkedinLabel: 'linkedin.com/in/ilhamsani111',
    github: '',
    githubLabel: '',
  },
  footer: {
    copyright: '© 2026 M. Ilham Sani Alamsyah. All rights reserved.',
  },
};
