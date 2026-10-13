import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PROFILE } from '../../constants/mockProfile';
import { saveProfileToCloud } from './profileSyncHelper';
import { getInitialCleanProfile, hydrateProfileWithAuth } from './profileCleanState';
import { useCandidateProfileSetup } from './useCandidateProfileSetup';
import { useOnboardingTour } from '../../hooks/useOnboardingTour';
import { useProfileValidation } from './useProfileValidation';
import { useGlobalFeedbackAudio } from '../../hooks/useGlobalFeedbackAudio';
import { useAppTheme } from '../../hooks/useAppTheme';
import OnboardingTourOverlay from './OnboardingTourOverlay';
import StreamTourHintBox from './StreamTourHintBox';
import ValidationAlertModal from './ValidationAlertModal';
import ProfileSetupHeader from './ProfileSetupHeader';
import ProfileIdentityForm from './ProfileIdentityForm';
import StreamSelector from './StreamSelector';
import SubjectSelector from './SubjectSelector';
import TargetHorizonForm from './TargetHorizonForm';
import AlarmSettingsCard from './AlarmSettingsCard';
import ProfileAuxiliaryCards from './ProfileAuxiliaryCards';

export default function CandidateProfileSetup() {
  const navigate = useNavigate();
  const { profile, setProfile, isSaved, handleChange } = useCandidateProfileSetup(getInitialCleanProfile);
  useGlobalFeedbackAudio(profile?.notificationSettings);
  useAppTheme(profile?.preferences?.theme);

  const { showTour, tourStep, totalSteps, currentStepData, handleNext, handlePrev, handleSkip, startTour, jumpToStep } = useOnboardingTour();
  const { errors, showErrorModal, setShowErrorModal, validate, handleFocusFirstError, clearError } = useProfileValidation(profile, jumpToStep);

  const handleSubmit = async () => {
    if (!validate()) return;
    localStorage.setItem('candidate_profile', JSON.stringify(profile));
    localStorage.setItem('onboarding_completed', 'true');
    await saveProfileToCloud(profile);
    navigate('/command-center');
  };

  useEffect(() => {
    hydrateProfileWithAuth(profile, setProfile);
    const hash = window.location.hash;
    if (hash && /^#[a-zA-Z][\w-]*$/.test(hash)) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, []);

  const handleFieldChange = (f, v) => { handleChange(f, v); clearError(f); };
  const handleLoadMock = () => {
    const pop = { ...profile, ...MOCK_PROFILE, userId: profile.userId || '', email: profile.email || 'sinethmi@missioncontrol.edu' };
    setProfile(pop); localStorage.setItem('candidate_profile', JSON.stringify(pop)); saveProfileToCloud(pop);
  };
  const toggleClick = (v) => handleChange('notificationSettings', { ...(profile.notificationSettings || {}), clickSoundEnabled: v });

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 antialiased relative pb-16">
      {showTour && currentStepData?.id !== 'tour-stream' && (
        <OnboardingTourOverlay currentStep={tourStep} totalSteps={totalSteps} stepData={currentStepData} onNext={tourStep >= totalSteps - 1 ? handleSubmit : handleNext} onPrev={handlePrev} onSkip={handleSkip} />
      )}
      {showTour && currentStepData?.id === 'tour-stream' && <StreamTourHintBox onNext={handleNext} onSkip={handleSkip} />}
      <ValidationAlertModal errors={showErrorModal ? errors : null} onClose={() => setShowErrorModal(false)} onFocusFirstError={handleFocusFirstError} />
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <ProfileSetupHeader profile={profile} onSave={handleSubmit} isSaved={isSaved} onStartTour={startTour} />
        <ProfileIdentityForm profile={profile} onChange={handleFieldChange} errors={errors} isSaved={isSaved} />
        <StreamSelector selectedStream={profile.stream} onSelectStream={(s) => handleFieldChange('stream', s)} subjects={profile.subjects} onUpdateSubjects={(subs) => handleFieldChange('subjects', subs)} onUpdate={handleSubmit} isSaved={isSaved} error={errors.stream}>
          <SubjectSelector subjects={profile.subjects} onUpdateSubjects={(subs) => handleFieldChange('subjects', subs)} />
        </StreamSelector>
        <TargetHorizonForm profile={profile} onChange={handleFieldChange} error={errors.targetYear} />
        <div id="focus-alarm-settings" className="scroll-mt-6">
          <AlarmSettingsCard settings={profile.alarmSettings} onChange={(s) => handleChange('alarmSettings', s)} />
        </div>
        <ProfileAuxiliaryCards profile={profile} onChange={handleChange} setProfile={setProfile} onSave={handleSubmit} />
      </main>
    </div>
  );
}
