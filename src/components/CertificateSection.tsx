import React, { useState } from 'react';
import { Language, translations } from '@/src/data/translations';
import {
  Award,
  Maximize2,
  Copy,
  Check,
  Calendar,
  Clock,
  BarChart,
  ShieldCheck,
  ExternalLink,
  Code2,
  FileCheck,
  Upload,
} from 'lucide-react';
import { CertificateModal } from './CertificateModal';

interface CertificateSectionProps {
  currentLang: Language;
}

export const CertificateSection: React.FC<CertificateSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userCustomImage, setUserCustomImage] = useState<string | null>(null);

  const certNumber = 'GF-VC-2026-000123';

  const handleCopyNumber = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(certNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserCustomImage(url);
    }
  };

  return (
    <section id="certificate" className="py-24 bg-[#0B1033] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6C3BFF]/15 rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#2F54EB]/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C3BFF]/20 border border-[#6C3BFF]/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.certificate.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            {t.certificate.title}
          </h2>
          <p className="mt-3 text-lg text-slate-300 leading-relaxed">
            {t.certificate.subtitle}
          </p>
        </div>

        {/* Certificate Display Card */}
        <div className="max-w-4xl mx-auto">
          <div
            onClick={() => setModalOpen(true)}
            className="group relative rounded-3xl p-1 bg-gradient-to-tr from-[#2F54EB] via-[#6C3BFF] to-[#00F0FF] shadow-2xl shadow-indigo-950/60 cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/25"
          >
            {/* Inner Certificate Container with white paper styling & dark navy border */}
            <div className="relative rounded-[22px] bg-slate-50 text-slate-900 p-6 sm:p-12 overflow-hidden border border-slate-200">
              {/* High-res user-uploaded certificate image if provided */}
              {userCustomImage ? (
                <div className="relative rounded-xl overflow-hidden shadow-inner">
                  <img
                    src={userCustomImage}
                    alt="Сертификат Vibe Coding"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              ) : (
                /* Crisp Vector & Typography Certificate matching the exact uploaded image */
                <div className="relative border-4 border-double border-indigo-900/40 rounded-xl p-6 sm:p-10 bg-white shadow-inner">
                  {/* Outer Circuit lines in corners */}
                  <div className="absolute top-2 left-2 text-[#2F54EB] opacity-60">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M0 20 L20 20 L20 0" stroke="#2F54EB" strokeWidth="2" />
                      <circle cx="20" cy="20" r="3" fill="#6C3BFF" />
                    </svg>
                  </div>
                  <div className="absolute top-2 right-2 text-[#6C3BFF] opacity-60">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M40 20 L20 20 L20 0" stroke="#6C3BFF" strokeWidth="2" />
                      <circle cx="20" cy="20" r="3" fill="#00F0FF" />
                    </svg>
                  </div>

                  {/* Certificate Top Header */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
                    {/* GetForce Brand */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0B1033] to-[#6C3BFF] flex items-center justify-center text-white font-black text-xl shadow-md">
                        G
                      </div>
                      <div>
                        <div className="font-extrabold text-base tracking-wider text-slate-900 font-display">
                          GETFORCE
                        </div>
                        <div className="text-[11px] font-mono font-bold text-[#6C3BFF] tracking-widest">
                          BOOTCAMP
                        </div>
                        <div className="text-[9px] text-slate-400 tracking-wider">
                          LEARN. BUILD. EARN.
                        </div>
                      </div>
                    </div>

                    {/* Diamond Badge */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-[#2F54EB]" />
                      <span>OFFICIAL CREDENTIAL</span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <div className="text-center my-6">
                    <h3 className="text-2xl sm:text-4xl font-black tracking-wider text-slate-900 font-display mb-2 uppercase">
                      Certificate
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#2F54EB] uppercase mb-4">
                      of Completion
                    </div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                      This certificate is proudly presented to
                    </p>
                    <div className="text-2xl sm:text-4xl font-extrabold text-[#0B1033] tracking-tight font-display mb-4">
                      SATTAROVA GULAZAT
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#2F54EB] to-[#6C3BFF] mx-auto rounded-full mb-4" />

                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      For successfully completing the
                    </p>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-wide font-display mb-2">
                      VIBE CODING COURSE
                    </div>
                    <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      and demonstrating dedication, creativity, and practical skills in building digital projects using modern AI-powered tools.
                    </p>
                  </div>

                  {/* 3 Metric Pills on Certificate */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto my-6 text-center">
                    <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Calendar className="w-4 h-4 mx-auto text-[#2F54EB] mb-1" />
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Date</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800">August 2026</div>
                    </div>
                    <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Clock className="w-4 h-4 mx-auto text-[#6C3BFF] mb-1" />
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Duration</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800">144 hours</div>
                    </div>
                    <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <BarChart className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Level</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800">Intermediate</div>
                    </div>
                  </div>

                  {/* Footer of Certificate: Seal + Instructor + Cert ID */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 pt-6 border-t border-slate-200 text-center sm:text-left">
                    {/* Gold Ribbon Seal */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-900 shadow-md border-2 border-amber-600">
                        <Code2 className="w-6 h-6 text-slate-900 font-bold" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold uppercase text-amber-800 tracking-wider">
                          Verified Badge
                        </div>
                        <div className="text-[10px] text-slate-500">GetForce Bootcamp</div>
                      </div>
                    </div>

                    {/* Instructor Signature */}
                    <div className="text-center">
                      <div className="font-serif italic text-lg text-indigo-900 font-bold -mb-1">
                        Seyitbek Usmanov
                      </div>
                      <div className="w-32 h-0.5 bg-slate-300 mx-auto mb-1" />
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                        Instructor: Seyitbek Usmanov
                      </div>
                    </div>

                    {/* Certificate Number */}
                    <div className="text-center sm:text-right">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                        Certificate No.
                      </div>
                      <div className="text-xs sm:text-sm font-bold font-mono text-slate-900 tracking-wider">
                        {certNumber}
                      </div>
                      <div className="text-[9px] text-emerald-600 font-semibold">
                        Authorized Signature ✓
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-[#0B1033]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[22px] backdrop-blur-xs">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-sm shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-4 h-4 text-[#2F54EB]" />
                  <span>{t.certificate.btnZoom}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exact Required Caption from user prompt */}
          <div className="mt-8 text-center space-y-4">
            <blockquote className="text-sm sm:text-base text-indigo-200 font-medium italic max-w-2xl mx-auto px-4 py-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20">
              {t.certificate.caption}
            </blockquote>

            {/* Quick interactive actions: Copy ID, Fullscreen, Upload custom file */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleCopyNumber}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">{t.certificate.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{t.certificate.btnCopy}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2F54EB] hover:bg-[#3a60f7] text-xs font-semibold text-white shadow-md transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{t.certificate.btnZoom}</span>
              </button>

              {/* Upload file button for user */}
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-dashed border-white/20 text-xs font-medium text-slate-300 hover:text-white cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5 text-slate-400" />
                <span>Загрузить другой файл сертификата</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {modalOpen && (
        <CertificateModal
          certNumber={certNumber}
          userCustomImage={userCustomImage}
          onClose={() => setModalOpen(false)}
          currentLang={currentLang}
        />
      )}
    </section>
  );
};
