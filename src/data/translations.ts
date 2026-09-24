export type Language = 'ru' | 'en' | 'ky' | 'tr' | 'de';

export interface TranslationContent {
  nav: {
    about: string;
    services: string;
    certificate: string;
    workflow: string;
    portfolio: string;
    calculator: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    role: string;
    slogan: string;
    description: string;
    btnServices: string;
    btnContact: string;
    stats: {
      hours: string;
      hoursLabel: string;
      languages: string;
      languagesLabel: string;
      turnaround: string;
      turnaroundLabel: string;
      solutions: string;
      solutionsLabel: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    languagesTitle: string;
    languagesSubtitle: string;
    langList: {
      code: string;
      name: string;
      nativeName: string;
      flag: string;
      level: string;
      desc: string;
    }[];
    advantages: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    requestBtn: string;
    items: {
      id: string;
      title: string;
      description: string;
      timeline: string;
      tags: string[];
    }[];
  };
  certificate: {
    title: string;
    subtitle: string;
    badge: string;
    issuedTo: string;
    courseName: string;
    organization: string;
    certNumber: string;
    certNumberLabel: string;
    date: string;
    duration: string;
    level: string;
    instructor: string;
    caption: string;
    btnZoom: string;
    btnCopy: string;
    copied: string;
    verifiedStatus: string;
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      subtitle: string;
      description: string;
      deliverable: string;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterCrm: string;
    filterLogistics: string;
    filterRetail: string;
    filterEdu: string;
    viewDetails: string;
    liveDemo: string;
    statusReady: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    selectLabel: string;
    speedLabel: string;
    standardSpeed: string;
    expressSpeed: string;
    estimatedTime: string;
    days: string;
    estimatedCost: string;
    orderBtn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    directTitle: string;
    directSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    serviceLabel: string;
    serviceDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    orQuickChat: string;
  };
  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  ru: {
    nav: {
      about: 'Обо мне',
      services: 'Услуги',
      certificate: 'Сертификат',
      workflow: 'Как я работаю',
      portfolio: 'Портфолио',
      calculator: 'Калькулятор',
      contact: 'Контакты',
      cta: 'Обсудить проект',
    },
    hero: {
      badge: 'AI-Powered Business Solutions',
      greeting: 'Привет, я',
      name: 'Гүлазат Саттарова',
      role: 'Разработчик бизнес-систем & AI-решений',
      slogan: '«Создаю цифровые системы, которые упрощают бизнес»',
      description: 'Проектирую и разрабатываю под ключ современные веб-системы: CRM, ERP, кассы, TMS, LMS и интеллектуальных чат-ботов с применением Vibe Coding и передовых AI-технологий.',
      btnServices: 'Мои услуги',
      btnContact: 'Связаться со мной',
      stats: {
        hours: '144ч',
        hoursLabel: 'Интенсивного Vibe Coding',
        languages: '5',
        languagesLabel: 'Языков общения с клиентами',
        turnaround: 'от 3 дней',
        turnaroundLabel: 'Скорость первого прототипа',
        solutions: '100%',
        solutionsLabel: 'Индивидуально под ваш бизнес',
      },
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Скорость современных AI-инструментов и надежная архитектура для реального бизнеса',
      p1: 'Создаю под ключ веб-системы для бизнеса с помощью современных AI-инструментов и методологии Vibe Coding. Это позволяет сократить срок разработки в 3–5 раз по сравнению с классическими студиями без потери качества.',
      p2: 'Работаю быстро и прозрачно: от первой идеи и анализа бизнес-процессов до развертывания готового решения в облаке с обучением вашей команды.',
      p3: 'Свободно общаюсь с клиентами на 5 языках, что позволяет без барьеров реализовывать проекты для предпринимателей из Центральной Азии, стран СНГ, Турции, Европы и США.',
      languagesTitle: 'Языки общения',
      languagesSubtitle: 'Легко веду переговоры, документацию и техподдержку на любом из этих языков:',
      langList: [
        {
          code: 'ky',
          name: 'Кыргызский',
          nativeName: 'Кыргыз тили',
          flag: '🇰🇬',
          level: 'Эне тили / Native',
          desc: 'Эркин баарлашуу, жергиликтүү бизнести санариптештирүү',
        },
        {
          code: 'ru',
          name: 'Русский',
          nativeName: 'Русский язык',
          flag: '🇷🇺',
          level: 'Свободно / Native',
          desc: 'Бизнес-коммуникация, ТЗ, договоры и ведение проектов',
        },
        {
          code: 'en',
          name: 'Английский',
          nativeName: 'English',
          flag: '🇬🇧',
          level: 'Fluent / Business',
          desc: 'Международные проекты, техническая документация и код',
        },
        {
          code: 'de',
          name: 'Немецкий',
          nativeName: 'Deutsch',
          flag: '🇩🇪',
          level: 'B2 / Konversation',
          desc: 'Geschäftskommunikation und Kooperation im DACH-Raum',
        },
        {
          code: 'tr',
          name: 'Турецкий',
          nativeName: 'Türkçe',
          flag: '🇹🇷',
          level: 'İleri Seviye / Fluent',
          desc: 'Türkiye ve Orta Asya şirketleri için dijital sistemler',
        },
      ],
      advantages: [
        {
          title: 'Vibe Coding & AI',
          desc: 'Использование нейросетей позволяет создавать сложные интерфейсы и логику за дни, а не месяцы.',
        },
        {
          title: 'Системы под ключ',
          desc: 'От базы данных и серверной логики до интуитивного интерфейса и Telegram-оповещений.',
        },
        {
          title: 'Гибкость и адаптация',
          desc: 'Никаких шаблонных коробок, в которые трудно встроить ваши специфические правила учета.',
        },
        {
          title: 'Поддержка и обучение',
          desc: 'Подробные видеоинструкции, запуск на вашем домене и оперативная техническая помощь.',
        },
      ],
    },
    services: {
      title: 'Услуги и решения',
      subtitle: 'Комплексные цифровые инструменты для автоматизации операций и роста продаж',
      requestBtn: 'Заказать решение',
      items: [
        {
          id: 'website',
          title: 'Сайт компании',
          description: 'Современный адаптивный сайт для презентации бизнеса, услуг и привлечения целевых клиентов.',
          timeline: '3–5 дней',
          tags: ['Адаптивность', 'SEO', 'Высокая конверсия'],
        },
        {
          id: 'crm',
          title: 'CRM-система',
          description: 'Учёт клиентов, сделок и продаж, воронки лидов и интеграция со всеми каналами связи.',
          timeline: '5–10 дней',
          tags: ['Воронка продаж', 'Аналитика', 'История клиентов'],
        },
        {
          id: 'accounting',
          title: 'Бухгалтерия & Финансы',
          description: 'Учёт доходов, расходов, кассовые разрывы, P&L отчёты и контроль задолженностей.',
          timeline: '7–12 дней',
          tags: ['P&L отчеты', 'ДДС', 'Мультивалюта'],
        },
        {
          id: 'tms',
          title: 'TMS (Управление транспортом)',
          description: 'Управление рейсами, грузами, машинами и водителями, расчёт расходов на километр пути.',
          timeline: '7–14 дней',
          tags: ['Диспетчеризация', 'Маршруты', 'Контроль расходов'],
        },
        {
          id: 'pos',
          title: 'Веб-касса / POS',
          description: 'Продажи, чеки, быстрый учёт в реальном времени, поддержка штрихкодов и скидок.',
          timeline: '5–9 дней',
          tags: ['Быстрые продажи', 'Печать чеков', 'Смены кассиров'],
        },
        {
          id: 'warehouse',
          title: 'Склад & Инвентаризация',
          description: 'Остатки товаров, приход, перемещения, списания и автоматические сигналы о нехватке.',
          timeline: '6–10 дней',
          tags: ['Учёт остатков', 'Партии', 'Штрихкодирование'],
        },
        {
          id: 'booking',
          title: 'Система онлайн-записи',
          description: 'Бронирование времени и специалистов для салонов красоты, клиник, сервисов и студий.',
          timeline: '4–7 дней',
          tags: ['Календарь записей', 'SMS/TG напоминания', 'Предоплата'],
        },
        {
          id: 'lms',
          title: 'Портал школы / LMS',
          description: 'Учебные курсы, личные кабинеты учеников, расписание занятий, домашние задания и оценки.',
          timeline: '7–14 дней',
          tags: ['Личные кабинеты', 'Видеоуроки', 'Успеваемость'],
        },
        {
          id: 'ai-bot',
          title: 'AI-чат-бот ассистент',
          description: 'Умный бот для Telegram, WhatsApp и сайта с автоматическими ответами клиентам 24/7.',
          timeline: '3–6 дней',
          tags: ['LLM / Gemini', 'Telegram & WhatsApp', 'Круглосуточно'],
        },
      ],
    },
    certificate: {
      title: 'Квалификация и сертификат',
      subtitle: 'Подтвержденные навыки скоростной AI-разработки и создания комплексных веб-систем',
      badge: 'Официальный сертификат',
      issuedTo: 'SATTAROVA GULAZAT',
      courseName: 'VIBE CODING COURSE',
      organization: 'GetForce Bootcamp',
      certNumber: 'GF-VC-2026-000123',
      certNumberLabel: 'Номер сертификата',
      date: 'Август 2026',
      duration: '144 часа',
      level: 'Intermediate',
      instructor: 'Seyitbek Usmanov',
      caption: '«Сертификат о прохождении курса Vibe Coding — GetForce Bootcamp, август 2026, 144 часа, уровень Intermediate. № GF-VC-2026-000123». По клику — открывать изображение в полном размере.',
      btnZoom: 'Открыть в полном размере',
      btnCopy: 'Скопировать номер',
      copied: 'Номер скопирован!',
      verifiedStatus: 'Сертификат подтвержден и верифицирован',
    },
    workflow: {
      title: 'Как я работаю',
      subtitle: 'Понятный, прозрачный и предсказуемый процесс разработки из 4 шагов',
      steps: [
        {
          number: '01',
          title: 'Заявка и аудит',
          subtitle: 'Первое знакомство',
          description: 'Вы описываете задачу или отправляете текущие таблицы/процессы. Я анализирую бизнес-модель, выделяю узкие места и формулирую оптимальную структуру системы.',
          deliverable: 'Результат: Экспресс-аудит и план внедрения',
        },
        {
          number: '02',
          title: 'Обсуждение задач',
          subtitle: 'Архитектура и ТЗ',
          description: 'Согласовываем необходимый функционал, роли пользователей (директор, менеджер, кассир, клиент), схему базы данных, дизайн и точные сроки сметы.',
          deliverable: 'Результат: Зафиксированное ТЗ и интерактивный прототип',
        },
        {
          number: '03',
          title: 'Разработка (Vibe Coding)',
          subtitle: 'Быстрая сборка',
          description: 'Создаю веб-приложение с помощью современных AI-инструментов. Качественный фронтенд, защищенная база данных, интеграции с мессенджерами и кассами.',
          deliverable: 'Результат: Полностью готовая рабочая система',
        },
        {
          number: '04',
          title: 'Запуск и поддержка',
          subtitle: 'Продакшен и обучение',
          description: 'Разворачиваю проект на надежном сервере, настраиваю резервное копирование, обучаю сотрудников работе в системе и остаюсь на связи для гарантийного сервиса.',
          deliverable: 'Результат: Система работает и приносит прибыль вашему бизнесу',
        },
      ],
    },
    portfolio: {
      title: 'Портфолио проектов',
      subtitle: 'Примеры архитектурных концептов и бизнес-систем, готовых к внедрению',
      filterAll: 'Все проекты',
      filterCrm: 'CRM & Продажи',
      filterLogistics: 'TMS & Логистика',
      filterRetail: 'POS & Касса',
      filterEdu: 'LMS & Школы',
      viewDetails: 'Подробнее о проекте',
      liveDemo: 'Демо интерфейса',
      statusReady: 'Готово к внедрению',
    },
    calculator: {
      title: 'Экспресс-калькулятор системы',
      subtitle: 'Выберите нужные модули и оцените примерные сроки и бюджет реализации',
      selectLabel: 'Выберите модули для вашего бизнеса:',
      speedLabel: 'Темп реализации:',
      standardSpeed: 'Стандартный темп',
      expressSpeed: 'Экспресс-запуск (+25% к приоритету)',
      estimatedTime: 'Ориентировочные сроки:',
      days: 'дней',
      estimatedCost: 'Ориентировочный бюджет:',
      orderBtn: 'Заказать расчет для этого набора',
    },
    contact: {
      title: 'Контакты для связи',
      subtitle: 'Готовы упростить бизнес-процессы? Напишите мне, и мы обсудим ваш проект сегодня!',
      directTitle: 'Прямые каналы связи',
      directSubtitle: 'Быстрее всего отвечаю в мессенджерах (в течение 30 минут):',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Например, Айдар или Елена',
      contactLabel: 'Телефон или Email',
      contactPlaceholder: '+996 ... или email@company.com',
      serviceLabel: 'Интересующее решение',
      serviceDefault: 'Выберите подходящую систему...',
      messageLabel: 'Опишите задачу или текущие трудности',
      messagePlaceholder: 'Расскажите, чем занимается ваша компания и что хочется автоматизировать в первую очередь...',
      submitBtn: 'Отправить заявку',
      submitting: 'Отправка данных...',
      successTitle: 'Спасибо за заявку!',
      successMessage: 'Я получила ваше сообщение и свяжусь с вами в ближайшее время.',
      sendAnother: 'Отправить еще одно сообщение',
      orQuickChat: 'Или напишите напрямую в удобный мессенджер:',
    },
    footer: {
      tagline: 'Гүлазат Саттарова — Разработка цифровых систем, которые упрощают бизнес.',
      rights: 'Все права защищены.',
      builtWith: 'Спроектировано с использованием Vibe Coding & AI',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      certificate: 'Certificate',
      workflow: 'Workflow',
      portfolio: 'Portfolio',
      calculator: 'Calculator',
      contact: 'Contact',
      cta: 'Discuss Project',
    },
    hero: {
      badge: 'AI-Powered Business Solutions',
      greeting: 'Hello, I am',
      name: 'Gulazat Sattarova',
      role: 'Business Systems & AI Solutions Developer',
      slogan: '"I build digital systems that simplify business"',
      description: 'End-to-end engineering of modern business web systems: CRM, ERP, POS cash registers, TMS logistics, LMS academies, and custom 24/7 AI agents powered by Vibe Coding methodology.',
      btnServices: 'My Services',
      btnContact: 'Get in Touch',
      stats: {
        hours: '144h',
        hoursLabel: 'Intensive Vibe Coding',
        languages: '5',
        languagesLabel: 'Languages for Client Communication',
        turnaround: 'From 3 days',
        turnaroundLabel: 'Working Prototype Speed',
        solutions: '100%',
        solutionsLabel: 'Tailored for Your Business',
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'The rapid velocity of cutting-edge AI tooling combined with reliable corporate architecture',
      p1: 'I develop custom end-to-end business web applications using modern generative AI tools and the Vibe Coding methodology. This reduces time-to-market by 3–5x compared to conventional agencies without sacrificing quality.',
      p2: 'I work with speed, precision, and transparency: from business process mapping to deployment on your private infrastructure and employee onboarding.',
      p3: 'I speak and collaborate with clients in 5 languages, enabling seamless project execution for founders in Central Asia, CIS, Turkey, Europe, and the Americas.',
      languagesTitle: 'Client Languages',
      languagesSubtitle: 'Fluent communication, project specifications, and ongoing support in:',
      langList: [
        {
          code: 'ky',
          name: 'Kyrgyz',
          nativeName: 'Кыргыз тили',
          flag: '🇰🇬',
          level: 'Native',
          desc: 'Direct communication for local entrepreneurs and regional enterprises',
        },
        {
          code: 'ru',
          name: 'Russian',
          nativeName: 'Русский язык',
          flag: '🇷🇺',
          level: 'Native / Fluent',
          desc: 'Full business negotiations, requirements, and project management',
        },
        {
          code: 'en',
          name: 'English',
          nativeName: 'English',
          flag: '🇬🇧',
          level: 'Fluent / Business',
          desc: 'Global clients, international integrations, and architecture',
        },
        {
          code: 'de',
          name: 'German',
          nativeName: 'Deutsch',
          flag: '🇩🇪',
          level: 'B2 / Professional',
          desc: 'Business communication and development for the DACH region',
        },
        {
          code: 'tr',
          name: 'Turkish',
          nativeName: 'Türkçe',
          flag: '🇹🇷',
          level: 'Advanced / Fluent',
          desc: 'Digital systems for Turkish and Central Asian ventures',
        },
      ],
      advantages: [
        {
          title: 'Vibe Coding & AI',
          desc: 'Accelerating frontends and database pipelines with AI tools in days instead of months.',
        },
        {
          title: 'Turnkey Delivery',
          desc: 'From cloud databases and responsive UI to notification bots and payment gateways.',
        },
        {
          title: 'Custom Adaptability',
          desc: 'No rigid off-the-shelf templates; every screen matches your unique operational workflows.',
        },
        {
          title: 'Training & Support',
          desc: 'Clear video walkthroughs, secure hosting setup, and guaranteed post-launch warranty.',
        },
      ],
    },
    services: {
      title: 'Services & Solutions',
      subtitle: 'Complete digital toolsets engineered to streamline business operations and boost revenue',
      requestBtn: 'Request Solution',
      items: [
        {
          id: 'website',
          title: 'Corporate Website',
          description: 'Modern responsive company website for brand presentation and customer lead generation.',
          timeline: '3–5 days',
          tags: ['Responsive', 'SEO Ready', 'High Conversion'],
        },
        {
          id: 'crm',
          title: 'CRM System',
          description: 'Client relationship management, deal pipeline tracking, sales stages, and omnichannel history.',
          timeline: '5–10 days',
          tags: ['Sales Funnel', 'Analytics', 'Client History'],
        },
        {
          id: 'accounting',
          title: 'Accounting & Finance',
          description: 'Expense and revenue tracking, cash flow projections, P&L reporting, and debt monitoring.',
          timeline: '7–12 days',
          tags: ['P&L Reports', 'Cash Flow', 'Multi-currency'],
        },
        {
          id: 'tms',
          title: 'TMS (Transport Management)',
          description: 'Fleet logistics, trip dispatches, cargo tracking, driver assignments, and fuel cost controls.',
          timeline: '7–14 days',
          tags: ['Dispatching', 'Route Planning', 'Cost Tracking'],
        },
        {
          id: 'pos',
          title: 'Web POS & Cashier',
          description: 'Real-time retail sales terminal, digital receipt generation, barcode scanner support.',
          timeline: '5–9 days',
          tags: ['Fast Checkout', 'Receipt Printing', 'Cashier Shifts'],
        },
        {
          id: 'warehouse',
          title: 'Warehouse & Inventory',
          description: 'Stock balances, incoming goods, internal transfers, write-offs, and low-inventory alerts.',
          timeline: '6–10 days',
          tags: ['Stock Balances', 'Batches', 'Barcode Scanning'],
        },
        {
          id: 'booking',
          title: 'Online Booking System',
          description: 'Self-service reservation calendar for beauty salons, clinics, consultants, and auto centers.',
          timeline: '4–7 days',
          tags: ['Booking Calendar', 'SMS/TG Alerts', 'Deposits'],
        },
        {
          id: 'lms',
          title: 'School Portal / LMS',
          description: 'Online learning platform, student portals, schedule calendars, lesson tasks, and gradebooks.',
          timeline: '7–14 days',
          tags: ['Student Portals', 'Video Lessons', 'Grading'],
        },
        {
          id: 'ai-bot',
          title: 'AI Chatbot Assistant',
          description: 'Smart Telegram, WhatsApp, and website assistant delivering instant customer support 24/7.',
          timeline: '3–6 days',
          tags: ['LLM / Gemini', 'Telegram & WhatsApp', '24/7 Autopilot'],
        },
      ],
    },
    certificate: {
      title: 'Qualification & Certificate',
      subtitle: 'Verified credentials in high-velocity AI engineering and scalable software delivery',
      badge: 'Official Certificate',
      issuedTo: 'SATTAROVA GULAZAT',
      courseName: 'VIBE CODING COURSE',
      organization: 'GetForce Bootcamp',
      certNumber: 'GF-VC-2026-000123',
      certNumberLabel: 'Certificate ID',
      date: 'August 2026',
      duration: '144 hours',
      level: 'Intermediate',
      instructor: 'Seyitbek Usmanov',
      caption: '"Certificate of completion for Vibe Coding Course — GetForce Bootcamp, August 2026, 144 hours, Intermediate level. No. GF-VC-2026-000123". Click to open full resolution image.',
      btnZoom: 'View Fullscreen',
      btnCopy: 'Copy Certificate ID',
      copied: 'Certificate ID copied!',
      verifiedStatus: 'Certificate verified and authenticated',
    },
    workflow: {
      title: 'How I Work',
      subtitle: 'A structured, predictable, and transparent 4-stage delivery process',
      steps: [
        {
          number: '01',
          title: 'Inquiry & Audit',
          subtitle: 'Initial Discovery',
          description: 'You share your operational challenges or current spreadsheets. I map your business logic, isolate bottlenecks, and structure an optimal system blueprint.',
          deliverable: 'Deliverable: Express audit and roadmap',
        },
        {
          number: '02',
          title: 'Task Definition',
          subtitle: 'Architecture & UX',
          description: 'We finalize core features, user permissions (admin, manager, cashier, customer), database models, visual theme, and guaranteed project milestones.',
          deliverable: 'Deliverable: Functional spec & interactive wireframe',
        },
        {
          number: '03',
          title: 'Development (Vibe Coding)',
          subtitle: 'High-Speed Build',
          description: 'I implement your web system using state-of-the-art AI tooling. Clean responsive interface, secure cloud database, API hooks, and instant chat bots.',
          deliverable: 'Deliverable: Production-ready web platform',
        },
        {
          number: '04',
          title: 'Launch & Support',
          subtitle: 'Production & Training',
          description: 'Deployment to your custom domain and cloud host, automated backups, team video training, and ongoing post-launch warranty support.',
          deliverable: 'Deliverable: Working software running seamlessly for your team',
        },
      ],
    },
    portfolio: {
      title: 'Featured Projects',
      subtitle: 'Sample enterprise architecture prototypes and business tools ready for deployment',
      filterAll: 'All Systems',
      filterCrm: 'CRM & Sales',
      filterLogistics: 'TMS & Logistics',
      filterRetail: 'POS & Retail',
      filterEdu: 'LMS & Academy',
      viewDetails: 'Project Details',
      liveDemo: 'Live UI Preview',
      statusReady: 'Ready for Deployment',
    },
    calculator: {
      title: 'Quick System Estimator',
      subtitle: 'Select the modules you need to calculate an approximate timeframe and budget',
      selectLabel: 'Select modules for your business:',
      speedLabel: 'Delivery Pace:',
      standardSpeed: 'Standard Delivery',
      expressSpeed: 'Express Sprint (+25% priority)',
      estimatedTime: 'Estimated Delivery Time:',
      days: 'days',
      estimatedCost: 'Estimated Budget Range:',
      orderBtn: 'Order Estimate for Selected Modules',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to simplify your business operations? Send me a message and let’s talk today!',
      directTitle: 'Direct Messenger Channels',
      directSubtitle: 'Fastest response via instant messengers (typically within 30 minutes):',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Alex or Elena',
      contactLabel: 'Phone or Email',
      contactPlaceholder: '+996 ... or name@company.com',
      serviceLabel: 'System of Interest',
      serviceDefault: 'Choose a system...',
      messageLabel: 'Describe your requirements or challenges',
      messagePlaceholder: 'Tell me about your business model and what you would like to automate first...',
      submitBtn: 'Send Inquiry',
      submitting: 'Sending...',
      successTitle: 'Thank you for reaching out!',
      successMessage: 'I have received your inquiry and will contact you shortly.',
      sendAnother: 'Send another message',
      orQuickChat: 'Or reach out directly via your favorite messenger:',
    },
    footer: {
      tagline: 'Gulazat Sattarova — Developing digital systems that simplify business.',
      rights: 'All rights reserved.',
      builtWith: 'Engineered with Vibe Coding & AI',
    },
  },
  ky: {
    nav: {
      about: 'Мен жөнүндө',
      services: 'Кызматтар',
      certificate: 'Сертификат',
      workflow: 'Иш тартиби',
      portfolio: 'Портфолио',
      calculator: 'Калькулятор',
      contact: 'Байланыш',
      cta: 'Долбоорду талкуулоо',
    },
    hero: {
      badge: 'Бизнес үчүн AI жана санарип чечимдер',
      greeting: 'Саламатсызбы, мен',
      name: 'Гүлазат Саттарова',
      role: 'Бизнес-системаларды жана AI-чечимдерди иштеп чыгуучу',
      slogan: '«Бизнести жеңилдеткен санарип системаларды түзөм»',
      description: 'Бизнес үчүн веб-системаларды толук ачкычы менен иштеп чыгам: CRM, TMS, веб-касса, кампа, LMS жана 24/7 кардарлар менен иштеген акылдуу AI-чат-боттор.',
      btnServices: 'Кызматтарым',
      btnContact: 'Байланышуу',
      stats: {
        hours: '144 саат',
        hoursLabel: 'Интенсивдүү Vibe Coding',
        languages: '5 тил',
        languagesLabel: 'Кардарлар менен баарлашуу',
        turnaround: '3 күндөн',
        turnaroundLabel: 'Алгачкы прототиптин ылдамдыгы',
        solutions: '100%',
        solutionsLabel: 'Сиздин бизнесиңизге ылайык',
      },
    },
    about: {
      title: 'Мен жөнүндө',
      subtitle: 'Заманбап AI-куралдардын ылдамдыгы жана ишенимдүү бизнес архитектурасы',
      p1: 'Заманбап жасалма интеллект (AI) куралдары жана Vibe Coding методологиясы менен бизнес үчүн веб-системаларды нөлдөн баштап түзөм. Бул долбоорлорду 3-5 эсе тез бүтүрүүгө мүмкүнчүлүк берет.',
      p2: 'Ишимди тез жана ачык жүргүзөм: алгачкы идеядан баштап, системаны булутка орнотуу жана кызматкерлериңизди окутууга чейин.',
      p3: 'Кардарлар менен 5 тилде эркин баарлаша алам. Бул Кыргызстандын, Түркиянын, Европанын жана дүйнөнүн башка өлкөлөрүндөгү ишкерлер менен ийгиликтүү иштешүүгө шарт түзөт.',
      languagesTitle: 'Баарлашуу тилдери',
      languagesSubtitle: 'Сүйлөшүүлөрдү, техникалык тапшырмаларды жана колдоону эркин жүргүзөм:',
      langList: [
        {
          code: 'ky',
          name: 'Кыргызча',
          nativeName: 'Кыргыз тили',
          flag: '🇰🇬',
          level: 'Эне тили / Native',
          desc: 'Жергиликтүү ишкерлер үчүн толук түшүнүктүү баарлашуу жана санариптештирүү',
        },
        {
          code: 'ru',
          name: 'Орусча',
          nativeName: 'Русский язык',
          flag: '🇷🇺',
          level: 'Эркин / Native',
          desc: 'Бизнес сүйлөшүүлөр, документтер жана долбоорду алып баруу',
        },
        {
          code: 'en',
          name: 'Англисче',
          nativeName: 'English',
          flag: '🇬🇧',
          level: 'Fluent / Business',
          desc: 'Эл аралык стандарттар, код жана глобалдык кардарлар',
        },
        {
          code: 'de',
          name: 'Немисче',
          nativeName: 'Deutsch',
          flag: '🇩🇪',
          level: 'B2 / Ишкердик',
          desc: 'Европалык өнөктөштөр менен иш алып баруу',
        },
        {
          code: 'tr',
          name: 'Түркчө',
          nativeName: 'Türkçe',
          flag: '🇹🇷',
          level: 'Ийгиликтүү / Fluent',
          desc: 'Түркия жана Орто Азия компаниялары үчүн системалар',
        },
      ],
      advantages: [
        {
          title: 'Vibe Coding & AI',
          desc: 'Нейротармактар менен системаларды айлап эмес, күндөп тез жана так чогултуу.',
        },
        {
          title: 'Ачкычы менен системалар',
          desc: 'Маалымат базасынан баштап, Telegram билдирмелерге чейин толук кандуу иштөө.',
        },
        {
          title: 'Ыңгайлуу жана ийкемдүү',
          desc: 'Сиздин компанияңыздын өзгөчө эрежелерине ылайыкталган жеке чечимдер.',
        },
        {
          title: 'Окутуу жана кепилдик',
          desc: 'Кызматкерлерге видеосабактар жана системаны ишке киргизгенден кийинки колдоо.',
        },
      ],
    },
    services: {
      title: 'Кызматтар жана чечимдер',
      subtitle: 'Бизнести автоматташтыруу жана сатууну көбөйтүү үчүн санарип куралдар',
      requestBtn: 'Буйрутма берүү',
      items: [
        {
          id: 'website',
          title: 'Компаниянын сайты',
          description: 'Бизнести тааныштыруу жана кардарларды тартуу үчүн заманбап ыңгайлуу сайт.',
          timeline: '3–5 күн',
          tags: ['Адаптивдүү', 'SEO даяр', 'Жогорку конверсия'],
        },
        {
          id: 'crm',
          title: 'CRM-система',
          description: 'Кардарлардын эсеби, бүтүмдөр, сатуу воронкасы жана байланыш тарыхы.',
          timeline: '5–10 күн',
          tags: ['Сатуу воронкасы', 'Аналитика', 'Кардар тарыхы'],
        },
        {
          id: 'accounting',
          title: 'Бухгалтерия жана каржы',
          description: 'Киреше-чыгашаны көзөмөлдөө, кассалык отчеттор жана карыздарды эсептөө.',
          timeline: '7–12 күн',
          tags: ['P&L отчеттору', 'Акча агымы', 'Мультивалюта'],
        },
        {
          id: 'tms',
          title: 'TMS (Транспортту башкаруу)',
          description: 'Рейстерди, жүктөрдү, айдоочуларды жана күйүүчү май чыгымдарын башкаруу.',
          timeline: '7–14 күн',
          tags: ['Диспетчерлик', 'Маршруттар', 'Чыгымды көзөмөлдөө'],
        },
        {
          id: 'pos',
          title: 'Веб-касса / POS',
          description: 'Реалдуу убакытта сатуу, чек чыгаруу, штрих-коддорду колдоо.',
          timeline: '5–9 күн',
          tags: ['Тез сатуу', 'Чек басып чыгаруу', 'Кассирлердин смени'],
        },
        {
          id: 'warehouse',
          title: 'Кампа жана инвентаризация',
          description: 'Товар калдыктары, келип түшүү, которуу жана азайып калган товарлар боюнча кабарлоо.',
          timeline: '6–10 күн',
          tags: ['Калдыктарды эсептөө', 'Партиялар', 'Штрих-код'],
        },
        {
          id: 'booking',
          title: 'Онлайн жазылуу системасы',
          description: 'Салондор, клиникалар жана кызмат көрсөтүүлөр үчүн кардарлардын онлайн жазылуусу.',
          timeline: '4–7 күн',
          tags: ['Календарь', 'SMS/TG эскертүү', 'Алдын ала төлөм'],
        },
        {
          id: 'lms',
          title: 'Мектеп порталы / LMS',
          description: 'Окуу курстары, окуучулардын жеке кабинеттери, сабактардын графиги жана баалар.',
          timeline: '7–14 күн',
          tags: ['Жеке кабинет', 'Видео сабактар', 'Баалоо'],
        },
        {
          id: 'ai-bot',
          title: 'AI-чат-бот жардамчы',
          description: 'Telegram, WhatsApp жана сайт үчүн кардарларга 24/7 жооп берүүчү акылдуу бот.',
          timeline: '3–6 күн',
          tags: ['LLM / Gemini', 'Telegram & WhatsApp', '24/7 автожооп'],
        },
      ],
    },
    certificate: {
      title: 'Квалификация жана тастыктама',
      subtitle: 'Ылдам Vibe Coding жана бизнес веб-системаларын түзүү боюнча расмий күбөлүк',
      badge: 'Расмий сертификат',
      issuedTo: 'SATTAROVA GULAZAT',
      courseName: 'VIBE CODING COURSE',
      organization: 'GetForce Bootcamp',
      certNumber: 'GF-VC-2026-000123',
      certNumberLabel: 'Сертификат номери',
      date: 'Август 2026',
      duration: '144 саат',
      level: 'Intermediate',
      instructor: 'Seyitbek Usmanov',
      caption: '«Vibe Coding курсунан өткөндүгү тууралуу сертификат — GetForce Bootcamp, август 2026, 144 саат, Intermediate деңгээли. № GF-VC-2026-000123». Басып толук өлчөмдө көрүңүз.',
      btnZoom: 'Толук өлчөмдө ачуу',
      btnCopy: 'Номерди көчүрүү',
      copied: 'Сертификат номери көчүрүлдү!',
      verifiedStatus: 'Сертификат текшерилген жана тастыкталган',
    },
    workflow: {
      title: 'Иш тартиби',
      subtitle: 'Жөнөкөй жана ишенимдүү 4 баскычтан турган процесс',
      steps: [
        {
          number: '01',
          title: 'Тапшырма жана аудит',
          subtitle: 'Алгачкы талкуу',
          description: 'Бизнесиңиздин азыркы абалын жана муктаждыктарын изилдеп, тутумдун түзүлүшүн сунуштайм.',
          deliverable: 'Жыйынтык: Экспресс-аудит жана план',
        },
        {
          number: '02',
          title: 'Тапшырмаларды тактоо',
          subtitle: 'Архитектура жана дизайн',
          description: 'Системанын мүмкүнчүлүктөрүн, кызматкерлердин ролдорун жана так мөөнөттөрдү бекитебиз.',
          deliverable: 'Жыйынтык: Бекитилген ТЗ жана прототип',
        },
        {
          number: '03',
          title: 'Иштеп чыгуу (Vibe Coding)',
          subtitle: 'Ылдам куруу',
          description: 'AI-куралдардын жардамы менен ишенимдүү, кооз жана коопсуз системаны тез арада даярдайм.',
          deliverable: 'Жыйынтык: Даяр иштеген система',
        },
        {
          number: '04',
          title: 'Ишке киргизүү жана колдоо',
          subtitle: 'Сервер жана окутуу',
          description: 'Системаны серверге коёбуз, кызматкерлериңизди үйрөтөм жана кепилдик колдоо берем.',
          deliverable: 'Жыйынтык: Сиздин пайдаңыз үчүн иштеген санарип тутум',
        },
      ],
    },
    portfolio: {
      title: 'Долбоорлор портфолиосу',
      subtitle: 'Бизнеске дароо киргизүүгө даяр заманбап системалардын үлгүлөрү',
      filterAll: 'Баары',
      filterCrm: 'CRM & Сатуу',
      filterLogistics: 'TMS & Логистика',
      filterRetail: 'POS & Касса',
      filterEdu: 'LMS & Мектептер',
      viewDetails: 'Кененирээк маалымат',
      liveDemo: 'Интерфейс үлгүсү',
      statusReady: 'Орнотууга даяр',
    },
    calculator: {
      title: 'Системанын калькулятору',
      subtitle: 'Керектүү бөлүктөрдү тандап, болжолдуу убакытты жана бюджетти эсептеңиз',
      selectLabel: 'Бизнесиңизге керектүү модулдарды тандаңыз:',
      speedLabel: 'Иштөө ылдамдыгы:',
      standardSpeed: 'Стандарттык режим',
      expressSpeed: 'Экспресс режим (+25% ылдамдык)',
      estimatedTime: 'Болжолдуу убакыт:',
      days: 'күн',
      estimatedCost: 'Болжолдуу бюджет:',
      orderBtn: 'Ушул топтомго эсептөө алуу',
    },
    contact: {
      title: 'Байланыш',
      subtitle: 'Бизнес-процесстерди жеңилдетүүгө даярсызбы? Мага жазыңыз, бүгүн талкуулайбыз!',
      directTitle: 'Түз байланыш каналдары',
      directSubtitle: 'Мессенджерлерде 30 мүнөттүн ичинде тез жооп берем:',
      nameLabel: 'Сиздин атыңыз',
      namePlaceholder: 'Мисалы, Айбек же Айнура',
      contactLabel: 'Телефон же Email',
      contactPlaceholder: '+996 ... же info@company.kg',
      serviceLabel: 'Кызыктырган система',
      serviceDefault: 'Керектүү системаны тандаңыз...',
      messageLabel: 'Тапшырма тууралуу кыскача',
      messagePlaceholder: 'Компанияңыз эмне менен алектенет жана биринчи кезекте эмнени автоматташтыруу керек...',
      submitBtn: 'Билдирүү жөнөтүү',
      submitting: 'Жөнөтүлүүдө...',
      successTitle: 'Чоң рахмат!',
      successMessage: 'Билдирүүңүз кабыл алынды, мен жакында сиз менен байланышам.',
      sendAnother: 'Дагы бир билдирүү жөнөтүү',
      orQuickChat: 'Же болбосо мессенджер аркылуу түз жазыңыз:',
    },
    footer: {
      tagline: 'Гүлазат Саттарова — Бизнести жеңилдеткен санарип системалар.',
      rights: 'Бардык укуктар корголгон.',
      builtWith: 'Vibe Coding & AI менен жасалган',
    },
  },
  tr: {
    nav: {
      about: 'Hakkımda',
      services: 'Hizmetler',
      certificate: 'Sertifika',
      workflow: 'Süreç',
      portfolio: 'Portföy',
      calculator: 'Hesaplayıcı',
      contact: 'İletişim',
      cta: 'Projeyi Görüş',
    },
    hero: {
      badge: 'Yapay Zeka Destekli İş Çözümleri',
      greeting: 'Merhaba, ben',
      name: 'Gulazat Sattarova',
      role: 'İş Sistemleri & AI Çözümleri Geliştiricisi',
      slogan: '«İşi kolaylaştıran dijital sistemler üretiyorum»',
      description: 'Vibe Coding ve modern yapay zeka araçlarıyla anahtar teslim iş sistemleri tasarlıyorum: CRM, ERP, bulut kasa, filo yönetimi, LMS ve 7/24 AI destek botları.',
      btnServices: 'Hizmetlerim',
      btnContact: 'İletişime Geç',
      stats: {
        hours: '144 saat',
        hoursLabel: 'Yoğun Vibe Coding',
        languages: '5 dil',
        languagesLabel: 'Müşteri İletişimi',
        turnaround: '3 günden',
        turnaroundLabel: 'İlk Prototip Hızı',
        solutions: '%100',
        solutionsLabel: 'İşinize Özel Mimari',
      },
    },
    about: {
      title: 'Hakkımda',
      subtitle: 'Modern AI araçlarının yüksek hızı ve kurumsal iş mimarisi',
      p1: 'Modern yapay zeka araçları ve Vibe Coding metodolojisiyle işletmeler için anahtar teslim web sistemleri kuruyorum. Geleneksel yazılım ajanslarına göre 3–5 kat daha hızlı çözümler sunuyorum.',
      p2: 'Süreçlerim şeffaf ve hızlıdır: iş analizinden bulut sunucu kurulumuna ve personel eğitimine kadar her adımı eksiksiz yürütüyorum.',
      p3: 'Müşterilerimle 5 dilde akıcı iletişim kurabiliyorum. Orta Asya, Türkiye ve Avrupa pazarları için yerel ve küresel projeler geliştiriyorum.',
      languagesTitle: 'İletişim Dilleri',
      languagesSubtitle: 'Aşağıdaki dillerde rahatça görüşmeler, şartnameler ve destek sağlıyorum:',
      langList: [
        {
          code: 'ky',
          name: 'Kırgızca',
          nativeName: 'Кыргызча',
          flag: '🇰🇬',
          level: 'Anadil / Native',
          desc: 'Bölgesel işletmeler ve girişimciler için doğrudan iletişim',
        },
        {
          code: 'ru',
          name: 'Rusça',
          nativeName: 'Русский',
          flag: '🇷🇺',
          level: 'Anadil / Native',
          desc: 'Detaylı şartname, iş akışı ve proje yönetimi',
        },
        {
          code: 'en',
          name: 'İngilizce',
          nativeName: 'English',
          flag: '🇬🇧',
          level: 'Akıcı / İş Dili',
          desc: 'Uluslararası standartlar, yazılım ve entegrasyonlar',
        },
        {
          code: 'de',
          name: 'Almanca',
          nativeName: 'Deutsch',
          flag: '🇩🇪',
          level: 'B2 / Konuşma',
          desc: 'DACH bölgesi iş ortakları ile iletişim',
        },
        {
          code: 'tr',
          name: 'Türkçe',
          nativeName: 'Türkçe',
          flag: '🇹🇷',
          level: 'İleri Seviye / Akıcı',
          desc: 'Türkiye ve Orta Asya şirketleri için iş görüşmeleri ve sistemler',
        },
      ],
      advantages: [
        {
          title: 'Vibe Coding & AI',
          desc: 'Aylarca süren kodlamayı modern AI araçlarıyla birkaç günde tamamlıyorum.',
        },
        {
          title: 'Anahtar Teslim',
          desc: 'Veritabanı, arayüz, Telegram bildirimleri ve ödeme sistemleri tam entegre.',
        },
        {
          title: 'Esnek & Özel',
          desc: 'Şablon kalıplar yerine firmanızın özgün ihtiyaçlarına tam uyan yapılar.',
        },
        {
          title: 'Eğitim & Destek',
          desc: 'Kullanım videoları, sunucu optimizasyonu ve canlı teknik destek.',
        },
      ],
    },
    services: {
      title: 'Hizmetler ve Çözümler',
      subtitle: 'Operasyonları otomatikleştiren ve satışı artıran dijital araçlar',
      requestBtn: 'Teklif Al',
      items: [
        {
          id: 'website',
          title: 'Kurumsal Web Sitesi',
          description: 'İşletmenizi tanıtan, mobil uyumlu ve yüksek dönüşümlü modern kurumsal web sitesi.',
          timeline: '3–5 gün',
          tags: ['Responsive', 'SEO Uyumlu', 'Dönüşüm Odaklı'],
        },
        {
          id: 'crm',
          title: 'CRM Sistemi',
          description: 'Müşteri takibi, satış hunisi, teklif yönetimi ve iletişim geçmişi.',
          timeline: '5–10 gün',
          tags: ['Satış Hunisi', 'Analitik', 'Müşteri Geçmişi'],
        },
        {
          id: 'accounting',
          title: 'Ön Muhasebe & Finans',
          description: 'Gelir-gider yönetimi, nakit akışı raporları, alacak takibi ve faturalama.',
          timeline: '7–12 gün',
          tags: ['Gelir/Gider', 'Nakit Akışı', 'Çoklu Para Birimi'],
        },
        {
          id: 'tms',
          title: 'TMS (Taşımacılık & Filo)',
          description: 'Sevkiyat, araç filosu, şoförler ve kilometre maliyetlerinin yönetimi.',
          timeline: '7–14 gün',
          tags: ['Filo Yönetimi', 'Rotalar', 'Maliyet Takibi'],
        },
        {
          id: 'pos',
          title: 'Web POS / Kasa Sistemi',
          description: 'Perakende satış, fiş yazdırma, barkod okuyucu ve vardiya yönetimi.',
          timeline: '5–9 gün',
          tags: ['Hızlı Satış', 'Fiş Baskı', 'Kasa Vardiyaları'],
        },
        {
          id: 'warehouse',
          title: 'Depo & Stok Takibi',
          description: 'Stok bakiyeleri, giriş-çıkışlar, transferler ve kritik stok uyarıları.',
          timeline: '6–10 gün',
          tags: ['Stok Sayımı', 'Parti Takibi', 'Barkod'],
        },
        {
          id: 'booking',
          title: 'Online Randevu Sistemi',
          description: 'Klinik, güzellik salonu ve danışmanlıklar için otomatik takvim ve rezervasyon.',
          timeline: '4–7 gün',
          tags: ['Takvim', 'SMS/TG Bildirim', 'Ön Ödeme'],
        },
        {
          id: 'lms',
          title: 'Okul Portalı / LMS',
          description: 'Ders içerikleri, öğrenci panelleri, sınavlar, ödevler ve not defteri.',
          timeline: '7–14 gün',
          tags: ['Öğrenci Paneli', 'Video Dersler', 'Not Sistemi'],
        },
        {
          id: 'ai-bot',
          title: 'AI Chatbot Asistanı',
          description: 'Telegram, WhatsApp ve web siteniz için 7/24 sorulara yanıt veren akıllı yapay zeka asistanı.',
          timeline: '3–6 gün',
          tags: ['LLM / Gemini', 'Telegram & WhatsApp', '7/24 Kesintisiz'],
        },
      ],
    },
    certificate: {
      title: 'Yetkinlik ve Sertifika',
      subtitle: 'Hızlı AI geliştirme ve karmaşık iş sistemleri üretimi sertifikası',
      badge: 'Resmi Sertifika',
      issuedTo: 'SATTAROVA GULAZAT',
      courseName: 'VIBE CODING COURSE',
      organization: 'GetForce Bootcamp',
      certNumber: 'GF-VC-2026-000123',
      certNumberLabel: 'Sertifika No',
      date: 'Ağustos 2026',
      duration: '144 saat',
      level: 'Intermediate',
      instructor: 'Seyitbek Usmanov',
      caption: '«Vibe Coding Kursu Başarı Sertifikası — GetForce Bootcamp, Ağustos 2026, 144 saat, Intermediate seviye. No: GF-VC-2026-000123». Tam boyutta görüntülemek için tıklayın.',
      btnZoom: 'Tam Boyut Görüntüle',
      btnCopy: 'Numarayı Kopyala',
      copied: 'Numara kopyalandı!',
      verifiedStatus: 'Sertifika onaylı ve doğrulanmıştır',
    },
    workflow: {
      title: 'Nasıl Çalışıyorum',
      subtitle: 'Net, şeffaf ve güvenilir 4 adımlı geliştirme süreci',
      steps: [
        {
          number: '01',
          title: 'Talep ve Analiz',
          subtitle: 'İlk Tanışma',
          description: 'Mevcut iş akışlarınızı veya tablolarınızı inceliyor, darboğazları tespit edip sistem planını çıkarıyorum.',
          deliverable: 'Çıktı: Hızlı denetim ve sistem haritası',
        },
        {
          number: '02',
          title: 'Hedeflerin Netleşmesi',
          subtitle: 'Mimari ve Tasarım',
          description: 'Gereksinimleri, kullanıcı yetkilerini, veritabanını ve teslim tarihlerini netleştiriyoruz.',
          deliverable: 'Çıktı: Onaylı teknik şartname ve prototip',
        },
        {
          number: '03',
          title: 'Geliştirme (Vibe Coding)',
          subtitle: 'Hızlı Üretim',
          description: 'Modern AI araçları ile arayüzü, veritabanını ve entegrasyonları hızla kodluyorum.',
          deliverable: 'Çıktı: Çalışır durumda tam sistem',
        },
        {
          number: '04',
          title: 'Yayın ve Destek',
          subtitle: 'Canlıya Alma ve Eğitim',
          description: 'Sistemi buluta kuruyor, ekibinize kullanım eğitimi veriyor ve garanti desteği sağlıyorum.',
          deliverable: 'Çıktı: İşletmenize değer katan çalışan sistem',
        },
      ],
    },
    portfolio: {
      title: 'Örnek Projeler',
      subtitle: 'Hızlıca uyarlanabilir kurumsal iş sistemleri ve prototipler',
      filterAll: 'Tümü',
      filterCrm: 'CRM & Satış',
      filterLogistics: 'TMS & Lojistik',
      filterRetail: 'POS & Kasa',
      filterEdu: 'LMS & Eğitim',
      viewDetails: 'Proje Detayları',
      liveDemo: 'Canlı Demo',
      statusReady: 'Kuruluma Hazır',
    },
    calculator: {
      title: 'Hızlı Sistem Hesaplayıcı',
      subtitle: 'İhtiyacınız olan modülleri seçin, tahmini süre ve bütçeyi görün',
      selectLabel: 'İşletmeniz için modülleri seçin:',
      speedLabel: 'Geliştirme Hızı:',
      standardSpeed: 'Standart Hız',
      expressSpeed: 'Ekspres Hız (+%25 öncelik)',
      estimatedTime: 'Tahmini Süre:',
      days: 'gün',
      estimatedCost: 'Tahmini Bütçe:',
      orderBtn: 'Bu Paket İçin Teklif İste',
    },
    contact: {
      title: 'İletişim',
      subtitle: 'İş süreçlerinizi sadeleştirmeye hazır mısınız? Bugün mesaj atın, projenizi konuşalım!',
      directTitle: 'Doğrudan İletişim',
      directSubtitle: 'Mesajlaşma uygulamalarından ortalama 30 dakikada yanıt veriyorum:',
      nameLabel: 'Adınız',
      namePlaceholder: 'Örn: Mehmet veya Zeynep',
      contactLabel: 'Telefon veya E-posta',
      contactPlaceholder: '+90 ... veya ad@sirket.com',
      serviceLabel: 'İlgilendiğiniz Çözüm',
      serviceDefault: 'Uygun sistemi seçin...',
      messageLabel: 'İhtiyaç veya hedeflerinizi özetleyin',
      messagePlaceholder: 'Şirketinizin faaliyet alanı ve ilk etapta otomatikleştirmek istediğiniz konular...',
      submitBtn: 'Talebi Gönder',
      submitting: 'Gönderiliyor...',
      successTitle: 'Teşekkürler!',
      successMessage: 'Talebinizi aldım, en kısa sürede sizinle iletişime geçeceğim.',
      sendAnother: 'Yeni mesaj gönder',
      orQuickChat: 'Veya doğrudan mesajlaşma uygulamasından yazın:',
    },
    footer: {
      tagline: 'Gulazat Sattarova — İşi basitleştiren dijital sistemler.',
      rights: 'Tüm hakları saklıdır.',
      builtWith: 'Vibe Coding & AI ile geliştirildi',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      services: 'Leistungen',
      certificate: 'Zertifikat',
      workflow: 'Arbeitsweise',
      portfolio: 'Portfolio',
      calculator: 'Kalkulator',
      contact: 'Kontakt',
      cta: 'Projekt anfragen',
    },
    hero: {
      badge: 'KI-gestützte Business-Lösungen',
      greeting: 'Hallo, ich bin',
      name: 'Gulazat Sattarova',
      role: 'Entwicklerin für Business-Systeme & KI-Lösungen',
      slogan: '«Ich baue digitale Systeme, die Geschäftsprozesse vereinfachen»',
      description: 'Schlüsselfertige Entwicklung moderner Unternehmenssoftware: CRM, ERP, Web-Kassen (POS), TMS Transportlogistik, LMS Schulungsportale und maßgeschneiderte 24/7 KI-Assistenten via Vibe Coding.',
      btnServices: 'Meine Leistungen',
      btnContact: 'Kontakt aufnehmen',
      stats: {
        hours: '144 Std.',
        hoursLabel: 'Intensives Vibe Coding',
        languages: '5 Sprachen',
        languagesLabel: 'Kundenkommunikation',
        turnaround: 'ab 3 Tagen',
        turnaroundLabel: 'Schnelligkeit des ersten Prototyps',
        solutions: '100%',
        solutionsLabel: 'Maßgeschneiderte Architektur',
      },
    },
    about: {
      title: 'Über mich',
      subtitle: 'Hohe Geschwindigkeit moderner KI-Tools kombiniert mit solider Unternehmensarchitektur',
      p1: 'Ich entwickle maßgeschneiderte Web-Systeme für Unternehmen mit modernen KI-Werkzeugen und der Vibe Coding Methode. Dies ermöglicht eine 3- bis 5-mal schnellere Umsetzung im Vergleich zu klassischen Agenturen.',
      p2: 'Meine Arbeitsweise ist schnell und transparent: von der ersten Prozessanalyse bis hin zum Cloud-Rollout und der Schulung Ihres Teams.',
      p3: 'Ich kommuniziere fließend in 5 Sprachen, was die reibungslose Zusammenarbeit mit Gründern und Firmen aus Zentralasien, der Türkei, Deutschland und international ermöglicht.',
      languagesTitle: 'Sprachen',
      languagesSubtitle: 'Verhandlungssicher in Wort, Schrift und Dokumentation:',
      langList: [
        {
          code: 'ky',
          name: 'Kirgisisch',
          nativeName: 'Кыргызча',
          flag: '🇰🇬',
          level: 'Muttersprache / Native',
          desc: 'Direkte Zusammenarbeit für regionale Unternehmen',
        },
        {
          code: 'ru',
          name: 'Russisch',
          nativeName: 'Русский',
          flag: '🇷🇺',
          level: 'Muttersprache / Native',
          desc: 'Ausführliche Lastenhefte, Verträge und Projektmanagement',
        },
        {
          code: 'en',
          name: 'Englisch',
          nativeName: 'English',
          flag: '🇬🇧',
          level: 'Fließend / Business',
          desc: 'Internationale Spezifikationen, APIs und Programmierung',
        },
        {
          code: 'de',
          name: 'Deutsch',
          nativeName: 'Deutsch',
          flag: '🇩🇪',
          level: 'B2 / Konversation',
          desc: 'Geschäftskommunikation und Projektumsetzung für den DACH-Raum',
        },
        {
          code: 'tr',
          name: 'Türkisch',
          nativeName: 'Türkçe',
          flag: '🇹🇷',
          level: 'Fließend / C1',
          desc: 'Systeme für türkische und eurasische Unternehmen',
        },
      ],
      advantages: [
        {
          title: 'Vibe Coding & KI',
          desc: 'Entwicklung vollwertiger Web-Systeme in Tagen statt Monaten dank KI-Integration.',
        },
        {
          title: 'Schlüsselfertig',
          desc: 'Von der Datenbank über intuitive Dashboards bis hin zu automatischen Benachrichtigungen.',
        },
        {
          title: 'Maßgeschneidert',
          desc: 'Keine starren Standard-Tools, sondern Software exakt nach Ihren betrieblichen Anforderungen.',
        },
        {
          title: 'Schulung & Garantie',
          desc: 'Ausführliche Videoguides, Server-Setup und garantierter technischer Support.',
        },
      ],
    },
    services: {
      title: 'Leistungen & Lösungen',
      subtitle: 'Ganzheitliche digitale Werkzeuge zur Prozessautomatisierung und Umsatzsteigerung',
      requestBtn: 'Lösung anfragen',
      items: [
        {
          id: 'website',
          title: 'Unternehmens-Website',
          description: 'Moderne, responsive Firmen-Website zur perfekten Präsentation und Lead-Generierung.',
          timeline: '3–5 Tage',
          tags: ['Responsive', 'SEO', 'Konversionsstark'],
        },
        {
          id: 'crm',
          title: 'CRM-System',
          description: 'Kundenverwaltung, Vertriebstrichter, Deal-Tracking und lückenlose Kontakthistorie.',
          timeline: '5–10 Tage',
          tags: ['Sales Funnel', 'Analysen', 'Kundenhistorie'],
        },
        {
          id: 'accounting',
          title: 'Buchhaltung & Finanzen',
          description: 'Einnahmen- und Ausgabenverwaltung, Cashflow-Analysen, GuV-Berichte und Forderungen.',
          timeline: '7–12 Tage',
          tags: ['P&L Berichte', 'Cashflow', 'Multiwährung'],
        },
        {
          id: 'tms',
          title: 'TMS (Transportmanagement)',
          description: 'Tourenplanung, Frachtverfolgung, Fuhrpark- und Fahrerverwaltung, Kostenkontrolle.',
          timeline: '7–14 Tage',
          tags: ['Disposition', 'Routen', 'Kostenkontrolle'],
        },
        {
          id: 'pos',
          title: 'Web-Kassensystem (POS)',
          description: 'Verkäufe, Kassenbelege in Echtzeit, Barcode-Scanner-Support und Schichtabrechnung.',
          timeline: '5–9 Tage',
          tags: ['Schnellkasse', 'Bon-Druck', 'Schichtverwaltung'],
        },
        {
          id: 'warehouse',
          title: 'Lager & Inventur',
          description: 'Warenbestände, Wareneingang, Umlagerung, Mindestbestands-Warnungen.',
          timeline: '6–10 Tage',
          tags: ['Bestandsführung', 'Chargen', 'Barcode-Scan'],
        },
        {
          id: 'booking',
          title: 'Online-Terminbuchung',
          description: 'Automatisierte Terminvergabe für Salons, Praxen, Dienstleister und Agenturen.',
          timeline: '4–7 Tage',
          tags: ['Kalender', 'SMS/TG Erinnerung', 'Anzahlung'],
        },
        {
          id: 'lms',
          title: 'Schulportal / LMS',
          description: 'Lernplattform, Schüler-Dashboards, Stundenpläne, Video-Module und Notenübersicht.',
          timeline: '7–14 Tage',
          tags: ['Schüler-Portal', 'Videokurse', 'Notenspiegel'],
        },
        {
          id: 'ai-bot',
          title: 'KI-Chatbot-Assistent',
          description: 'Intelligenter Bot für Telegram, WhatsApp und Website mit automatischer Kundenbetreuung 24/7.',
          timeline: '3–6 Tage',
          tags: ['LLM / Gemini', 'Telegram & WhatsApp', '24/7 Autopilot'],
        },
      ],
    },
    certificate: {
      title: 'Qualifikation & Zertifikat',
      subtitle: 'Verifizierte Qualifikation in hochdynamischer KI-Entwicklung und Software-Engineering',
      badge: 'Offizielles Zertifikat',
      issuedTo: 'SATTAROVA GULAZAT',
      courseName: 'VIBE CODING COURSE',
      organization: 'GetForce Bootcamp',
      certNumber: 'GF-VC-2026-000123',
      certNumberLabel: 'Zertifikatsnummer',
      date: 'August 2026',
      duration: '144 Stunden',
      level: 'Intermediate',
      instructor: 'Seyitbek Usmanov',
      caption: '«Zertifikat über den erfolgreichen Abschluss des Vibe Coding Kurses — GetForce Bootcamp, August 2026, 144 Stunden, Niveau Intermediate. Nr. GF-VC-2026-000123». Klicken Sie zum Vergrößern.',
      btnZoom: 'In voller Größe ansehen',
      btnCopy: 'Nummer kopieren',
      copied: 'Nummer kopiert!',
      verifiedStatus: 'Zertifikat erfolgreich verifiziert',
    },
    workflow: {
      title: 'Wie ich arbeite',
      subtitle: 'Ein strukturierter, transparenter 4-Stufen-Prozess',
      steps: [
        {
          number: '01',
          title: 'Anfrage & Analyse',
          subtitle: 'Kennenlernen',
          description: 'Sie schildern Ihre Anforderungen. Ich analysiere Ihre Geschäftsprozesse und konzipiere die passende Systemstruktur.',
          deliverable: 'Ergebnis: Schnellaudit und Implementierungsplan',
        },
        {
          number: '02',
          title: 'Aufgabenstellung & UX',
          subtitle: 'Architektur',
          description: 'Wir definieren die Funktionen, Benutzerrollen (Admin, Manager, Kassierer), Datenmodelle und feste Meilensteine.',
          deliverable: 'Ergebnis: Freigegebenes Lastenheft & interaktiver Prototyp',
        },
        {
          number: '03',
          title: 'Entwicklung (Vibe Coding)',
          subtitle: 'Schneller Aufbau',
          description: 'Ich setze das System mit modernen KI-Tools um: reaktives Frontend, sichere Datenbank und Messengern-Anbindungen.',
          deliverable: 'Ergebnis: Voll funktionsfähiges System',
        },
        {
          number: '04',
          title: 'Rollout & Support',
          subtitle: 'Betrieb & Schulung',
          description: 'Bereitstellung auf Ihrem Server, automatisierte Backups, Team-Einweisung per Video und Garantiesupport.',
          deliverable: 'Ergebnis: Ein laufendes System, das sofort Zeit und Kosten spart',
        },
      ],
    },
    portfolio: {
      title: 'Projekt-Portfolio',
      subtitle: 'Beispielsysteme und sofort adaptierbare Business-Lösungen',
      filterAll: 'Alle Systeme',
      filterCrm: 'CRM & Vertrieb',
      filterLogistics: 'TMS & Logistik',
      filterRetail: 'POS & Kasse',
      filterEdu: 'LMS & Schulen',
      viewDetails: 'Projektdetails',
      liveDemo: 'Live UI Demo',
      statusReady: 'Bereit zur Bereitstellung',
    },
    calculator: {
      title: 'System-Kalkulator',
      subtitle: 'Wählen Sie die gewünschten Module und berechnen Sie Zeitraum und Budget',
      selectLabel: 'Wählen Sie Ihre gewünschten Module:',
      speedLabel: 'Entwicklungstempo:',
      standardSpeed: 'Standardtempo',
      expressSpeed: 'Express-Sprint (+25% Priorität)',
      estimatedTime: 'Geschätzte Dauer:',
      days: 'Tage',
      estimatedCost: 'Geschätzter Budgetrahmen:',
      orderBtn: 'Angebot für diese Auswahl anfordern',
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Bereit, Ihre Unternehmensprozesse zu vereinfachen? Schreiben Sie mir heute noch!',
      directTitle: 'Direkte Kanäle',
      directSubtitle: 'Schnellste Rückmeldung via Messenger (innerhalb von 30 Minuten):',
      nameLabel: 'Ihr Name',
      namePlaceholder: 'z.B. Anna oder Thomas',
      contactLabel: 'Telefon oder E-Mail',
      contactPlaceholder: '+49 ... oder kontakt@firma.de',
      serviceLabel: 'Gewünschte Lösung',
      serviceDefault: 'Passendes System wählen...',
      messageLabel: 'Beschreiben Sie Ihre Herausforderung',
      messagePlaceholder: 'Erzählen Sie kurz von Ihrem Unternehmen und was Sie zuerst automatisieren möchten...',
      submitBtn: 'Anfrage absenden',
      submitting: 'Wird gesendet...',
      successTitle: 'Vielen Dank für Ihre Nachricht!',
      successMessage: 'Ich habe Ihre Anfrage erhalten und melde mich zeitnah bei Ihnen.',
      sendAnother: 'Weitere Nachricht senden',
      orQuickChat: 'Oder schreiben Sie mir direkt über Ihren bevorzugten Messenger:',
    },
    footer: {
      tagline: 'Gulazat Sattarova — Digitale Systeme, die Unternehmen vereinfachen.',
      rights: 'Alle Rechte vorbehalten.',
      builtWith: 'Entwickelt mit Vibe Coding & KI',
    },
  },
};
