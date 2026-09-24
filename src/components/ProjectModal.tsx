import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '@/src/data/portfolioData';
import { Language, translations } from '@/src/data/translations';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
  onOrderSimilar: (projectName: string) => void;
  currentLang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOrderSimilar,
  currentLang,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const getTitle = () => {
    switch (currentLang) {
      case 'en': return project.titleEn;
      case 'ky': return project.titleKy;
      case 'tr': return project.titleTr;
      case 'de': return project.titleDe;
      default: return project.titleRu;
    }
  };

  const getFullDesc = () => {
    return currentLang === 'en' || currentLang === 'de'
      ? project.fullDescEn
      : project.fullDescRu;
  };

  const getFeatures = () => {
    return currentLang === 'en' || currentLang === 'de'
      ? project.featuresEn
      : project.featuresRu;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070A22] border-b border-indigo-900/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              {project.category.toUpperCase()} · {t.portfolio.statusReady}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Screenshot with aspect ratio */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-white/10 shadow-lg">
            <img
              src={project.image}
              alt={getTitle()}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title and Full Description */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              {getTitle()}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {getFullDesc()}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black font-mono text-indigo-400 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {currentLang === 'en' ? metric.labelEn : metric.labelRu}
                </div>
              </div>
            ))}
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2F54EB]" />
              <span>Ключевые возможности системы</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {getFeatures().map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6C3BFF]" />
              <span>Технологический стек</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-500/30 text-xs font-mono text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070A22] border-t border-indigo-900/40">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Закрыть
          </button>

          <button
            onClick={() => {
              onClose();
              onOrderSimilar(getTitle());
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] hover:from-[#3a60f7] hover:to-[#7b4dff] rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            <span>Заказать подобную систему</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
