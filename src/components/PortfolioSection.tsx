import React, { useState } from 'react';
import { Language, translations } from '@/src/data/translations';
import { portfolioProjects, ProjectItem } from '@/src/data/portfolioData';
import { ArrowUpRight, Layers, Sparkles, Eye, Check } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  currentLang: Language;
  onOrderProject: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentLang,
  onOrderProject,
}) => {
  const t = translations[currentLang];
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: t.portfolio.filterAll },
    { id: 'crm', label: t.portfolio.filterCrm },
    { id: 'logistics', label: t.portfolio.filterLogistics },
    { id: 'retail', label: t.portfolio.filterRetail },
    { id: 'edu', label: t.portfolio.filterEdu },
  ];

  const filteredProjects =
    filter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  const getProjectTitle = (p: ProjectItem) => {
    switch (currentLang) {
      case 'en': return p.titleEn;
      case 'ky': return p.titleKy;
      case 'tr': return p.titleTr;
      case 'de': return p.titleDe;
      default: return p.titleRu;
    }
  };

  const getProjectDesc = (p: ProjectItem) => {
    switch (currentLang) {
      case 'en': return p.descEn;
      case 'ky': return p.descKy;
      case 'tr': return p.descTr;
      case 'de': return p.descDe;
      default: return p.descRu;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F54EB] mb-2">
              <span className="w-6 h-0.5 bg-[#2F54EB]" />
              <span>{t.nav.portfolio}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
              {t.portfolio.title}
            </h2>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Interactive Filter Controls (Functional Button Elements) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl overflow-x-auto border border-slate-200">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Project Screenshot Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={getProjectTitle(project)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Quick Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B1033]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-indigo-300 font-semibold uppercase">
                      {project.category}
                    </div>

                    {/* Hover Eye indicator */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 text-slate-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-semibold">
                      <Eye className="w-3.5 h-3.5 text-[#2F54EB]" />
                      <span>{t.portfolio.viewDetails}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2F54EB] transition-colors mb-2 font-display flex items-center justify-between">
                      <span>{getProjectTitle(project)}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2F54EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {getProjectDesc(project)}
                    </p>

                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-200/80 text-center">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-base font-bold font-mono text-[#2F54EB] tabular-nums">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">
                            {currentLang === 'en' ? metric.labelEn : metric.labelRu}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with tech tags (Zero-Pill: unboxed text with separators) */}
                <div className="px-6 pb-5 pt-1 flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono text-slate-700">{project.techStack[0]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-700">{project.techStack[1]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-600 font-semibold">{t.portfolio.statusReady}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prototype note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Каждая система адаптируется под специфику конкретного бизнеса: добавляются уникальные поля, настраивается интеграция с вашим складом, 1С, банками или мессенджерами.
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOrderSimilar={(name) => onOrderProject(name)}
          currentLang={currentLang}
        />
      )}
    </section>
  );
};
