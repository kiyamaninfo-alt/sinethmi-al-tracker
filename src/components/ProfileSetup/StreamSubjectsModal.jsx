import { useState } from 'react';
import { SUBJECT_CATEGORIES, MOCK_100_SUBJECTS } from '../../constants/streamSubjects';
import ModalCategoryTabs from './ModalCategoryTabs';
import ModalSubjectItem from './ModalSubjectItem';

export default function StreamSubjectsModal({ streamName, isOpen, onClose, initialSubjects = [], onSaveSubjects }) {
  const [tab, setTab] = useState('core');
  const [search, setSearch] = useState('');
  const [selectedList, setSelectedList] = useState(initialSubjects);

  if (!isOpen) return null;

  const toggleSubject = (s) => {
    const exists = selectedList.some((item) => item.id === s.id);
    if (!exists && selectedList.length >= 3) return;
    const hoursMap = [9, 8, 8];
    const next = exists
      ? selectedList.filter((item) => item.id !== s.id)
      : [...selectedList, { ...s, hours: s.hours || hoursMap[selectedList.length] || 8 }];
    setSelectedList(next);
    if (onSaveSubjects) onSaveSubjects(next);
  };

  const handleClear = () => { setSelectedList([]); if (onSaveSubjects) onSaveSubjects([]); };
  const filtered = MOCK_100_SUBJECTS.filter((s) => s.category === tab &&
    (!search || s.name.toLowerCase().includes(search.toLowerCase()) || s.code.toLowerCase().includes(search.toLowerCase()) || s.sinhala?.includes(search))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-[#050b14] border border-cyan-500/30 p-4 sm:p-5 flex flex-col shadow-2xl space-y-3.5">
        <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400 text-[20px]">menu_book</span>
              {streamName} • Subject Catalog (100 Disciplines)
            </h3>
            <p className="text-[11px] text-slate-300 font-mono">Select candidate subjects across 2 streams (Max 3)</p>
          </div>
          <button type="button" onClick={onClose} className="text-outline hover:text-white p-1 cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <ModalCategoryTabs categories={SUBJECT_CATEGORIES} activeTab={tab} onSelectTab={setTab} />
        <div className="relative">
          <input type="text" placeholder="Filter subjects (e.g. Biology, Chemistry, ICT)..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface-container/60 border border-outline-variant/30 rounded-xl px-3.5 py-2 pl-9 text-xs text-on-surface focus:outline-none focus:border-cyan-400" />
          <span className="material-symbols-outlined text-outline text-[16px] absolute left-3 top-2.5">search</span>
        </div>
        <div className="flex-1 overflow-y-auto pr-1 space-y-2 max-h-72 min-h-48 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filtered.map((s) => (
              <ModalSubjectItem key={s.id} subject={s} isSelected={selectedList.some((item) => item.id === s.id)} onToggle={toggleSubject} />
            ))}
          </div>
        </div>
        <div className="pt-3 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 font-bold">Selected: {selectedList.length} / 3 Active</span>
            {selectedList.length > 0 && (
              <button type="button" onClick={handleClear} className="text-[11px] font-mono text-red-400 hover:text-red-300 underline cursor-pointer">
                Clear Selection
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={onClose} className="px-3.5 py-1.5 text-xs text-outline hover:text-white cursor-pointer">Close</button>
            <button type="button" onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-slate-950 text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer">
              Confirm &amp; Apply ({selectedList.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
