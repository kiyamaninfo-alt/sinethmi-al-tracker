import { useState, useEffect } from 'react';

export default function CustomStreamForm({ isOpen, onOpen, onClose, onApply, hasCustomStream, initialVal = '' }) {
  const [val, setVal] = useState(initialVal);

  useEffect(() => {
    setVal(initialVal);
  }, [initialVal, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim()) {
      onApply(val.trim());
      setVal('');
    }
  };

  if (!isOpen) {
    if (hasCustomStream) return null;
    return (
      <button
        type="button"
        onClick={onOpen}
        className="w-full py-2 border border-dashed border-outline-variant/40 hover:border-secondary hover:text-secondary rounded-lg text-xs font-mono text-outline transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">add</span> + Custom Stream Trigger
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 pt-1">
      <input
        type="text"
        placeholder="e.g. Arts & Technology Fusion..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="flex-1 bg-surface-container-high border border-primary/50 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:outline-none"
        autoFocus
      />
      <button type="submit" className="px-3 py-1.5 bg-primary text-on-primary text-xs font-bold rounded-lg cursor-pointer">
        {initialVal ? 'Save' : 'Apply'}
      </button>
      <button type="button" onClick={onClose} className="px-3 py-1.5 text-xs text-outline hover:text-white cursor-pointer">
        Cancel
      </button>
    </form>
  );
}
