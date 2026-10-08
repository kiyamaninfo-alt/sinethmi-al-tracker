import StudyAnalyticsHeader from './StudyAnalyticsHeader';
import KPITelemetryGrid from './KPITelemetryGrid';
import StudyConsistencyHeatmap from './StudyConsistencyHeatmap';
import PeakStudyTimeSection from './PeakStudyTimeSection';
import ActiveTimesMatrix from './ActiveTimesMatrix';
import SubjectDistributionDonut from './SubjectDistributionDonut';
import FocusTrendChart from './FocusTrendChart';
import SubjectWiseProgress from './SubjectWiseProgress';
import SessionHistoryTable from './SessionHistoryTable';
import StudyAnalyticsFooter from './StudyAnalyticsFooter';

export default function StudyAnalyticsDashboard({ onBack }) {
  return (
    <div className="bg-obsidian-deep text-slate-100 min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <StudyAnalyticsHeader onBack={onBack} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
        <KPITelemetryGrid />
        <StudyConsistencyHeatmap />
        <PeakStudyTimeSection />
        <ActiveTimesMatrix />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6" data-purpose="charts-row">
          <SubjectDistributionDonut />
          <FocusTrendChart />
        </section>

        <SubjectWiseProgress />
        <SessionHistoryTable />
      </main>

      <StudyAnalyticsFooter />
    </div>
  );
}
