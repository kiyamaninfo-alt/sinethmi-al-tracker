import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_PROFILE } from '../../constants/profileSetup';
import { saveProfileToCloud } from './profileSyncHelper';
import { getInitialCleanProfile } from './profileCleanState';
import ProfileSetupHeader from './ProfileSetupHeader';
import ProfileIdentityForm from './ProfileIdentityForm';
import StreamSelector from './StreamSelector';
import SubjectSelector from './SubjectSelector';
import TargetHorizonForm from './TargetHorizonForm';
import AlarmSettingsCard from './AlarmSettingsCard';
import PreferencesCard from './PreferencesCard';
import NotificationAlertsCard from './NotificationAlertsCard';
import OfflineStorageCard from './OfflineStorageCard';
import ProfileSaveBar from './ProfileSaveBar';

export default function CandidateProfileSetup() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(getInitialCleanProfile);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  const handleChange = (field, val) => setProfile((prev) => {
    const next = { ...prev, [field]: val };
    localStorage.setItem('candidate_profile', JSON.stringify(next));
    return next;
  });

  const handleUpdate = () => {
    localStorage.setItem('candidate_profile', JSON.stringify(profile));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleSaveAndEnter = async () => {
    localStorage.setItem('candidate_profile', JSON.stringify(profile));
    await saveProfileToCloud(profile);
    navigate('/command-center');
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 antialiased relative pb-16">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <ProfileSetupHeader profile={profile} onSave={handleSaveAndEnter} isSaved={isSaved} />
        <ProfileIdentityForm profile={profile} onChange={handleChange} onUpdate={handleUpdate} isSaved={isSaved} />
        <StreamSelector
          selectedStream={profile.stream} onSelectStream={(s) => handleChange('stream', s)}
          subjects={profile.subjects} onUpdateSubjects={(subs) => handleChange('subjects', subs)}
          onUpdate={handleUpdate} isSaved={isSaved}
        />
        <SubjectSelector subjects={profile.subjects} onUpdateSubjects={(subs) => handleChange('subjects', subs)} />
        <TargetHorizonForm profile={profile} onChange={handleChange} />
        <div id="focus-alarm-settings" className="scroll-mt-6">
          <AlarmSettingsCard settings={profile.alarmSettings} onChange={(s) => handleChange('alarmSettings', s)} />
        </div>
        <PreferencesCard preferences={profile.preferences} onChange={(p) => handleChange('preferences', p)} />
        <NotificationAlertsCard settings={profile.notificationSettings} onChange={(n) => handleChange('notificationSettings', n)} />
        <OfflineStorageCard profile={profile} onReset={() => setProfile(INITIAL_PROFILE)} />
        <ProfileSaveBar onSave={handleSaveAndEnter} />
      </main>
    </div>
  );
}
