import { PROVINCES_MAP } from '../../constants/profileSetup';
import WhatsAppLogo from './WhatsAppLogo';

export default function ProfileIdentityForm({ profile, onChange }) {
  const districts = PROVINCES_MAP[profile.province] || [];
  const handleProv = (e) => {
    onChange('province', e.target.value);
    onChange('district', (PROVINCES_MAP[e.target.value] || [])[0] || '');
  };

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
          <label className="text-outline uppercase tracking-wider block mb-1">Candidate Full Name</label>
          <input id="candidate-name-input" type="text" value={profile.name} onChange={(e) => onChange('name', e.target.value)} placeholder="Enter candidate full name" className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface focus:border-primary focus:outline-none" />
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
        <div>
          <label className="text-outline uppercase tracking-wider block mb-1">Province</label>
          <select value={profile.province} onChange={handleProv} className="w-full bg-surface-container-high border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface focus:border-primary focus:outline-none">
            <option value="">Select Province</option>
            {Object.keys(PROVINCES_MAP).map((p) => (<option key={p} value={p} className="bg-surface-container-high">{p}</option>))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-outline uppercase tracking-wider block mb-1">District</label>
            <select value={profile.district} onChange={(e) => onChange('district', e.target.value)} className="w-full bg-surface-container-high border border-outline-variant/40 rounded-lg px-2 py-2 text-on-surface focus:border-primary focus:outline-none">
              <option value="">Select District</option>
              {districts.map((d) => <option key={d} value={d} className="bg-surface-container-high">{d}</option>)}
            </select>
          </div>
          <div>
            <label className="text-outline uppercase tracking-wider block mb-1">Town</label>
            <input type="text" value={profile.town} onChange={(e) => onChange('town', e.target.value)} placeholder="Enter town" className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-2 py-2 text-on-surface focus:border-primary focus:outline-none" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="text-outline uppercase tracking-wider block mb-1 flex items-center gap-1.5 text-emerald-400">
            <WhatsAppLogo className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WhatsApp Number (Alerts & Telemetry)</span>
          </label>
          <input id="candidate-phone-input" type="tel" value={profile.phone} onChange={(e) => onChange('phone', e.target.value)} placeholder="+94 7X XXX XXXX" className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface font-mono focus:border-emerald-400 focus:outline-none" />
        </div>
      </div>
    </div>
  );
}
