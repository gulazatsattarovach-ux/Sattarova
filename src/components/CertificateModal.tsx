import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, Copy, Check, Printer } from 'lucide-react';
import { Language, translations } from '@/src/data/translations';

interface CertificateModalProps {
  certNumber: string;
  userCustomImage: string | null;
  onClose: () => void;
  currentLang: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certNumber,
  userCustomImage,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = React.useState(false);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(certNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070A22] border-b border-indigo-900/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold text-white font-display">
              {t.certificate.verifiedStatus}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs font-mono text-indigo-300">
              {certNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy ID"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Скопировано' : 'Копировать ID'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Печать</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Certificate Preview */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 flex items-center justify-center bg-slate-950">
          {userCustomImage ? (
            <img
              src={userCustomImage}
              alt="Сертификат"
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />
          ) : (
            <div className="w-full bg-white text-slate-900 rounded-xl p-8 sm:p-12 shadow-2xl border-4 border-indigo-900/30 relative">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h4 className="text-xl font-black text-slate-900 font-display">GETFORCE BOOTCAMP</h4>
                  <p className="text-xs font-mono text-[#6C3BFF] font-bold">VIBE CODING ACCELERATION</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded font-semibold">
                    ORIGINAL CERTIFICATE
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="text-center my-6 space-y-3">
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-display uppercase">
                  Certificate of Completion
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  This is proudly presented to
                </p>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1033] font-display">
                  SATTAROVA GULAZAT
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest pt-2">
                  For completing 144 hours of practical training in
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-[#2F54EB] font-display">
                  VIBE CODING & MODERN AI-POWERED DEVELOPMENT
                </div>
                <p className="max-w-xl mx-auto text-sm text-slate-600 italic">
                  «Demonstrating dedication, creativity, and practical skills in building digital projects using modern AI-powered tools.»
                </p>
              </div>

              {/* Data table */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto my-6 text-center border-t border-b border-slate-200 py-3">
                <div>
                  <div className="text-xs text-slate-400 font-mono">DATE</div>
                  <div className="font-bold text-slate-800 text-sm">August 2026</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">HOURS</div>
                  <div className="font-bold text-slate-800 text-sm">144 Hours</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LEVEL</div>
                  <div className="font-bold text-slate-800 text-sm">Intermediate</div>
                </div>
              </div>

              {/* Signatures */}
              <div className="flex justify-between items-center pt-4">
                <div>
                  <div className="font-serif italic text-base text-slate-800">Seyitbek Usmanov</div>
                  <div className="text-[10px] text-slate-400 font-mono">COURSE INSTRUCTOR</div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold text-slate-900 text-sm">{certNumber}</div>
                  <div className="text-[10px] text-emerald-600 font-mono">AUTHENTICITY VERIFIED</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
