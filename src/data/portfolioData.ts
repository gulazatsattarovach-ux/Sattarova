import crmImage from '@/src/assets/images/project_crm_analytics_1790247974561.jpg';
import tmsImage from '@/src/assets/images/project_tms_logistics_1790247989395.jpg';
import posImage from '@/src/assets/images/project_pos_checkout_1790248001461.jpg';
import lmsImage from '@/src/assets/images/project_lms_portal_1790248013083.jpg';

export interface ProjectItem {
  id: string;
  category: 'crm' | 'logistics' | 'retail' | 'edu';
  titleRu: string;
  titleEn: string;
  titleKy: string;
  titleTr: string;
  titleDe: string;
  descRu: string;
  descEn: string;
  descKy: string;
  descTr: string;
  descDe: string;
  fullDescRu: string;
  fullDescEn: string;
  image: string;
  metrics: {
    labelRu: string;
    labelEn: string;
    value: string;
  }[];
  techStack: string[];
  featuresRu: string[];
  featuresEn: string[];
  demoType: string;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'apex-flow-crm',
    category: 'crm',
    titleRu: 'ApexFlow CRM — Управление сделками и продажами',
    titleEn: 'ApexFlow CRM — Deal Pipeline & Sales Automation',
    titleKy: 'ApexFlow CRM — Сатуу жана келишимдерди башкаруу',
    titleTr: 'ApexFlow CRM — Satış Hunisi ve Müşteri Yönetimi',
    titleDe: 'ApexFlow CRM — Vertriebspipeline & Deal-Management',
    descRu: 'Интеллектуальная CRM с автоматической классификацией лидов, воронками продаж и дашбордом выручки.',
    descEn: 'Intelligent CRM featuring automatic lead triage, visual sales pipelines, and live revenue analytics.',
    descKy: 'Кардарлардын эсеби, бүтүмдөр, сатуу воронкасы жана автоматтык каржы отчеттору бар CRM-тутум.',
    descTr: 'Müşteri adaylarının sınıflandırılması, satış hunisi ve anlık ciro paneli sunan akıllı CRM.',
    descDe: 'Intelligente CRM mit automatischer Lead-Klassifizierung, Vertriebstrichtern und Umsatz-Dashboard.',
    fullDescRu: 'Полнофункциональная система для отделов продаж: карточки клиентов, запись звонков и переписок, авто-задачи менеджерам, расчет конверсий по этапам и генерация счетов в один клик.',
    fullDescEn: 'End-to-end CRM engineered for high-velocity sales teams: customer 360-degree dossiers, omnichannel activity logs, pipeline stage triggers, conversion rate benchmarking, and 1-click invoice issuance.',
    image: crmImage,
    metrics: [
      { labelRu: 'Рост конверсии', labelEn: 'Conversion Boost', value: '+38%' },
      { labelRu: 'Экономия времени', labelEn: 'Time Saved / Day', value: '2.5ч' },
      { labelRu: 'Срок разработки', labelEn: 'Delivery Timeline', value: '7 дней' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL / Supabase'],
    featuresRu: [
      'Визуальный Канбан воронки продаж с drag-and-drop',
      'Интеграция с Telegram и WhatsApp для захвата лидов',
      'Автоматический расчет среднего чека и LTV',
      'Гибкое разграничение прав доступа для менеджеров и руководства',
    ],
    featuresEn: [
      'Interactive visual Kanban pipeline with smooth drag-and-drop',
      'Seamless Telegram & WhatsApp webhook lead ingestion',
      'Automated cohort analytics for average ticket & customer LTV',
      'Granular role-based access control (Admin, Lead, Agent)',
    ],
    demoType: 'crm',
  },
  {
    id: 'swift-trans-tms',
    category: 'logistics',
    titleRu: 'SwiftTrans TMS — Логистика и рейсы',
    titleEn: 'SwiftTrans TMS — Fleet Logistics & Route Dispatch',
    titleKy: 'SwiftTrans TMS — Транспорт жана каттамдарды башкаруу',
    titleTr: 'SwiftTrans TMS — Filo Taşımacılığı ve Rota Sevk',
    titleDe: 'SwiftTrans TMS — Flottenlogistik & Routendisposition',
    descRu: 'Диспетчеризация грузоперевозок, онлайн-карта рейсов, контроль топлива и путевые листы водителей.',
    descEn: 'Cargo dispatching platform, live vehicle tracking, fuel consumption accounting, and driver digital manifests.',
    descKy: 'Жүк ташуучу унааларды көзөмөлдөө, каттамдардын картасы жана күйүүчү май чыгымдарын эсептөө.',
    descTr: 'Kargo sevkiyatı, canlı araç rotası haritası, yakıt takibi ve dijital sürücü görev emirleri.',
    descDe: 'Touren- und Frachtdisposition, digitale Routenkarte, Kraftstoffkontrolle und elektronische Fahrtenbücher.',
    fullDescRu: 'Специализированная система для логистических и экспедиторских компаний: учет грузоподъемности автопарка, расчет себестоимости каждого рейса, статусы доставки грузов и мобильный кабинет водителя.',
    fullDescEn: 'Specialized enterprise platform for transport and freight forwarding firms: fleet payload optimization, per-mile cost calculation, real-time cargo milestone updates, and responsive driver mobile portal.',
    image: tmsImage,
    metrics: [
      { labelRu: 'Снижение порожнего пробега', labelEn: 'Deadhead Reduction', value: '-22%' },
      { labelRu: 'Автопарк под контролем', labelEn: 'Managed Fleet', value: '60+ ТС' },
      { labelRu: 'Срок разработки', labelEn: 'Delivery Timeline', value: '10 дней' },
    ],
    techStack: ['React', 'TypeScript', 'Mapbox / Leaflet', 'Node.js', 'WebSockets'],
    featuresRu: [
      'Интерактивная карта распределения грузов и машин',
      'Расчет стоимости километра пути и чистой маржинальности рейса',
      'Электронные путевые листы и акты приема-передачи',
      'Telegram-оповещения клиентам о прибытии груза',
    ],
    featuresEn: [
      'Live interactive map dispatching with route checkpoints',
      'Per-kilometer expense breakdown and net margin metrics',
      'Digital bill of lading and proof-of-delivery signatures',
      'Automated customer SMS/Telegram delivery arrival alerts',
    ],
    demoType: 'tms',
  },
  {
    id: 'retail-point-pos',
    category: 'retail',
    titleRu: 'RetailPoint POS — Облачная веб-касса',
    titleEn: 'RetailPoint POS — Cloud Cashier Terminal & Retail',
    titleKy: 'RetailPoint POS — Булуттук веб-касса жана сатуу',
    titleTr: 'RetailPoint POS — Bulut Kasa ve Perakende Satış',
    titleDe: 'RetailPoint POS — Cloud-Kassensystem & Einzelhandel',
    descRu: 'Сверхбыстрый терминал кассира: продажи, чеки, штрихкоды, возвраты и закрытие кассовых смен.',
    descEn: 'Ultra-fast retail terminal: instant barcode scanning, digital receipt printing, refunds, and shift reconciliation.',
    descKy: 'Ылдам сатуу терминалы, чектер, штрих-коддор жана кассирлердин смендерин жабуу.',
    descTr: 'Hızlı kasa terminali: barkod okuma, fiş yazdırma, iadeler ve vardiya gün sonu raporları.',
    descDe: 'Blitzschnelles Kassenterminal: Barcode-Scanning, digitaler Bondruck, Retouren und Kassenabschlüsse.',
    fullDescRu: 'Готовое решение для магазинов, кафе, бутиков и аптек: работает в любом браузере на ноутбуке, планшете или сенсорном моноблоке. Мгновенный поиск товаров, скидки, раздельная оплата (нал/безнал/QR) и фискализация.',
    fullDescEn: 'Turnkey POS solution for boutiques, grocery stores, cafes, and retail chains. Operates directly in standard web browsers on tablets or touch POS hardware with instant SKU lookup, split payments, and end-of-day X/Z reports.',
    image: posImage,
    metrics: [
      { labelRu: 'Скорость пробития чека', labelEn: 'Checkout Speed', value: '1.2 сек' },
      { labelRu: 'Автономность работы', labelEn: 'Offline Capable', value: '100%' },
      { labelRu: 'Срок разработки', labelEn: 'Delivery Timeline', value: '6 дней' },
    ],
    techStack: ['React', 'IndexedDB Offline Cache', 'Web Bluetooth Print', 'Tailwind CSS'],
    featuresRu: [
      'Быстрый поиск по штрихкоду, артикулу или названию',
      'Комбинированная оплата (Наличные + Карта + QR-код)',
      'Печать товарных чеков на термопринтерах 58мм и 80мм',
      'Автоматическая синхронизация остатков со складом',
    ],
    featuresEn: [
      'Instant SKU barcode scanning and tactile quick-tap catalog',
      'Multi-tender split payments (Cash, NFC/Card, QR wallet)',
      'Direct thermal receipt printing support (58mm / 80mm)',
      'Instant inventory depletion sync with central warehouse',
    ],
    demoType: 'pos',
  },
  {
    id: 'edumaster-lms',
    category: 'edu',
    titleRu: 'EduMaster LMS — Портал онлайн-школы',
    titleEn: 'EduMaster LMS — Online Academy & Learning Platform',
    titleKy: 'EduMaster LMS — Онлайн-мектеп жана окуу порталы',
    titleTr: 'EduMaster LMS — Online Akademi ve Eğitim Portalı',
    titleDe: 'EduMaster LMS — Online-Akademie & Lernplattform',
    descRu: 'Платформа для курсов и учебных центров: личные кабинеты, домашние задания, расписание и тестирование.',
    descEn: 'Comprehensive learning management portal: student workspaces, video curriculums, assignment reviews, and gradebooks.',
    descKy: 'Окуу борборлору үчүн портал: жеке кабинеттер, үй тапшырмалары, видео сабактар жана баалар.',
    descTr: 'Kurslar ve eğitim merkezleri için platform: öğrenci panelleri, ödevler, sınavlar ve ders programı.',
    descDe: 'Komplette Lernplattform für Akademien: Schüler-Dashboards, Videomodule, Aufgabenüberprüfung und Notenspiegel.',
    fullDescRu: 'Современная образовательная система для языковых школ, bootcamp-ов, репетиторских центров и корпоративных университетов. Автоматическая проверка тестов, календарь уроков с зум-ссылками и геймификация обучения.',
    fullDescEn: 'Enterprise learning suite tailored for bootcamps, language institutes, tutoring centers, and corporate training. Features automated quizzes, calendar integration with live webinar links, progress tracking, and graduation badges.',
    image: lmsImage,
    metrics: [
      { labelRu: 'Доходимость до конца курса', labelEn: 'Completion Rate', value: '89%' },
      { labelRu: 'Студентов в системе', labelEn: 'Active Students', value: '1,200+' },
      { labelRu: 'Срок разработки', labelEn: 'Delivery Timeline', value: '8 дней' },
    ],
    techStack: ['React', 'TypeScript', 'Video Stream API', 'Express Backend', 'PostgreSQL'],
    featuresRu: [
      'Личные кабинеты ученика, преподавателя и администратора',
      'Интерактивные домашние задания с проверкой и комментариями',
      'Электронный журнал посещаемости и рейтинговая таблица',
      'Выпуск электронных сертификатов с уникальным ID',
    ],
    featuresEn: [
      'Dedicated dashboards for Students, Tutors, and Administrators',
      'Assignment submission portal with rich inline teacher feedback',
      'Attendance tracker, interactive calendar, and leaderboard',
      'Automated verifiable PDF credential and certificate generation',
    ],
    demoType: 'lms',
  },
];
