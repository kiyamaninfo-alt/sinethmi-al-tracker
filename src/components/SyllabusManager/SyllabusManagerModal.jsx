import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSyllabusSearch } from '../../hooks/useSyllabusSearch';
import SyllabusModalHeader from './SyllabusModalHeader';
import SyllabusSubjectDropdown from './SyllabusSubjectDropdown';
import SyllabusSearchField from './SyllabusSearchField';
import SyllabusResultsList from './SyllabusResultsList';

export default function SyllabusManagerModal({ isOpen, onClose, subjects = [] }) {
  const {
    selectedSubjectId, setSelectedSubjectId,
    searchQuery, setSearchQuery, currentSubject,
    filteredUnits, totalUnitsCount, totalSubUnitsCount
  } = useSyllabusSearch(subjects);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] w-screen h-screen bg-[#070b18]/95 backdrop-blur-xl flex flex-col p-3 sm:p-6 overflow-hidden animate-in fade-in duration-150"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col space-y-4">
        <SyllabusModalHeader
          onClose={onClose}
          totalUnits={totalUnitsCount}
          totalSubUnits={totalSubUnitsCount}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
          <SyllabusSubjectDropdown
            subjects={subjects}
            selectedSubjectId={selectedSubjectId}
            onSelectSubject={setSelectedSubjectId}
          />
          <SyllabusSearchField
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />
        </div>

        <SyllabusResultsList
          units={filteredUnits}
          searchQuery={searchQuery}
          currentSubject={currentSubject}
          selectedSubjectId={selectedSubjectId}
        />

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono shrink-0">
          <span>
            Subject: <strong className="text-cyan-300">{currentSubject?.code || currentSubject?.name || 'All Subjects (Global)'}</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans text-xs font-bold shadow-md shadow-cyan-400/20 cursor-pointer transition"
          >
            Close Fullscreen
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
