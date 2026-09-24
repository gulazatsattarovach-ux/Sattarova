import React from 'react';
import { Language, translations } from '@/src/data/translations';
import { FileText, MessageSquareCode, Code, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

interface WorkflowProps {
  currentLang: Language;
}

export const Workflow: React.FC<WorkflowProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-5 h-5 text-[#2F54EB]" />;
      case 1:
        return <MessageSquareCode className="w-5 h-5 text-[#6C3BFF]" />;
      case 2:
        return <Code className="w-5 h-5 text-[#2F54EB]" />;
      case 3:
        return <Rocket className="w-5 h-5 text-emerald-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#2F54EB]" />;
    }
  };

  return (
    <section id="workflow" className="py-24 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F54EB] mb-2">
            <span className="w-6 h-0.5 bg-[#2F54EB]" />
            <span>{t.nav.workflow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            {t.workflow.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed font-sans">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid with connecting line on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.workflow.steps.map((step, idx) => {
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-slate-200 group-hover:text-indigo-200 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <div className="text-xs uppercase font-mono font-semibold tracking-wider text-[#2F54EB] mb-1">
                    {step.subtitle}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-4 border-t border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="leading-snug">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast-Track AI Note */}
        <div className="mt-12 bg-white rounded-xl p-5 border border-indigo-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-slate-800">
              Среднее время от первого созвона до работающего прототипа: <span className="text-[#2F54EB] font-bold">3–5 рабочих дней</span>
            </span>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-[#6C3BFF] hover:text-[#2F54EB] flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span>Запланировать экспресс-аудит</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
