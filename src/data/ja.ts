import { Content } from './types';

export const ja: Content = {
  meta: {
    title: 'M. Ilham Sani Alamsyah - ポートフォリオ',
    description: 'ITプロフェッショナル | ITサポート・ネットワーク管理・Web開発',
  },
  nav: {
    about: '自己紹介',
    experience: '職務経歴',
    projects: 'プロジェクト',
    skills: 'スキル',
    education: '学歴',
    certifications: '資格',
    contact: 'お問い合わせ',
  },
  hero: {
    greeting: 'はじめまして、',
    name: 'M. Ilham Sani Alamsyah',
    tagline: 'ITサポート・ネットワーク管理・Web開発',
    summary:
      'ITサポート・ネットワーク管理・Web開発の分野で3年以上の実務経験あり。ハードウェア/ソフトウェアのトラブル対応、MikroTikを用いたネットワークの構築・運用、PHP/LaravelによるWebアプリ開発が得意分野。企業・教育機関の両方でヘルプデスク対応やインフラ保守、ソフトウェア開発に携わる。Fortinet NSE3、MTCNA、CyberWarfare資格を保有。',
    cta: 'お問い合わせ',
    downloadCV: '履歴書ダウンロード',
  },
  about: {
    sectionTitle: '自己紹介',
    paragraphs: [
      'インドネシア西ジャワ州チアンジュル出身のITエンジニアです。テクニカルサポート、ネットワーク管理、Web開発の領域で3年以上の実務経験を積み、幅広い現場に対応できるスキルを身につけてきました。',
      'PT Multindoではアプリ開発やIoTシステムの構築に携わり、SMK PGRI 1 Pariwisata CianjurではMikroTikによるネットワーク整備や情報技術の授業を担当しました。企業と教育の両方の現場で得た経験が、自分の強みだと考えています。Fortinet NSE3、MTCNA、CyberWarfareの資格を保有しています。',
      '新しい技術を学ぶことが好きで、現在はネットワークセキュリティのスキルを深めつつ、日本語の学習にも取り組んでいます。',
    ],
    photoAlt: 'M. Ilham Sani Alamsyah',
  },
  experience: {
    sectionTitle: '職務経歴',
    jobs: [
      {
        title: 'プログラマー・ITサポート',
        company: 'PT Multindo Technology Utama',
        period: '2025年12月 – 現在',
        bullets: [
          'Webアプリ（PHP/Laravel）やIoTシステム（Arduino/RS-485）の開発・テストを担当',
          '社内ITインフラ、Webサイト、情報システムの管理・運用',
          '社員向けのHW・SW・ネットワーク関連トラブルへの対応',
          'システム監視と障害の早期対応によるダウンタイム削減',
        ],
        tags: ['PHP', 'Laravel', 'Arduino', 'IoT', 'ITサポート'],
      },
      {
        title: 'ITスタッフ',
        company: 'SMK PGRI 1 Pariwisata Cianjur',
        period: '2024年3月 – 2025年12月',
        bullets: [
          '生徒・教員・職員向けPC教室の管理、MikroTikによるネットワーク環境の整備',
          '学校公式Webサイトの企画・構築',
          '校内のHW・SW・ネットワークに関する全般的なITサポート',
          '情報技術・プログラミングの授業を担当',
        ],
        tags: ['MikroTik', 'Web開発', '教育', 'ITサポート'],
      },
      {
        title: 'ITサポート技術者（インターン）',
        company: 'PT Dirgantara Indonesia',
        period: '2019年12月 – 2020年3月',
        bullets: [
          'Indonesian Aerospaceにて社員のHW・SW・ネットワーク関連の問題対応',
          'オフィス向けの構造化ケーブリング工事の実施',
          '各部門のIT資産の棚卸し・台帳管理',
        ],
        tags: ['ITサポート', 'ネットワーク', 'ケーブリング'],
      },
    ],
  },
  projects: {
    sectionTitle: 'プロジェクト',
    items: [
      {
        title: 'マルチタンクIoT監視システム',
        description:
          'RS-485通信を活用したArduinoベースのリアルタイム監視システム。複数の工業用タンクの液面レベルを同時に計測し、データを可視化。',
        tags: ['Arduino', 'IoT', 'RS-485', 'リアルタイム'],
      },
      {
        title: '寄付管理プラットフォーム',
        description:
          'Laravelで構築したフルスタックWebアプリ。イスラム寄宿学校の寄付管理を目的とし、寄付者追跡・レポート出力・領収書発行機能を実装。',
        tags: ['Laravel', 'PHP', 'MySQL', 'フルスタック'],
      },
      {
        title: '学校ネットワークインフラ構築',
        description:
          'MikroTik RouterOSを用いた校内ネットワークの全面的な再設計・導入。VLAN分離、帯域管理、Telegram Botによる監視を実現。',
        tags: ['MikroTik', 'ネットワーク', 'Telegram Bot'],
      },
      {
        title: '学校公式Webサイト',
        description:
          'SMK PGRI 1 Pariwisata Cianjurのレスポンシブ公式サイトを設計・開発。学校のオンラインプレゼンス向上と受験生向け情報発信を目的とする。',
        tags: ['Web開発', 'CMS', 'UI/UX'],
      },
    ],
  },
  skills: {
    sectionTitle: 'スキル',
    categories: [
      {
        name: 'サポート・ネットワーク',
        items: [
          'HW/SWトラブルシューティング',
          'MikroTik RouterOS',
          'LAN/WAN',
          'ファイアウォール',
          'TCP/IP',
          'ネットワークケーブリング',
          'Windows',
          'Linux',
        ],
      },
      {
        name: '開発',
        items: ['PHP', 'Laravel', 'Python', 'HTML/CSS', 'Arduino', 'CMS', 'Git', 'Telegram Bot'],
      },
      {
        name: 'セキュリティ',
        items: ['ネットワークセキュリティ', 'ペネトレーションテスト', 'ブルーチーム', 'GNS3'],
      },
    ],
  },
  education: {
    sectionTitle: '学歴',
    degrees: [
      {
        degree: '工学士 – 情報技術',
        institution: 'Universitas Suryakancana, Cianjur',
        period: '2021年9月 – 2025年7月',
        detail: 'GPA: 3.68 | 専攻: ソフトウェア開発・ネットワークシステム',
      },
      {
        degree: '職業高校卒 – コンピュータネットワーク・通信',
        institution: 'SMK Negeri 1 Cianjur',
        period: '2018年 – 2021年',
        detail: '',
      },
    ],
  },
  certifications: {
    sectionTitle: '資格・認定',
    filters: {
      all: 'すべて',
      it: 'セキュリティ・NW',
      training: '研修・インターン',
      language: '語学',
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
        name: '国家資格能力認定 – コンピュータネットワーク工学（レベルII）',
        issuer: 'BNSP Indonesia / LSP SMKN 1 Cianjur',
        year: '2021',
        category: 'it',
        file: '/certificates/bnsp.pdf',
        thumbnail: '/certificates/thumbnails/bnsp.png',
      },
      {
        name: 'サイバーセキュリティ研修（CompTIA Linux+, Security+, CySA+）',
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
        name: 'Cyberwarriors Bootcamp 2022 – ソフトスキル課程',
        issuer: 'Lingkaran',
        year: '2022',
        category: 'training',
        file: '/certificates/lingkaran-cyberwarriors.pdf',
        thumbnail: '/certificates/thumbnails/lingkaran-cyberwarriors.png',
      },
      {
        name: 'ARアプリ開発 – インタラクティブマルチメディアプロジェクト',
        issuer: 'Universitas Suryakancana',
        year: '2025',
        category: 'training',
        file: '/certificates/multimedia-ar.png',
        thumbnail: '/certificates/thumbnails/multimedia-ar.png',
      },
      {
        name: '国家大卒インターンシッププログラム（プログラマー）',
        issuer: 'Kemnaker RI & PT Heo Utama Industri',
        year: '2026',
        category: 'training',
        file: '/certificates/magang-nasional.pdf',
        thumbnail: '/certificates/thumbnails/magang-nasional.png',
      },
      {
        name: '実務実習修了証（PKL – ITガバナンス部門）',
        issuer: 'PT Dirgantara Indonesia (Indonesian Aerospace)',
        year: '2020',
        category: 'training',
        file: '/certificates/pkl.pdf',
        thumbnail: '/certificates/thumbnails/pkl.png',
      },
      {
        name: 'Akademi Edukreator パブリッククラス（Edutainment #2）',
        issuer: 'Kok Bisa / Akademi Edukreator',
        year: '2021',
        category: 'training',
        file: '/certificates/educreator.pdf',
        thumbnail: '/certificates/thumbnails/educreator.png',
      },
      {
        name: '英語能力試験 TOEFL（スコア 670）',
        issuer: 'Elskill English Course',
        year: '2025',
        category: 'language',
        file: '/certificates/toefl.pdf',
        thumbnail: '/certificates/thumbnails/toefl.png',
      },
      {
        name: 'J.TEST実用日本語検定 Gレベル',
        issuer: '日本語検定協会',
        year: '2026',
        category: 'language',
        file: '/certificates/jtest-cert.pdf',
        thumbnail: '/certificates/thumbnails/jtest-cert.png',
      },
    ],
  },
  languages: {
    sectionTitle: '言語',
    items: [
      { language: 'インドネシア語', level: '母語' },
      { language: '英語', level: 'ビジネスレベル – TOEFL' },
      { language: '日本語', level: '初級 – J.TEST Gレベル' },
    ],
  },
  contact: {
    sectionTitle: 'お問い合わせ',
    description: 'お気軽にご連絡ください。',
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
