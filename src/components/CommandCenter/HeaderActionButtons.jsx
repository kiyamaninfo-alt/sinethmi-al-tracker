import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCandidateProfile } from '../../hooks/useCandidateProfile';
import SyllabusManagerModal from '../SyllabusManager/SyllabusManagerModal';

export default function HeaderActionButtons() {
  const navigate = useNavigate();
  const profile = useCandidateProfile();
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(() => {
    return new URLSearchParams(window.location.search).get('modal') === 'syllabus';
  });

  const buttonBase =
    'h-9 min-h-[36px] px-2.5 sm:px-3.5 rounded-xl border flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-95 whitespace-nowrap';

  return (
    <>
      <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto overflow-x-auto pb-1 sm:pb-0">
        <button
          type="button"
          onClick={() => setIsSyllabusOpen(true)}
          className={`${buttonBase} w-full sm:w-auto bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-300 border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/25`}
        >
          <span className="material-symbols-outlined text-[16px] text-amber-400 shrink-0">menu_book</span>
          <span className="truncate">Syllabus Manager</span>
        </button>

        <button
          type="button"
          className={`${buttonBase} w-full sm:w-auto bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-200 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/25`}
        >
          <span className="material-symbols-outlined text-[16px] text-cyan-400 shrink-0">assignment_turned_in</span>
          <span className="truncate">Submit Marks</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/profile-setup')}
          title="Candidate Profile & Telemetry Settings"
          className={`${buttonBase} w-full sm:w-auto bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-purple-200 border-purple-400/30 hover:border-purple-400 hover:bg-purple-500/25`}
        >
          <span className="material-symbols-outlined text-[16px] text-purple-300 shrink-0">manage_accounts</span>
          <span className="truncate">Profile Settings</span>
        </button>

        <button
          type="button"
          onClick={async () => {
            localStorage.removeItem('candidate_profile');
            localStorage.removeItem('onboarding_completed');
            const { signOutUser } = await import('../../services/authService');
            await signOutUser();
            navigate('/login');
          }}
          title="Sign Out of Mission Control"
          className={`${buttonBase} w-full sm:w-auto bg-rose-500/10 text-rose-300 border-rose-500/30 hover:border-rose-400 hover:bg-rose-500/20`}
        >
          <span className="material-symbols-outlined text-[16px] text-rose-400 shrink-0">logout</span>
          <span className="truncate">Sign Out</span>
        </button>
      </div>

      <SyllabusManagerModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        subjects={profile.subjects || []}
      />
    </>
  );
}
