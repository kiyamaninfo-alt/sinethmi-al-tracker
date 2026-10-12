import PreferencesCard from './PreferencesCard';
import NotificationAlertsCard from './NotificationAlertsCard';
import OfflineStorageCard from './OfflineStorageCard';
import ProfileSaveBar from './ProfileSaveBar';
import { INITIAL_PROFILE } from '../../constants/profileSetup';

export default function ProfileAuxiliaryCards({ profile, onChange, setProfile, onSave }) {
  return (
    <>
      <PreferencesCard preferences={profile.preferences} onChange={(p) => onChange('preferences', p)} />
      <NotificationAlertsCard settings={profile.notificationSettings} onChange={(n) => onChange('notificationSettings', n)} />
      <OfflineStorageCard profile={profile} onReset={() => setProfile(INITIAL_PROFILE)} />
      <ProfileSaveBar onSave={onSave} />
    </>
  );
}
