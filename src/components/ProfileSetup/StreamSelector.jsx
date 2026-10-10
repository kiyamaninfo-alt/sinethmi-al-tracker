import { useState } from 'react';
import { STANDARD_STREAMS } from '../../constants/profileSetup';
import StreamButton from './StreamButton';
import CustomStreamForm from './CustomStreamForm';
import StreamSubjectsModal from './StreamSubjectsModal';
import StreamActionBar from './StreamActionBar';

export default function StreamSelector({ selectedStream, onSelectStream, subjects, onUpdateSubjects, onUpdate, isSaved }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStream, setModalStream] = useState(selectedStream);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [customStream, setCustomStream] = useState(() => {
    const isStd = STANDARD_STREAMS.some((s) => s.name === selectedStream);
    return !isStd && selectedStream ? { id: 'c-act', name: selectedStream, icon: 'auto_awesome', isCustom: true } : null;
  });

  const handleCardClick = (name) => {
    onSelectStream(name); setModalStream(name);
    if (onUpdateSubjects) onUpdateSubjects([]);
    setIsModalOpen(true);
  };
  const handleApplyCustom = (name) => {
    setCustomStream({ id: customStream?.id || `c-${Date.now()}`, name, icon: 'auto_awesome', isCustom: true });
    if (selectedStream === customStream?.name || !selectedStream) onSelectStream(name);
    setIsCustomOpen(false);
  };
  const handleDeleteCustom = () => {
    if (selectedStream === customStream?.name) { onSelectStream(STANDARD_STREAMS[0].name); if (onUpdateSubjects) onUpdateSubjects([]); }
    setCustomStream(null);
  };

  const baseStreams = customStream ? [customStream, ...STANDARD_STREAMS] : STANDARD_STREAMS;
  const isSelectedWithSubjects = Boolean(selectedStream && subjects && subjects.length > 0 && !isEditing);
  const displayStreams = isSelectedWithSubjects ? baseStreams.filter((s) => s.name === selectedStream) : baseStreams;
  const handleToggleEdit = () => isEditing ? setIsEditing(false) : (setIsEditing(true), setModalStream(selectedStream));

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">account_tree</span>
            Select Examination Stream
          </h3>
          <p className="text-xs text-outline">Click stream to set track &amp; subjects. Custom tracks appear first.</p>
        </div>
        <div className="flex items-center gap-2">
          {isEditing && <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">Editing Active</span>}
          <span className="text-xs px-2.5 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-mono">Active: {selectedStream}</span>
        </div>
      </div>

      <div className={isSelectedWithSubjects ? "flex justify-center max-w-sm mx-auto w-full" : "grid grid-cols-2 sm:grid-cols-3 gap-3 items-stretch"}>
        {displayStreams.map((st) => (
          <StreamButton key={st.id} stream={st} isSelected={selectedStream === st.name} isDimmed={false}
            isEditing={isEditing} subjects={selectedStream === st.name ? subjects : []} onClick={() => handleCardClick(st.name)}
            onDeleteCustom={handleDeleteCustom} onEditCustom={() => setIsCustomOpen(true)} />
        ))}
      </div>

      <CustomStreamForm isOpen={isCustomOpen} onOpen={() => setIsCustomOpen(true)} onClose={() => setIsCustomOpen(false)}
        onApply={handleApplyCustom} hasCustomStream={Boolean(customStream)} initialVal={customStream?.name || ''} />

      <StreamActionBar isEditing={isEditing} onToggleEdit={handleToggleEdit} onUpdate={() => { setIsEditing(false); onUpdate(); }} isSaved={isSaved} />

      {isModalOpen && (
        <StreamSubjectsModal streamName={modalStream} isOpen={isModalOpen} initialSubjects={subjects} onClose={() => setIsModalOpen(false)} onSaveSubjects={onUpdateSubjects} />
      )}
    </div>
  );
}
