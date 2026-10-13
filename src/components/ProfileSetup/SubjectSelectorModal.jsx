import SubjectCard from './SubjectCard';
import { getAvailableColor } from '../../utils/subjectColors';
import { useState } from 'react';

export default function SubjectSelectorModal({ isOpen, onClose, subjects = [], onUpdateSubjects }) {
  const [newTitle, setNewTitle] = useState('');
  if (!isOpen) return null;

  const isCapReached = subjects.length >= 3;
  const totalHours = subjects.reduce((sum, s) => sum + (Number(s.hours) || 0), 0);
  const updateColor = (id, color) => {
    if (subjects.some((s) => s.id !== id && s.color === color)) return;
    onUpdateSubjects(subjects.map((s) => (s.id === id ? { ...s, color } : s)));
  };
  const updateHours = (id, hours) => onUpdateSubjects(subjects.map((s) => (s.id === id ? { ...s, hours } : s)));
  const removeSub = (id) => onUpdateSubjects(subjects.filter((s) => s.id !== id));
  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || isCapReached) return;
    const color = getAvailableColor(subjects);
    onUpdateSubjects([...subjects, { id: `c-${Date.now()}`, code: `SUB-0${subjects.length + 1}`, name: newTitle.trim(), color, hours: 8 }]);
    setNewTitle('');
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#070e1c] border border-cyan-500/40 shadow-2xl p-4 sm:p-6 space-y-4 overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-tertiary text-[22px]">view_in_ar</span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">Active Subjects Matrix</h3>
              <p className="text-[11px] text-slate-300 font-mono">Custom color telemetry &amp; study hour distribution</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-400/40">
              {totalHours}h / week • {subjects.length}/3 Cap
            </span>
            <button type="button" onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
          {subjects.length === 0 ? (
            <div className="p-8 rounded-xl border border-dashed border-outline-variant/30 text-center space-y-1 bg-surface-container/20">
              <p className="text-xs text-cyan-300 font-mono">No subjects selected yet.</p>
              <p className="text-[11px] text-outline">Add subjects using the catalog or the custom input below.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {subjects.map((sub) => (
                <SubjectCard key={sub.id} subject={sub} otherUsedColors={subjects.filter((s) => s.id !== sub.id).map((s) => s.color)} onUpdateColor={updateColor} onUpdateHours={updateHours} onRemove={removeSub} />
              ))}
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          {!isCapReached ? (
            <form onSubmit={handleAddCustom} className="flex gap-2 w-full sm:flex-1">
              <input type="text" placeholder="Add custom subject name..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                className="flex-1 bg-surface-container-high border border-outline-variant/40 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:outline-none focus:border-tertiary" />
              <button type="submit" className="px-3 py-1.5 bg-tertiary text-on-tertiary text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">add</span> Add
              </button>
            </form>
          ) : <p className="text-[11px] font-mono text-cyan-300/80">★ 3 A-Level Subjects Cap Active.</p>}
          <button type="button" onClick={onClose} className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-slate-950 text-xs font-bold shadow-md hover:brightness-110 active:scale-95 cursor-pointer">
            Done &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
