import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCandidateProfile } from '../../hooks/useCandidateProfile';
import { useSyllabusState } from '../../hooks/useSyllabusState';
import SyllabusHeader from './SyllabusHeader';
import SubjectUnitsColumn from './SubjectUnitsColumn';

export default function SyllabusManagerPage() {
  const profile = useCandidateProfile();
  const syllabusHooks = useSyllabusState();
  const [searchQuery, setSearchQuery] = useState('');
  const subjects = profile.subjects || [];

  if (!subjects || subjects.length < 3) {
    return <Navigate to="/profile-setup#candidate-stream-select" replace />;
  }

  const totalUnits = subjects.reduce((acc, s) => acc + (s.units || 14), 0);

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased relative pb-16">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 space-y-6">
        <SyllabusHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalUnits={totalUnits}
          totalSubjects={subjects.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub) => (
            <SubjectUnitsColumn
              key={sub.id || sub.code}
              subject={sub}
              searchQuery={searchQuery}
              syllabusHooks={syllabusHooks}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
