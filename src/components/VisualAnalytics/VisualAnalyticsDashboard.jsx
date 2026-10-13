import VisualAnalyticsHeader from './VisualAnalyticsHeader';
import VisualTelemetryGauges from './VisualTelemetryGauges';
import FocusTrajectorySpline from './FocusTrajectorySpline';
import SyllabusVelocitySection from './SyllabusVelocitySection';
import CognitiveRadarChart from './CognitiveRadarChart';
import GaussianZScoreChart from './GaussianZScoreChart';
import CircadianHeatmapMatrix from './CircadianHeatmapMatrix';
import MemoryDecayCurveChart from './MemoryDecayCurveChart';
import SubjectLoadDonut from './SubjectLoadDonut';
import MCQMasteryBars from './MCQMasteryBars';
import VisualAnalyticsFooter from './VisualAnalyticsFooter';

export default function VisualAnalyticsDashboard({ onBack }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased selection:bg-purple-600 selection:text-white">
      <VisualAnalyticsHeader onBack={onBack} />

      <main className="max-w-[1780px] mx-auto px-4 lg:px-8 py-5 space-y-5">
        <VisualTelemetryGauges />
        <FocusTrajectorySpline />
        <SyllabusVelocitySection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CognitiveRadarChart />
          <GaussianZScoreChart />
          <CircadianHeatmapMatrix />
          <MemoryDecayCurveChart />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <SubjectLoadDonut />
          <MCQMasteryBars />
        </section>
      </main>

      <VisualAnalyticsFooter />
    </div>
  );
}
