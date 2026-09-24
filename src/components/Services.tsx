import React from 'react';
import { Language, translations } from '@/src/data/translations';
import {
  Globe,
  Users2,
  Receipt,
  Truck,
  CreditCard,
  Boxes,
  CalendarCheck,
  GraduationCap,
  Bot,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServicesProps {
  currentLang: Language;
  onRequestService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, onRequestService }) => {
  const t = translations[currentLang];

  const getServiceIcon = (id: string) => {
    const props = { className: 'w-6 h-6 text-white' };
    switch (id) {
      case 'website':
        return <Globe {...props} />;
      case 'crm':
        return <Users2 {...props} />;
      case 'accounting':
        return <Receipt {...props} />;
      case 'tms':
        return <Truck {...props} />;
      case 'pos':
        return <CreditCard {...props} />;
      case 'warehouse':
        return <Boxes {...props} />;
      case 'booking':
        return <CalendarCheck {...props} />;
      case 'lms':
        return <GraduationCap {...props} />;
      case 'ai-bot':
        return <Bot {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6C3BFF] mb-2">
              <span className="w-6 h-0.5 bg-[#6C3BFF]" />
              <span>{t.nav.services}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
              {t.services.title}
            </h2>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="text-sm text-slate-500 font-mono">
            9 ключевых бизнес-решений · Быстрый запуск
          </div>
        </div>

        {/* Services Grid (3x3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.items.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-300 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                <div>
                  {/* Top card bar: Icon + Timeline */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0B1033] to-[#2F54EB] flex items-center justify-center shadow-md shadow-indigo-900/20 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-medium">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2F54EB] transition-colors mb-2.5 font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Tags (Zero-Pill discipline compliant: unboxed text with subtle dot separators) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 pb-6 mb-4 border-b border-slate-200/80">
                    {service.tags.map((tag, tagIdx) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-600 font-medium">{tag}</span>
                        {tagIdx < service.tags.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card CTA button */}
                <button
                  onClick={() => onRequestService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 group-hover:text-white bg-white group-hover:bg-gradient-to-r group-hover:from-[#2F54EB] group-hover:to-[#6C3BFF] border border-slate-300 group-hover:border-transparent rounded-xl shadow-xs transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <span>{t.services.requestBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
