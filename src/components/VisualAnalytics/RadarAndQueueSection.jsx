import UrgentRadarTable from '../CommandCenter/UrgentRadarTable';
import SpacedRepetitionStation from '../CommandCenter/SpacedRepetitionStation';
import TopRankedTable from '../CommandCenter/TopRankedTable';
import WeakAreasTable from '../CommandCenter/WeakAreasTable';
import PendingLessonsCard from '../CommandCenter/PendingLessonsCard';
import LearnedNotStudiedCard from '../CommandCenter/LearnedNotStudiedCard';

export default function RadarAndQueueSection() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <UrgentRadarTable />
        <SpacedRepetitionStation />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TopRankedTable />
        <WeakAreasTable />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PendingLessonsCard />
        <LearnedNotStudiedCard />
      </div>
    </div>
  );
}
