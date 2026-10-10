import { PROVINCES_MAP } from '../../constants/profileSetup';

export default function ProfileIdentityForm({ profile, onChange, onUpdate, isSaved }) {
  const districts = PROVINCES_MAP[profile.province] || [];
  const handleProvChange = (e) => {
    onChange('province', e.target.value);
    onChange('district', (PROVINCES_MAP[e.target.value] || [])[0] || '');
  };

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex items-center gap-4 pb-3 border-b border-outline-variant/20">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/40 bg-surface-container-high shrink-0">
          <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-surface-container-lowest" />
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-secondary">Google Profile Synced</span>
          <h3 className="text-base font-bold text-on-surface">{profile.name}</h3>
          <p className="text-xs text-outline font-mono">Telemetry Identity Validated</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div>
          <label className="text-outline uppercase tracking-wider block mb-1">Candidate Full Name</label>
          <input type="text" value={profile.name} onChange={(e) => onChange('name', e.target.value)}
            className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="text-outline uppercase tracking-wider block mb-1">School / Academy</label>
          <input type="text" value={profile.school} onChange={(e) => onChange('school', e.target.value)}
            className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="text-outline uppercase tracking-wider block mb-1">Province</label>
          <select value={profile.province} onChange={handleProvChange}
            className="w-full bg-surface-container-high border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface focus:border-primary focus:outline-none">
            {Object.keys(PROVINCES_MAP).map((prov) => (
              <option key={prov} value={prov} className="bg-surface-container-high">{prov}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-outline uppercase tracking-wider block mb-1">District</label>
            <select value={profile.district} onChange={(e) => onChange('district', e.target.value)}
              className="w-full bg-surface-container-high border border-outline-variant/40 rounded-lg px-2 py-2 text-on-surface focus:border-primary focus:outline-none">
              {districts.map((d) => <option key={d} value={d} className="bg-surface-container-high">{d}</option>)}
            </select>
          </div>
          <div>
            <label className="text-outline uppercase tracking-wider block mb-1">Town</label>
            <input type="text" value={profile.town} onChange={(e) => onChange('town', e.target.value)}
              className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-2 py-2 text-on-surface focus:border-primary focus:outline-none" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="text-outline uppercase tracking-wider block mb-1">Phone Number (Alerts & Telemetry)</label>
          <input type="tel" value={profile.phone} onChange={(e) => onChange('phone', e.target.value)}
            className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface font-mono focus:border-primary focus:outline-none" />
        </div>
      </div>

      <div className="pt-3 border-t border-outline-variant/20 flex justify-end">
        <button type="button" onClick={onUpdate}
          className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[15px]">{isSaved ? 'check_circle' : 'sync'}</span>
          <span>{isSaved ? 'Profile Updated ✓' : 'Update Profile'}</span>
        </button>
      </div>
    </div>
  );
}
