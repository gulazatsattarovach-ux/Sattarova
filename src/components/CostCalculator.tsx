import React, { useState } from 'react';
import { Language, translations } from '@/src/data/translations';
import { Calculator, Check, ArrowRight, Zap, Clock, DollarSign } from 'lucide-react';

interface CostCalculatorProps {
  currentLang: Language;
  onApplyEstimate: (modulesSummary: string) => void;
}

interface ModuleOption {
  id: string;
  nameRu: string;
  nameEn: string;
  baseDays: number;
  baseCost: number;
}

const modulesList: ModuleOption[] = [
  { id: 'website', nameRu: 'Сайт компании (Landing/Корпоративный)', nameEn: 'Corporate Website / Landing', baseDays: 3, baseCost: 350 },
  { id: 'crm', nameRu: 'CRM-система (Воронка + Клиенты)', nameEn: 'CRM System (Pipeline + Deals)', baseDays: 6, baseCost: 650 },
  { id: 'accounting', nameRu: 'Бухгалтерия & Финансовый учет', nameEn: 'Finance & Accounting Ledger', baseDays: 7, baseCost: 750 },
  { id: 'tms', nameRu: 'TMS (Управление рейсами и транспортом)', nameEn: 'TMS Fleet & Logistics Management', baseDays: 8, baseCost: 850 },
  { id: 'pos', nameRu: 'Веб-касса / POS (Чеки + Сканер)', nameEn: 'Web POS & Fast Cashier Terminal', baseDays: 5, baseCost: 550 },
  { id: 'warehouse', nameRu: 'Склад & Инвентаризация', nameEn: 'Warehouse & Inventory Control', baseDays: 6, baseCost: 600 },
  { id: 'booking', nameRu: 'Система онлайн-записи клиентов', nameEn: 'Online Booking & Appointment Calendar', baseDays: 4, baseCost: 450 },
  { id: 'lms', nameRu: 'Портал онлайн-школы / LMS', nameEn: 'Online School Portal & LMS', baseDays: 8, baseCost: 800 },
  { id: 'ai-bot', nameRu: 'Умный AI-чат-бот (Telegram/WhatsApp)', nameEn: 'Smart AI Chatbot (TG/WhatsApp)', baseDays: 3, baseCost: 400 },
];

export const CostCalculator: React.FC<CostCalculatorProps> = ({
  currentLang,
  onApplyEstimate,
}) => {
  const t = translations[currentLang];
  const [selectedIds, setSelectedIds] = useState<string[]>(['crm', 'ai-bot']);
  const [isExpress, setIsExpress] = useState(false);

  const toggleModule = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((m) => m !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedModules = modulesList.filter((m) => selectedIds.includes(m.id));

  // Calculation: base time and cost with volume synergy discount
  const rawDays = selectedModules.reduce((acc, cur) => acc + cur.baseDays, 0);
  const synergyMultiplier = selectedModules.length > 1 ? 0.75 : 1.0;
  const calculatedDays = Math.max(3, Math.round(rawDays * synergyMultiplier * (isExpress ? 0.7 : 1.0)));

  const rawCost = selectedModules.reduce((acc, cur) => acc + cur.baseCost, 0);
  const costDiscount = selectedModules.length > 1 ? 0.88 : 1.0;
  const calculatedCostMin = Math.round(rawCost * costDiscount * (isExpress ? 1.2 : 1.0));
  const calculatedCostMax = Math.round(calculatedCostMin * 1.35);

  const handleOrder = () => {
    const names = selectedModules
      .map((m) => (currentLang === 'en' ? m.nameEn : m.nameRu))
      .join(', ');
    const summary = `Выбранные модули: ${names}. Темп: ${isExpress ? 'Экспресс' : 'Стандарт'}. Оценка: ${calculatedDays} дн., $${calculatedCostMin}–$${calculatedCostMax}.`;
    onApplyEstimate(summary);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6C3BFF] mb-2">
            <Calculator className="w-4 h-4 text-[#6C3BFF]" />
            <span>{t.calculator.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Рассчитайте сроки и бюджет системы
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Module selection toggles (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="text-sm font-bold text-slate-900 mb-2">
              {t.calculator.selectLabel}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modulesList.map((mod) => {
                const isChecked = selectedIds.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-indigo-50/70 border-[#2F54EB] text-slate-900 shadow-xs'
                        : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-[#2F54EB] text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-snug">
                        {currentLang === 'en' ? mod.nameEn : mod.nameRu}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                        от {mod.baseDays} дней
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Speed toggle */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-700">
                {t.calculator.speedLabel}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpress(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    !isExpress
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.calculator.standardSpeed}
                </button>
                <button
                  onClick={() => setIsExpress(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    isExpress
                      ? 'bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>{t.calculator.expressSpeed}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Real-time estimate card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0B1033] to-[#131A4D] text-white rounded-2xl p-6 sm:p-8 border border-indigo-900/50 shadow-xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold mb-1">
                Предварительная смета
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Выбрано модулей: {selectedModules.length}
              </h3>
            </div>

            {/* Delivery time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{t.calculator.estimatedTime}</span>
              </div>
              <div className="text-2xl font-black font-mono text-cyan-400 tabular-nums">
                {calculatedDays} {t.calculator.days}
              </div>
            </div>

            {/* Budget estimate */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>{t.calculator.estimatedCost}</span>
              </div>
              <div className="text-2xl font-black font-mono text-emerald-400 tabular-nums">
                ${calculatedCostMin} – ${calculatedCostMax}
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/10">
              * Точная стоимость зависит от количества ролей, уникальности дизайна и интеграций (1С, Telegram, эквайринг).
            </p>

            {/* Order with calculation button */}
            <button
              onClick={handleOrder}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-white bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] hover:from-[#3a60f7] hover:to-[#7b4dff] rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span>{t.calculator.orderBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
