import { useNavigate } from 'react-router-dom';
import { capitalizeWords } from '../../utils/formatters';

export default function ProfileSetupHeader({ profile, onSave, isSaved, onStartTour }) {
  const navigate = useNavigate();
  const handleSave = onSave || (() => navigate('/command-center'));
  const isEmailVerified = Boolean(profile.isEmailVerified ?? profile.emailVerified ?? false);
  const displayName = profile.name ? capitalizeWords(profile.name) : (profile.email || 'Candidate');
  const displaySchool = profile.school ? capitalizeWords(profile.school) : '';
  const displayDistrict = profile.district ? capitalizeWords(profile.district) : '';

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-outline-variant/20">
        <div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-on-surface flex items-center gap-3">
            Sinethmi A-Level Mission Control
            <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary border border-secondary/40">{profile.targetYear || '2028'} Horizon</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onStartTour && (
            <button type="button" onClick={onStartTour} className="px-3 py-1.5 rounded-lg border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[15px]">help</span>
              <span>Tour</span>
            </button>
          )}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-tertiary/30 text-tertiary text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span>{isSaved ? 'PROFILE UPDATED' : 'SYNCHRONIZED'}</span>
          </div>
          <button type="button" onClick={handleSave} className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer">
            <span>Save Profile -&gt;</span>
            <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low/80 backdrop-blur-md p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-primary/40 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[28px]">psychology</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-on-surface">{displayName}</h2>
              <span className={`material-symbols-outlined text-[16px] rounded-full ${isEmailVerified ? 'text-white bg-blue-500 shadow-sm p-0.5 text-[12px]' : 'text-slate-500'}`}>verified</span>
            </div>
            <p className="text-xs text-outline font-mono">
              {displaySchool ? `${displaySchool} • ` : ''}{displayDistrict ? `${displayDistrict} District` : (profile.email || 'Mission Control')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono">
          {(profile.subjects?.length >= 3) && (
            <div><span className="text-outline block text-[10px]">TARGET Z-SCORE</span><span className="text-primary font-bold text-sm">&gt; {profile.targetZScore}</span></div>
          )}
          <div><span className="text-outline block text-[10px]">STREAM TRACK</span><span className="text-secondary font-bold">{profile.stream || 'Not Selected'}</span></div>
        </div>
      </div>
    </div>
  );
}
