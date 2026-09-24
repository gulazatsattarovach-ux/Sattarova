import React from 'react';
import { Language, translations } from '@/src/data/translations';
import { Globe2, Sparkles, CheckCircle2, ShieldCheck, Zap, Workflow, Layers } from 'lucide-react';

interface AboutMeProps {
  currentLang: Language;
  onLanguageSelect: (lang: Language) => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ currentLang, onLanguageSelect }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-20 bg-slate-100 text-slate-900 relative">
      {/* Decorative top transition curve */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F54EB] mb-2">
            <span className="w-6 h-0.5 bg-[#2F54EB]" />
            <span>{t.nav.about}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            {t.about.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed font-sans">
            {t.about.subtitle}
          </p>
        </div>

        {/* 3-4 Sentences Overview - High-contrast White Card in Certificate Style */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/80 mb-12 relative overflow-hidden">
          {/* Subtle tech hairline accent on top border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F54EB] via-[#6C3BFF] to-[#00F0FF]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p className="text-slate-800 font-medium">
                {t.about.p3}
              </p>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-[#0B1033] to-[#131A4D] rounded-xl p-6 text-white shadow-lg border border-indigo-900/50">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-[#00F0FF]" />
                <span>Vibe Coding Approach</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                {currentLang === 'ky'
                  ? 'Ыкчам жана так архитектура'
                  : currentLang === 'en'
                  ? 'High-Velocity Architecture'
                  : currentLang === 'de'
                  ? 'Zuverlässige Systemarchitektur'
                  : currentLang === 'tr'
                  ? 'Çevik ve Güçlü Mimari'
                  : 'Архитектура без проволочек'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {currentLang === 'ky'
                  ? 'Иштеп жаткан MVP бир нече күндө даяр болот. Менеджерлерсиз жана ортомчуларсыз түз байланыш.'
                  : currentLang === 'en'
                  ? 'Working MVPs shipped in days with modern AI tooling. Direct collaboration with the developer without middle layers.'
                  : currentLang === 'de'
                  ? 'Einsatzbereite MVPs in wenigen Tagen. Direkte Zusammenarbeit mit der Entwicklerin ohne bürokratische Hürden.'
                  : currentLang === 'tr'
                  ? 'Günler içinde çalışan sistemler. Aracı olmadan doğrudan geliştirici ile hızlı ve şeffaf süreç.'
                  : 'Сборка работающих MVP за дни. Прямой диалог с разработчиком без передаточных звеньев и менеджеров.'}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-indigo-300">
                <span>
                  {currentLang === 'ky'
                    ? 'Ишке киргизүү'
                    : currentLang === 'en'
                    ? 'Delivery Speed'
                    : currentLang === 'de'
                    ? 'Startgeschwindigkeit'
                    : currentLang === 'tr'
                    ? 'Teslimat Hızı'
                    : 'Скорость запуска'}
                </span>
                <span className="text-emerald-400 font-bold">
                  {currentLang === 'ky'
                    ? 'x3–x5 тезирээк'
                    : currentLang === 'de'
                    ? '3x–5x schneller'
                    : currentLang === 'tr'
                    ? '3-5 kat hızlı'
                    : 'x3–x5 faster'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated 5 Languages Block */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
                <Globe2 className="w-6 h-6 text-[#2F54EB]" />
                <span>{t.about.languagesTitle}</span>
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t.about.languagesSubtitle}
              </p>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              {currentLang === 'ky'
                ? 'Интерфейсти алмаштыруу үчүн тилди басыңыз'
                : currentLang === 'en'
                ? 'Click any language to switch the entire site interface'
                : currentLang === 'de'
                ? 'Klicken Sie auf eine Sprache, um die Website umzuschalten'
                : currentLang === 'tr'
                ? 'Arayüzü değiştirmek için dile tıklayın'
                : 'Нажмите на язык для смены интерфейса'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.about.langList.map((lang) => {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => onLanguageSelect(lang.code as Language)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-b from-[#0B1033] to-[#131A4D] text-white border-[#6C3BFF] shadow-lg shadow-indigo-900/20 scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{lang.flag}</span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded font-semibold ${
                        isActive
                          ? 'bg-[#6C3BFF] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                  <div
                    className={`font-bold text-sm mb-0.5 ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {lang.name}
                  </div>
                  <div
                    className={`text-xs mb-2 font-medium ${
                      isActive ? 'text-indigo-300' : 'text-[#2F54EB]'
                    }`}
                  >
                    {lang.nativeName}
                  </div>
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 ${
                      isActive ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {lang.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Core Principles / Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.advantages.map((adv, idx) => {
            const icons = [
              <Zap key="1" className="w-5 h-5 text-[#2F54EB]" />,
              <Layers key="2" className="w-5 h-5 text-[#6C3BFF]" />,
              <Workflow key="3" className="w-5 h-5 text-[#2F54EB]" />,
              <ShieldCheck key="4" className="w-5 h-5 text-[#10B981]" />,
            ];

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 border border-indigo-100">
                  {icons[idx]}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5 font-display">
                  {adv.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
