import { useState } from 'react';
import { COLOR_SWATCHES } from '../../constants/profileSetup';
import SubjectInfoModal from './SubjectInfoModal';

export default function SubjectFilterBar({ subjects = [] }) {
  const [selectedModalSubject, setSelectedModalSubject] = useState(null);

  const getSubjectColorClasses = (colorName) => {
    const swatch = COLOR_SWATCHES.find((s) => s.id === colorName);
    return swatch || COLOR_SWATCHES[0];
  };

  const buttonBase =
    'h-9 min-h-[36px] px-3 sm:px-3.5 rounded-xl border flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-95 whitespace-nowrap';

  return (
    <>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full lg:w-auto">
        {subjects.map((sub) => {
          const swatch = getSubjectColorClasses(sub.color);
          const codeLabel = sub.code || sub.name;
          const fullLabel = `${codeLabel}${sub.sinhala ? ` (${sub.sinhala})` : ''}`;
          return (
            <button
              key={sub.id || sub.code}
              type="button"
              title={fullLabel}
              onClick={() => setSelectedModalSubject(sub)}
              className={`${buttonBase} flex-1 sm:flex-initial min-w-[72px] ${swatch.bg} ${swatch.border} ${swatch.text} hover:brightness-125`}
            >
              <span className={`w-2 h-2 rounded-full ${swatch.dot} shrink-0`} />
              <span>{codeLabel}</span>
            </button>
          );
        })}

        <div className="hidden 2xl:flex items-center gap-2 ml-2 pl-2 border-l border-white/10 font-mono text-[11px] shrink-0">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Unit Papers: 33</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Full Unit: 1</span>
          <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">Full Papers: 2</span>
        </div>
      </div>

      <SubjectInfoModal
        subject={selectedModalSubject}
        onClose={() => setSelectedModalSubject(null)}
      />
    </>
  );
}
