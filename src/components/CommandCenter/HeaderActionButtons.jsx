import { useNavigate } from 'react-router-dom';

export default function HeaderActionButtons() {
  const navigate = useNavigate();

  const buttonBase =
    'h-9 px-3.5 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-95 whitespace-nowrap';

  return (
    <div className="flex items-center gap-2.5 ml-auto w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
      <button
        type="button"
        onClick={() => navigate('/syllabus-manager')}
        className={`${buttonBase} bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-300 border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/25`}
      >
        <span className="material-symbols-outlined text-[16px] text-amber-400">menu_book</span>
        <span>Syllabus Manager</span>
      </button>

      <button
        type="button"
        className={`${buttonBase} bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-200 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/25`}
      >
        <span className="material-symbols-outlined text-[16px] text-cyan-400">assignment_turned_in</span>
        <span>Submit Marks</span>
      </button>

      <button
        type="button"
        onClick={() => navigate('/profile-setup')}
        title="Candidate Profile & Telemetry Settings"
        className={`${buttonBase} bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-purple-200 border-purple-400/30 hover:border-purple-400 hover:bg-purple-500/25`}
      >
        <span className="material-symbols-outlined text-[16px] text-purple-300">manage_accounts</span>
        <span>Profile Settings</span>
      </button>
    </div>
  );
}
