import { useState } from 'react';
import CandidateLogin from './components/CandidateLogin';
import CommandCenterDashboard from './components/CommandCenter/CommandCenterDashboard';
import StudyAnalyticsDashboard from './components/StudyAnalytics/StudyAnalyticsDashboard';
import VisualAnalyticsDashboard from './components/VisualAnalytics/VisualAnalyticsDashboard';

export default function App() {
  const [view, setView] = useState('visual-analytics');

  const views = [
    { id: 'visual-analytics', label: 'Visual Analytics', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40' },
    { id: 'study-analytics', label: 'Study Analytics', color: 'bg-purple-500/20 text-purple-300 border-purple-400/40' },
    { id: 'command-center', label: 'Command Center', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40' },
    { id: 'login', label: 'Candidate Login', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40' },
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl text-xs font-mono">
        {views.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setView(v.id)}
            className={`px-3 py-1 rounded-full transition cursor-pointer ${
              view === v.id ? `${v.color} border font-bold` : 'text-slate-400 hover:text-white'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {view === 'visual-analytics' && <VisualAnalyticsDashboard onBack={() => setView('command-center')} />}
      {view === 'study-analytics' && <StudyAnalyticsDashboard onBack={() => setView('command-center')} />}
      {view === 'command-center' && <CommandCenterDashboard />}
      {view === 'login' && <CandidateLogin />}
    </div>
  );
}
