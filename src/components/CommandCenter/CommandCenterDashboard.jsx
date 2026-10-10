import { useEffect } from 'react';
import Header from './Header';
import TodayPriorities from './TodayPriorities';
import DeepFocusTimer from './DeepFocusTimer';
import ActivityHeatmap from './ActivityHeatmap';
import SyllabusVelocity from './SyllabusVelocity';
import ScoreAnalytics from './ScoreAnalytics';
import UrgentRadarTable from './UrgentRadarTable';
import SpacedRepetitionStation from './SpacedRepetitionStation';
import TopRankedTable from './TopRankedTable';
import WeakAreasAndPending from './WeakAreasAndPending';
import CommandCenterFooter from './CommandCenterFooter';

export default function CommandCenterDashboard() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 antialiased selection:bg-neon-cyan/20 selection:text-neon-cyan relative">
      {/* Ambient background decorative light grids */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 space-y-6">
        <Header />
        <TodayPriorities />

        {/* Deep Focus & Consistency Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <DeepFocusTimer />
          <ActivityHeatmap />
        </div>

        <SyllabusVelocity />
        <ScoreAnalytics />

        {/* Radar & Spaced Repetition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UrgentRadarTable />
          <SpacedRepetitionStation />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopRankedTable />
        </div>
        <WeakAreasAndPending />
        <CommandCenterFooter />
      </div>
    </div>
  );
}
