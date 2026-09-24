import React, { useState, useEffect } from 'react';
import { Language, translations } from '@/src/data/translations';
import { Menu, X, Globe, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: (serviceName?: string) => void;
}

const languagesList: { code: Language; label: string; flag: string }[] = [
  { code: 'ky', label: 'Кыргызча', flag: '🇰🇬' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#certificate', label: t.nav.certificate },
    { href: '#workflow', label: t.nav.workflow },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeLangObj = languagesList.find((l) => l.code === currentLang) || languagesList[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1033]/90 backdrop-blur-md border-b border-indigo-900/40 shadow-lg shadow-black/20 py-3'
          : 'bg-[#0B1033]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand Zone */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-lg sm:text-xl transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2F54EB] to-[#6C3BFF] flex items-center justify-center text-white font-mono text-sm font-semibold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              GS
            </div>
            <span className="font-display tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              Gulazat Sattarova
            </span>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white hover:underline decoration-indigo-400 underline-offset-8 transition-all cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions (Language Selector + Contact CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick 5-Language Segmented Switcher in exact priority order */}
            <div className="flex items-center p-0.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {languagesList.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    title={lang.label}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-xs">{lang.flag}</span>
                    <span className="uppercase font-mono text-[11px]">{lang.code}</span>
                  </button>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenContact()}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] hover:from-[#3a60f7] hover:to-[#7b4dff] rounded-lg shadow-md shadow-indigo-600/30 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              <span>{t.nav.cta}</span>
            </button>
          </div>

          {/* Mobile hamburger & mobile lang quick toggler */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Lang toggle for mobile */}
            <button
              onClick={() => {
                const nextIndex =
                  (languagesList.findIndex((l) => l.code === currentLang) + 1) %
                  languagesList.length;
                onLanguageChange(languagesList[nextIndex].code);
              }}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
              title="Switch language"
            >
              <span>{activeLangObj.flag}</span>
              <span className="uppercase font-mono text-[10px]">{activeLangObj.code}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A22]/95 border-b border-indigo-900/50 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Язык:</span>
              <div className="flex flex-wrap gap-1.5">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${
                      currentLang === lang.code
                        ? 'bg-[#6C3BFF] text-white'
                        : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] rounded-lg shadow-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
