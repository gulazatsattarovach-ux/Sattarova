import React from 'react';
import { Language, translations } from '@/src/data/translations';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A22] text-slate-400 text-xs border-t border-indigo-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Slogan */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-white font-bold text-base font-display">
              Гүлазат Саттарова (Gulazat Sattarova)
            </div>
            <p className="text-slate-400 text-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              {t.nav.about}
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              {t.nav.services}
            </a>
            <a href="#certificate" className="hover:text-white transition-colors">
              {t.nav.certificate}
            </a>
            <a href="#workflow" className="hover:text-white transition-colors">
              {t.nav.workflow}
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              {t.nav.portfolio}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer flex items-center gap-2"
            title="Наверх"
          >
            <span className="text-[11px] font-medium">Вверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Gulazat Sattarova. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
