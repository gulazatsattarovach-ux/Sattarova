import React from 'react';
import { Language, translations } from '@/src/data/translations';
import { Sparkles, ArrowRight, Send, CheckCircle2, Cpu, Terminal, Zap } from 'lucide-react';
import portraitImg from '@/src/assets/images/portrait_developer_gulazat_1790248031419.jpg';

interface HeroProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigate, onOpenContact }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0B1033]">
      {/* Background: Dark navy with purple & blue radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#2F54EB]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#6C3BFF]/25 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[400px] bg-[#1a237e]/30 rounded-full blur-[100px]" />
      </div>

      {/* Techno Pattern: Animated SVG Circuit Lines & PCB Microchips */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F54EB" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6C3BFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="circuitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6C3BFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2F54EB" stopOpacity="0.5" />
            </linearGradient>
            <pattern id="microGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#4338CA" fillOpacity="0.3" />
            </pattern>
          </defs>

          {/* Micro dot grid */}
          <rect width="100%" height="100%" fill="url(#microGrid)" />

          {/* Left Circuit Tracks */}
          <g stroke="url(#circuitGrad1)" strokeWidth="1.5" fill="none">
            <path d="M 0 180 L 140 180 L 220 260 L 380 260 L 420 300 L 520 300" className="circuit-line" />
            <path d="M 0 320 L 100 320 L 160 380 L 320 380 L 360 420" />
            <path d="M 80 0 L 80 120 L 140 180" />
            <circle cx="140" cy="180" r="4" fill="#00F0FF" />
            <circle cx="220" cy="260" r="3" fill="#6C3BFF" />
            <circle cx="380" cy="260" r="4" fill="#2F54EB" />
            <circle cx="520" cy="300" r="5" fill="#00F0FF" />
          </g>

          {/* Right Circuit Tracks */}
          <g stroke="url(#circuitGrad2)" strokeWidth="1.5" fill="none">
            <path d="M 1200 120 L 1080 120 L 1020 180 L 880 180 L 820 240 L 720 240" className="circuit-line" />
            <path d="M 1200 340 L 1100 340 L 1040 280 L 920 280 L 860 340" />
            <path d="M 1150 0 L 1150 70 L 1080 120" />
            <circle cx="1080" cy="120" r="4" fill="#6C3BFF" />
            <circle cx="1020" cy="180" r="3" fill="#00F0FF" />
            <circle cx="880" cy="180" r="4" fill="#2F54EB" />
            <circle cx="720" cy="240" r="5" fill="#6C3BFF" />
          </g>

          {/* Geometric Chip Nodes */}
          <rect x="520" y="295" width="10" height="10" rx="2" fill="#2F54EB" />
          <rect x="710" y="235" width="10" height="10" rx="2" fill="#6C3BFF" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Slogan, and CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Vibe Coding / AI Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-sm shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t.hero.badge}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400 font-mono text-[11px]">GetForce Certified</span>
            </div>

            {/* Name & Role */}
            <div className="space-y-2">
              <p className="text-indigo-400 font-medium text-sm sm:text-base tracking-wide uppercase">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-display text-white tracking-tight leading-[1.1]">
                {t.hero.name}
              </h1>
              <div className="inline-block px-3 py-1 rounded-md bg-[#6C3BFF]/20 border border-[#6C3BFF]/30 text-indigo-200 text-base sm:text-lg font-semibold">
                {t.hero.role}
              </div>
            </div>

            {/* Main Slogan from user */}
            <div className="border-l-4 border-[#2F54EB] pl-4 py-1">
              <blockquote className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300 leading-snug">
                {t.hero.slogan}
              </blockquote>
            </div>

            {/* Brief Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('#services')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] hover:from-[#3a60f7] hover:to-[#7e52ff] rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.btnServices}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-indigo-400/50 rounded-xl backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                <span>{t.hero.btnContact}</span>
              </button>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-indigo-900/40">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                  {t.hero.stats.hours}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t.hero.stats.hoursLabel}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400 tracking-tight tabular-nums">
                  {t.hero.stats.languages}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t.hero.stats.languagesLabel}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 tracking-tight">
                  {t.hero.stats.turnaround}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t.hero.stats.turnaroundLabel}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tracking-tight">
                  {t.hero.stats.solutions}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t.hero.stats.solutionsLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Certificate Teaser (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2F54EB] via-[#6C3BFF] to-[#00F0FF] rounded-3xl opacity-40 blur-xl group-hover:opacity-70 transition duration-700 animate-pulse" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#131A4D] to-[#0A0E2B] p-2.5 border border-indigo-500/30 shadow-2xl overflow-hidden">
                {/* Tech circuit corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-400" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#6C3BFF]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-400" />

                {/* Developer Portrait Image */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={portraitImg}
                    alt="Гүлазат Саттарова - Разработчик бизнес-систем и AI-решений"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1033] via-transparent to-transparent opacity-70" />

                  {/* Floating Tech Pill Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#070A22]/90 backdrop-blur-md border border-indigo-500/30 shadow-lg">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                        Gulazat Sattarova
                      </span>
                      <span className="text-[11px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                        Available for hire
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 truncate">
                      Vibe Coding · AI Systems · Web POS · CRM · TMS
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Ribbon: Jump to certificate */}
                <button
                  onClick={() => onNavigate('#certificate')}
                  className="w-full mt-2.5 py-2 px-3 rounded-lg bg-[#2F54EB]/15 hover:bg-[#2F54EB]/25 border border-[#2F54EB]/30 text-indigo-300 hover:text-white text-xs font-medium flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>GetForce Bootcamp 2026</span>
                  </span>
                  <span className="text-[11px] font-mono text-indigo-400 underline underline-offset-2">
                    № GF-VC-2026-000123 →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
