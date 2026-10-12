import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CandidateLogin from './components/CandidateLogin/CandidateLogin';
import CandidateProfileSetup from './components/ProfileSetup/CandidateProfileSetup';
import CommandCenterDashboard from './components/CommandCenter/CommandCenterDashboard';
import StudyAnalyticsDashboard from './components/StudyAnalytics/StudyAnalyticsDashboard';
import VisualAnalyticsDashboard from './components/VisualAnalytics/VisualAnalyticsDashboard';
import SyllabusManagerPage from './components/SyllabusManager/SyllabusManagerPage';
import DevNav from './components/DevNav';
import StudyTrackerLandingPage from './components/LandingPage/StudyTrackerLandingPage';
import AuthCallbackHandler from './components/CandidateLogin/AuthCallbackHandler';
import ProtectedRoute from './components/ProtectedRoute';
import { useCandidateProfile } from './hooks/useCandidateProfile';
import { useGlobalFeedbackAudio } from './hooks/useGlobalFeedbackAudio';

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
        <Route path="/syllabus-manager" element={<SyllabusManagerPage />} />
        <Route path="/study-analytics" element={<StudyAnalyticsDashboard onBack={toCommand} />} />
        <Route path="/visual-analytics" element={<VisualAnalyticsDashboard onBack={toCommand} />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  const profile = useCandidateProfile();
  useGlobalFeedbackAudio(profile?.notificationSettings);
  const showDev = import.meta.env.DEV || window.location.search.includes('dev=true');

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        {showDev && <DevNav />}
        <RouteContent />
      </div>
    </BrowserRouter>
  );
}
