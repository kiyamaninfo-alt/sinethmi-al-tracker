import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CandidateLogin from './components/CandidateLogin/CandidateLogin';
import CandidateProfileSetup from './components/ProfileSetup/CandidateProfileSetup';
import CommandCenterDashboard from './components/CommandCenter/CommandCenterDashboard';
import StudyAnalyticsDashboard from './components/StudyAnalytics/StudyAnalyticsDashboard';
import VisualAnalyticsDashboard from './components/VisualAnalytics/VisualAnalyticsDashboard';
import DevNav from './components/DevNav';
import StudyTrackerLandingPage from './components/LandingPage/StudyTrackerLandingPage';
import AuthCallbackHandler from './components/CandidateLogin/AuthCallbackHandler';
import ProtectedRoute from './components/ProtectedRoute';
import { useCandidateProfile } from './hooks/useCandidateProfile';
import { useGlobalFeedbackAudio } from './hooks/useGlobalFeedbackAudio';
import { useAppTheme } from './hooks/useAppTheme';
import { FocusTimerProvider } from './context/FocusTimerContext';
import GlobalTimerFloatingWidget from './components/CommandCenter/GlobalTimerFloatingWidget';

function RouteContent() {
  const navigate = useNavigate();
  const toCommand = () => navigate('/command-center');

  return (
    <Routes>
      <Route path="/" element={<StudyTrackerLandingPage />} />
      <Route path="/landing" element={<StudyTrackerLandingPage />} />
      <Route path="/login" element={<CandidateLogin />} />
      <Route path="/auth/callback" element={<AuthCallbackHandler />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile-setup" element={<CandidateProfileSetup />} />
        <Route path="/command-center" element={<CommandCenterDashboard />} />
        <Route path="/syllabus-manager" element={<Navigate to="/command-center?modal=syllabus" replace />} />
        <Route path="/study-analytics" element={<StudyAnalyticsDashboard onBack={toCommand} />} />
        <Route path="/visual-analytics" element={<VisualAnalyticsDashboard onBack={toCommand} />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

function AppContent({ profile }) {
  useAppTheme(profile?.preferences?.theme, profile?.preferences?.fontSize);
  return (
    <FocusTimerProvider>
      <div className="relative min-h-screen">
        <DevNav />
        <RouteContent />
        <GlobalTimerFloatingWidget />
      </div>
    </FocusTimerProvider>
  );
}

export default function App() {
  const profile = useCandidateProfile();
  useGlobalFeedbackAudio(profile?.notificationSettings);

  return (
    <BrowserRouter>
      <AppContent profile={profile} />
    </BrowserRouter>
  );
}

