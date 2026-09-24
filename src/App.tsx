import React, { useState } from 'react';
import { Language } from '@/src/data/translations';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { AboutMe } from '@/src/components/AboutMe';
import { Services } from '@/src/components/Services';
import { CertificateSection } from '@/src/components/CertificateSection';
import { Workflow } from '@/src/components/Workflow';
import { PortfolioSection } from '@/src/components/PortfolioSection';
import { CostCalculator } from '@/src/components/CostCalculator';
import { ContactSection } from '@/src/components/ContactSection';
import { Footer } from '@/src/components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('site_lang') as Language;
      if (saved && ['ky', 'ru', 'en', 'de', 'tr'].includes(saved)) {
        return saved;
      }
    }
    // First priority: Kyrgyz (per user request)
    return 'ky';
  });

  const [selectedService, setSelectedService] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', currentLang);
      document.documentElement.lang = currentLang;
    }
  }, [currentLang]);

  const handleNavigate = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    handleNavigate('#contact');
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    let msg = '';
    switch (currentLang) {
      case 'ky':
        msg = `Саламатсызбы, Гүлазат! Мен «${serviceName}» чечимин иштеп чыгуу боюнча кызыгып жатам. Долбоордун деталдарын талкуулайлы.`;
        break;
      case 'en':
        msg = `Hello Gulazat! I am interested in building the «${serviceName}» solution. Let's discuss the project details.`;
        break;
      case 'de':
        msg = `Hallo Gulazat! Ich interessiere mich für die Entwicklung der Lösung «${serviceName}». Lassen Sie uns die Projektdetails besprechen.`;
        break;
      case 'tr':
        msg = `Merhaba Gülazat! «${serviceName}» çözümünün geliştirilmesiyle ilgileniyorum. Detayları görüşmek isterim.`;
        break;
      default:
        msg = `Здравствуйте, Гүлазат! Меня интересует разработка решения: «${serviceName}». Давайте обсудим детали.`;
        break;
    }
    setPrefilledMessage(msg);
    handleNavigate('#contact');
  };

  const handleApplyEstimate = (summary: string) => {
    const title = currentLang === 'ky' ? 'Комплекстүү система / Бир нече модуль'
      : currentLang === 'en' ? 'Custom Enterprise Suite / Multi-Module'
      : currentLang === 'de' ? 'Gesamtsystem / Mehrere Module'
      : currentLang === 'tr' ? 'Entegre Sistem / Çoklu Modül'
      : 'Комплексная система / Несколько модулей';
    setSelectedService(title);
    setPrefilledMessage(summary);
    handleNavigate('#contact');
  };

  const handleOrderProject = (projectName: string) => {
    setSelectedService(projectName);
    let msg = '';
    switch (currentLang) {
      case 'ky':
        msg = `Саламатсызбы, Гүлазат! Мага «${projectName}» долбооруңуз абдан жакты. Менин бизнесиме ушундай тутумду иштеп чыгууну каалайм.`;
        break;
      case 'en':
        msg = `Hello Gulazat! I really liked your «${projectName}» project. I would like to build a similar system for my business.`;
        break;
      case 'de':
        msg = `Hallo Gulazat! Mir hat Ihr Projekt «${projectName}» sehr gefallen. Ich möchte ein ähnliches System für mein Unternehmen beauftragen.`;
        break;
      case 'tr':
        msg = `Merhaba Gülazat! «${projectName}» projenizi çok beğendim. Şirketim için benzer bir sistem kurmak istiyorum.`;
        break;
      default:
        msg = `Здравствуйте, Гүлазат! Мне понравился ваш проект «${projectName}». Хочу заказать подобную систему для своего бизнеса.`;
        break;
    }
    setPrefilledMessage(msg);
    handleNavigate('#contact');
  };

  return (
    <div className="min-h-screen bg-[#0B1033] text-slate-100 flex flex-col font-sans selection:bg-[#6C3BFF] selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenContact={() => handleOpenContact()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
          onOpenContact={() => handleOpenContact()}
        />

        {/* About Me Section (White background in certificate style) */}
        <AboutMe
          currentLang={currentLang}
          onLanguageSelect={setCurrentLang}
        />

        {/* Services Grid (9 services) */}
        <Services
          currentLang={currentLang}
          onRequestService={handleSelectService}
        />

        {/* Certificate Block (GetForce Bootcamp Vibe Coding) */}
        <CertificateSection currentLang={currentLang} />

        {/* Workflow: 4 Steps */}
        <Workflow currentLang={currentLang} />

        {/* Portfolio Projects Grid */}
        <PortfolioSection
          currentLang={currentLang}
          onOrderProject={handleOrderProject}
        />

        {/* Interactive Cost & Timeline Estimator */}
        <CostCalculator
          currentLang={currentLang}
          onApplyEstimate={handleApplyEstimate}
        />

        {/* Contact Section & Form */}
        <ContactSection
          currentLang={currentLang}
          prefilledService={selectedService}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
