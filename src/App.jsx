import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CandidateLogin from './components/CandidateLogin/CandidateLogin';
import CandidateProfileSetup from './components/ProfileSetup/CandidateProfileSetup';
import CommandCenterDashboard from './components/CommandCenter/CommandCenterDashboard';
import StudyAnalyticsDashboard from './components/StudyAnalytics/StudyAnalyticsDashboard';
import VisualAnalyticsDashboard from './components/VisualAnalytics/VisualAnalyticsDashboard';
import DevNav from './components/DevNav';

function RouteContent() {
  const navigate = useNavigate();
  const toCommand = () => navigate('/command-center');

  return (
    <Routes>
      <Route path="/" element={<CandidateLogin />} />
      <Route path="/login" element={<CandidateLogin />} />
      <Route path="/profile-setup" element={<CandidateProfileSetup />} />
      <Route path="/command-center" element={<CommandCenterDashboard />} />
      <Route path="/study-analytics" element={<StudyAnalyticsDashboard onBack={toCommand} />} />
      <Route path="/visual-analytics" element={<VisualAnalyticsDashboard onBack={toCommand} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <DevNav />
        <RouteContent />
      </div>
    </BrowserRouter>
  );
}
