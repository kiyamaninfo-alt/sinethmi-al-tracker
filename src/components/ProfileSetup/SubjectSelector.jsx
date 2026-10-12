import { useState } from 'react';
import SubjectCard from './SubjectCard';
import { getAvailableColor } from '../../utils/subjectColors';

export default function SubjectSelector({ subjects, onUpdateSubjects }) {
  const [newTitle, setNewTitle] = useState('');
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
    <div id="candidate-subjects-grid" className={`rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md transition-opacity duration-300 ${
      subjects.length === 0 ? 'opacity-60 border-dashed' : 'opacity-100'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[18px]">view_in_ar</span>
            Active Subjects Matrix
          </h3>
          <p className="text-xs text-outline">Custom color telemetry &amp; study hour distribution</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
            <span className="material-symbols-outlined text-[15px] text-cyan-400">schedule</span>
            <span>Target: {totalHours}h / week</span>
          </div>
          <div className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
            isCapReached ? 'bg-tertiary-container/20 text-tertiary border-tertiary/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          }`}>
            {subjects.length} / 3 Active Cap
          </div>
        </div>
      </div>

      {subjects.length === 0 ? (
        <div className="p-6 rounded-xl border border-dashed border-outline-variant/30 text-center space-y-1 bg-surface-container/20">
          <p className="text-xs text-cyan-300 font-mono">No subjects selected yet.</p>
          <p className="text-[11px] text-outline">Click a stream button above to choose from 100 catalog subjects, or add below.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {subjects.map((sub) => (
            <SubjectCard key={sub.id} subject={sub} otherUsedColors={subjects.filter((s) => s.id !== sub.id).map((s) => s.color)} onUpdateColor={updateColor} onUpdateHours={updateHours} onRemove={removeSub} />
          ))}
        </div>
      )}

      {!isCapReached ? (
        <form onSubmit={handleAddCustom} className="flex gap-2 pt-1">
          <input type="text" placeholder="Add Custom Subject name..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 bg-surface-container-high border border-outline-variant/40 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:outline-none focus:border-tertiary" />
          <button type="submit" className="px-3 py-1.5 bg-tertiary text-on-tertiary text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer">
            <span className="material-symbols-outlined text-[16px]">add</span> Add Subject
          </button>
        </form>
      ) : (
        <p className="text-[11px] font-mono text-outline text-right">★ Maximum 3 A-Level Subjects Cap Active. Remove an entry to add custom subjects.</p>
      )}
    </div>
  );
}
