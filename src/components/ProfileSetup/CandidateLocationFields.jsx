import { PROVINCES_MAP } from '../../constants/profileSetup';

export default function CandidateLocationFields({ profile, onChange }) {
  const districts = PROVINCES_MAP[profile.province] || [];
  const handleProv = (e) => {
    onChange('province', e.target.value);
    onChange('district', (PROVINCES_MAP[e.target.value] || [])[0] || '');
  };

  return (
    <>
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
    </>
  );
}
