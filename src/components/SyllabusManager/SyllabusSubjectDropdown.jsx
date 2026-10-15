export default function SyllabusSubjectDropdown({ subjects = [], selectedSubjectId, onSelectSubject }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px] text-cyan-400">subject</span>
        <span>Select Subject</span>
      </label>
      <div className="relative">
        <select
          value={selectedSubjectId}
          onChange={(e) => onSelectSubject(e.target.value)}
          className="w-full bg-[#080d1a] border border-white/15 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium appearance-none outline-none transition cursor-pointer pr-10 shadow-inner"
        >
          <option value="" className="bg-[#0b1020] text-slate-400">
            -- All Subjects (Global Search) --
          </option>
          {subjects.map((sub) => {
            const code = sub.code || sub.name;
            const sinhalaPart = sub.sinhala ? ` (${sub.sinhala})` : '';
            return (
              <option key={sub.id || sub.code} value={sub.id} className="bg-[#0b1020] text-white">
                {code} &bull; {sub.name}{sinhalaPart}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
          <span className="material-symbols-outlined text-[18px]">expand_more</span>
        </div>
      </div>
    </div>
  );
}
