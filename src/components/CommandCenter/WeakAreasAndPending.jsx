import WeakAreasTable from './WeakAreasTable';
import PendingLessonsCard from './PendingLessonsCard';

export default function WeakAreasAndPending() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <WeakAreasTable />
      <PendingLessonsCard />
    </div>
  );
}
