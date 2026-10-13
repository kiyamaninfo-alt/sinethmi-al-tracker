import CandidateLocationFields from './CandidateLocationFields';
import WhatsAppInputField from './WhatsAppInputField';

export default function ProfileIdentityForm({ profile, onChange, errors = {} }) {
  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex items-center gap-4 pb-3 border-b border-outline-variant/20">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/40 bg-surface-container-high shrink-0 flex items-center justify-center">
          {profile.avatarUrl ? <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" /> : <span className="material-symbols-outlined text-outline text-[28px]">person</span>}
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-surface-container-lowest" />
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-secondary">Mission Identity</span>
          <h3 className="text-base font-bold text-on-surface">{profile.name || profile.email || 'Candidate'}</h3>
          <p className="text-xs text-outline font-mono">{profile.email || profile.candidateIndex || 'ID Unassigned'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div>
          <label className="text-outline uppercase tracking-wider block mb-1">Candidate Full Name *</label>
          <input
            id="candidate-name-input" type="text" value={profile.name} onChange={(e) => onChange('name', e.target.value)}
            placeholder="Enter candidate full name"
            className={`w-full bg-surface-container-high/60 border rounded-lg px-3 py-2 text-on-surface focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500 ring-2 ring-rose-500/30' : 'border-outline-variant/40 focus:border-primary'
            }`}
          />
          {errors.name && <p className="text-[11px] text-rose-400 mt-1 font-sans">{errors.name}</p>}
        </div>
        <div>
          <label className="text-outline uppercase tracking-wider block mb-1 flex items-center justify-between">
            <span>Candidate Index / ID</span>
            <span className="text-[10px] text-cyan-400 font-mono font-bold lowercase bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/30">system generated</span>
          </label>
          <input type="text" readOnly value={profile.candidateIndex || ''} placeholder="Generating Index..." className="w-full bg-surface-container-high/30 border border-outline-variant/30 rounded-lg px-3 py-2 text-slate-400 font-mono cursor-not-allowed select-none focus:outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="text-outline uppercase tracking-wider block mb-1">School / Academy</label>
          <input type="text" value={profile.school} onChange={(e) => onChange('school', e.target.value)} placeholder="Enter school name" className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface focus:border-primary focus:outline-none" />
        </div>
        <CandidateLocationFields profile={profile} onChange={onChange} />
        <WhatsAppInputField value={profile.phone} onChange={(v) => onChange('phone', v)} error={errors.phone} />
      </div>
    </div>
  );
}
