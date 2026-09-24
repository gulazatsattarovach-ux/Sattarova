import React, { useState } from 'react';
import { Language, translations } from '@/src/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Share2,
  Loader2,
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  prefilledService?: string;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  prefilledService,
  prefilledMessage,
}) => {
  const t = translations[currentLang];

  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [service, setService] = useState(prefilledService || '');
  const [message, setMessage] = useState(prefilledMessage || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if prefilled values change
  React.useEffect(() => {
    if (prefilledService) setService(prefilledService);
  }, [prefilledService]);

  React.useEffect(() => {
    if (prefilledMessage) setMessage(prefilledMessage);
  }, [prefilledMessage]);

  const emailAddress = 'gulazat176@gmail.com';
  const telegramHandle = 'gulazat_dev';
  const telegramUrl = 'https://t.me/gulazat_dev';
  const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent('Здравствуйте, Гүлазат! Хочу обсудить разработку цифровой системы для бизнеса.');
  const instagramUrl = 'https://instagram.com/';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo) return;

    setIsSubmitting(true);
    // Simulate swift server processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContactInfo('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1033] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#2F54EB]/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#6C3BFF]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6C3BFF] mb-2">
            <span className="w-6 h-0.5 bg-[#6C3BFF]" />
            <span>{t.nav.contact}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-lg text-slate-300 leading-relaxed font-sans">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and social buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#101642] rounded-2xl p-6 sm:p-8 border border-indigo-900/50 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display mb-1.5">
                  {t.contact.directTitle}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.contact.directSubtitle}
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-200 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-md">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">WhatsApp</div>
                      <div className="text-[11px] text-emerald-400">Быстрый ответ в чате</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Telegram */}
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-sky-950/40 hover:bg-sky-900/50 border border-sky-500/30 text-sky-200 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow-md">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Telegram</div>
                      <div className="text-[11px] text-sky-400">@{telegramHandle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-pink-950/30 hover:bg-pink-900/40 border border-pink-500/30 text-pink-200 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Instagram</div>
                      <div className="text-[11px] text-pink-300">Кейсы и разработка</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Email Direct */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2F54EB] flex items-center justify-center text-white shadow-md">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-300">Email</div>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-xs font-mono font-bold text-white hover:underline"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Working Hours note */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>На связи: Пн–Сб, с 09:00 до 20:00 (UTC+6)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form with Framer Motion (7 cols) */}
          <div className="lg:col-span-7 bg-[#101642] rounded-2xl p-6 sm:p-10 border border-indigo-900/50 shadow-xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center py-8 sm:py-10 space-y-5"
                >
                  {/* Subtle Expanding Ripple & Animated Checkmark */}
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    {/* Outer glowing ripple 1 */}
                    <motion.span
                      className="absolute inset-0 rounded-full bg-emerald-500/20"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ scale: [0.8, 1.4, 1.7], opacity: [0.7, 0.25, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                    />
                    {/* Outer glowing ripple 2 */}
                    <motion.span
                      className="absolute inset-0 rounded-full bg-emerald-500/10"
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: [0.8, 1.3, 1.5], opacity: [0.5, 0.2, 0] }}
                      transition={{ duration: 1.8, delay: 0.35, repeat: Infinity, ease: 'easeOut' }}
                    />

                    {/* Central Icon Container */}
                    <motion.div
                      className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30"
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.08 }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M20 6L9 17L4 12"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.45, delay: 0.22, ease: 'easeOut' }}
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22, duration: 0.35 }}
                    className="text-2xl font-bold text-white font-display"
                  >
                    {t.contact.successTitle}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.35 }}
                    className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed"
                  >
                    {t.contact.successMessage}
                  </motion.p>

                  {/* Submitted Inquiry Summary Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.38, duration: 0.35 }}
                    className="max-w-md mx-auto p-4 rounded-xl bg-[#070A22]/90 border border-emerald-500/25 text-left space-y-1.5 shadow-inner"
                  >
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="font-mono text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {currentLang === 'ky' ? 'Билдирме кабыл алынды' : 'Заявка принята в обработку'}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {currentLang === 'ky' ? 'Тез жооп' : 'Быстрый ответ'}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white truncate">
                      {name} <span className="text-slate-400 font-normal">({contactInfo})</span>
                    </div>
                    {service && (
                      <div className="text-xs text-indigo-300 truncate font-mono">
                        {service}
                      </div>
                    )}
                  </motion.div>

                  {/* Action button to send another message */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.35 }}
                    className="pt-2"
                  >
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.contact.nameLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#070A22] border border-indigo-900/60 focus:border-[#6C3BFF] focus:outline-none focus:ring-1 focus:ring-[#6C3BFF] text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.contact.contactLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder={t.contact.contactPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#070A22] border border-indigo-900/60 focus:border-[#6C3BFF] focus:outline-none focus:ring-1 focus:ring-[#6C3BFF] text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#070A22] border border-indigo-900/60 focus:border-[#6C3BFF] focus:outline-none focus:ring-1 focus:ring-[#6C3BFF] text-sm text-white transition-colors"
                    >
                      <option value="">{t.contact.serviceDefault}</option>
                      {t.services.items.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title} ({item.timeline})
                        </option>
                      ))}
                      <option value="Комплексная система / Несколько модулей">
                        Комплексная система / Несколько модулей
                      </option>
                      <option value="Другая задача">Другая задача / Консультация</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#070A22] border border-indigo-900/60 focus:border-[#6C3BFF] focus:outline-none focus:ring-1 focus:ring-[#6C3BFF] text-sm text-white placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] hover:from-[#3a60f7] hover:to-[#7b4dff] shadow-lg shadow-indigo-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>{t.contact.submitting}</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.submitBtn}</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
