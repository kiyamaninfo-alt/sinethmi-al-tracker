import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export default function AuthCallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuthAndDirect() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate('/login');
          return;
        }

        const cached = localStorage.getItem('candidate_profile');
        const parsed = cached ? JSON.parse(cached) : null;
        if (parsed?.userId && parsed.userId !== user.id) {
          localStorage.removeItem('candidate_profile');
          localStorage.removeItem('onboarding_completed');
        }

        const { data: profile } = await supabase
          .from('profiles')
          .select('id, name')
          .eq('id', user.id)
          .maybeSingle();

        if (profile?.name) {
          navigate('/command-center', { replace: true });
        } else {
          localStorage.removeItem('candidate_profile');
          localStorage.removeItem('onboarding_completed');
          navigate('/profile-setup', { replace: true });
        }
      } catch (err) {
        console.warn('[AuthCallbackHandler] Check failed:', err);
        navigate('/profile-setup', { replace: true });
      }
    }
    checkAuthAndDirect();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050811] flex items-center justify-center text-slate-200">
      <div className="flex items-center gap-3 p-5 rounded-2xl bg-surface-container-low border border-cyan-400/40">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-mono text-xs text-cyan-300">Synchronizing Mission Control Telemetry...</span>
      </div>
    </div>
  );
}
