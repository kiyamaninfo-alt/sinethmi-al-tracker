import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_PROFILE } from '../../constants/profileSetup';
import { MOCK_PROFILE } from '../../constants/mockProfile';
import { saveProfileToCloud } from './profileSyncHelper';
import { getInitialCleanProfile, hydrateProfileWithAuth } from './profileCleanState';
import { useCandidateProfileSetup } from './useCandidateProfileSetup';
import { useOnboardingTour } from '../../hooks/useOnboardingTour';
import { useGlobalFeedbackAudio } from '../../hooks/useGlobalFeedbackAudio';
import OnboardingTourOverlay from './OnboardingTourOverlay';
import StreamTourHintBox from './StreamTourHintBox';
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
  const { profile, setProfile, isSaved, handleChange } = useCandidateProfileSetup(getInitialCleanProfile);
  useGlobalFeedbackAudio(profile?.notificationSettings);

  const handleSaveAndEnter = async () => {
    localStorage.setItem('candidate_profile', JSON.stringify(profile));
    localStorage.setItem('onboarding_completed', 'true');
    await saveProfileToCloud(profile);
    navigate('/command-center');
  };

  const { showTour, tourStep, totalSteps, currentStepData, handleNext, handlePrev, handleSkip, startTour } = useOnboardingTour(handleSaveAndEnter);

  useEffect(() => {
    hydrateProfileWithAuth(profile, setProfile);
    const hash = window.location.hash;
    if (hash && /^#[a-zA-Z][\w-]*$/.test(hash)) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, []);

  const handleLoadMock = () => {
    const pop = { ...profile, ...MOCK_PROFILE, userId: profile.userId || '', email: profile.email || 'sinethmi@missioncontrol.edu' };
    setProfile(pop);
    localStorage.setItem('candidate_profile', JSON.stringify(pop));
    saveProfileToCloud(pop);
  };
  const toggleClick = (val) => handleChange('notificationSettings', { ...(profile.notificationSettings || {}), clickSoundEnabled: val });

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 antialiased relative pb-16">
      {showTour && <OnboardingTourOverlay currentStep={tourStep} totalSteps={totalSteps} stepData={currentStepData} onNext={handleNext} onPrev={handlePrev} onSkip={handleSkip} />}
      {showTour && currentStepData?.id === 'tour-stream' && <StreamTourHintBox onNext={handleNext} onSkip={handleSkip} />}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <ProfileSetupHeader profile={profile} onSave={handleSaveAndEnter} isSaved={isSaved} onStartTour={startTour} onLoadMock={handleLoadMock} onToggleClickSound={toggleClick} />
        <ProfileIdentityForm profile={profile} onChange={handleChange} isSaved={isSaved} />
        <StreamSelector
          selectedStream={profile.stream} onSelectStream={(s) => handleChange('stream', s)}
          subjects={profile.subjects} onUpdateSubjects={(subs) => handleChange('subjects', subs)}
          onUpdate={handleSaveAndEnter} isSaved={isSaved}
        >
          <SubjectSelector subjects={profile.subjects} onUpdateSubjects={(subs) => handleChange('subjects', subs)} />
        </StreamSelector>
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
