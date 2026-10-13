import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export default function AuthCallbackHandler() {
  const navigate = useNavigate();
  const handled = useRef(false);

  useEffect(() => {
    let active = true;

    async function routeCandidate(user) {
      if (!user || handled.current || !active) return;
      handled.current = true;
      try {
        const cached = localStorage.getItem('candidate_profile');
        const parsed = cached ? JSON.parse(cached) : null;
        if (parsed?.userId && parsed.userId !== user.id) {
          localStorage.removeItem('candidate_profile');
          localStorage.removeItem('onboarding_completed');
        }

        const { data: profile } = await supabase.from('profiles').select('id, name').eq('id', user.id).maybeSingle();
        if (!active) return;
        navigate(profile?.name ? '/command-center' : '/profile-setup', { replace: true });
      } catch (err) {
        if (active) navigate('/profile-setup', { replace: true });
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user && !handled.current) {
        await routeCandidate(session.user);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && !handled.current) {
        routeCandidate(session.user);
      }
    });

    const timeoutId = setTimeout(() => {
      if (!handled.current && active) {
        navigate('/profile-setup', { replace: true });
      }
    }, 4500);

    return () => {
      active = false;
      subscription?.unsubscribe();
      clearTimeout(timeoutId);
    };
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
