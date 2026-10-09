import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_PROFILE } from '../../constants/profileSetup';
import ProfileSetupHeader from './ProfileSetupHeader';
import ProfileIdentityForm from './ProfileIdentityForm';
import StreamSelector from './StreamSelector';
import SubjectSelector from './SubjectSelector';
import TargetHorizonForm from './TargetHorizonForm';

export default function CandidateProfileSetup() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('candidate_profile');
    return saved ? JSON.parse(saved) : INITIAL_PROFILE;
  });

  const handleChange = (field, val) => {
    setProfile((prev) => ({ ...prev, [field]: val }));
  };

  const handleSaveAndEnter = () => {
    localStorage.setItem('candidate_profile', JSON.stringify(profile));
    navigate('/command-center');
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 antialiased relative pb-16">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <ProfileSetupHeader profile={profile} />
        <ProfileIdentityForm profile={profile} onChange={handleChange} />
        <StreamSelector selectedStream={profile.stream} onSelectStream={(s) => handleChange('stream', s)} />
        <SubjectSelector subjects={profile.subjects} onUpdateSubjects={(subs) => handleChange('subjects', subs)} />
        <TargetHorizonForm profile={profile} onChange={handleChange} />

        <div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl border border-primary/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
            <div>
              <p className="text-xs font-bold text-on-surface">Candidate Telemetry Initialized</p>
              <p className="text-[11px] text-outline font-mono">Parameters ready for Mission Control deployment</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSaveAndEnter}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Save Candidate Profile &amp; Enter Mission Control -&gt;</span>
              <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
