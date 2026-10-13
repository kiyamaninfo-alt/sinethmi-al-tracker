import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSmartLaunch, signInWithGoogle } from '../../services/authService';
import GoogleLogo from './GoogleLogo';

export default function LoginForm({ lang = 'si' }) {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); setLoading(true);
    const res = await handleSmartLaunch(email, password);
    setLoading(false);
    if (res.action === 'dashboard') {
      navigate('/command-center');
    } else if (res.action === 'profile_setup') {
      localStorage.removeItem('candidate_profile');
      localStorage.removeItem('onboarding_completed');
      navigate('/profile-setup');
    } else if (res.action === 'error') {
      setErrorMessage(res.error);
    }
  };

  const handleGoogle = async () => {
    setErrorMessage('');
    const { error } = await signInWithGoogle();
    if (error) setErrorMessage(error.message);
  };

  const googleText = lang === 'ta' ? 'Google கணக்கு மூலம் தொடරவும்' : lang === 'en' ? 'Continue with Google Account' : 'Google ගිණුමෙන් ඇතුල් වන්න';

  return (
    <div className="w-full flex flex-col items-center mt-3.5">
      <button type="button" onClick={handleGoogle} className="w-full h-10 rounded-lg bg-surface-container-high/80 hover:bg-surface-variant text-on-surface flex items-center justify-center gap-2.5 transition-all mb-3.5 border border-cyan-500/20 text-xs font-semibold shadow-sm cursor-pointer group">
        <GoogleLogo className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
        <span>{googleText}</span>
      </button>

      {errorMessage && (
        <div className="w-full mb-3 px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[11px] font-mono flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px]">warning</span>
          <span className="truncate">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <div className="space-y-1 text-xs">
          <label className="text-outline uppercase tracking-wider block font-mono text-[10px]">Candidate Email / Index</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="candidate@missioncontrol.edu" className="w-full h-10 px-3 rounded-lg bg-[#050b14]/80 border border-cyan-500/20 text-on-surface text-xs font-mono focus:border-cyan-400 focus:outline-none" />
        </div>

        <div className="space-y-1 text-xs">
          <label className="text-outline uppercase tracking-wider block font-mono text-[10px]">Security Passkey</label>
          <div className="relative">
            <input type={showPass ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••••••" className="w-full h-10 px-3 pr-9 rounded-lg bg-[#050b14]/80 border border-cyan-500/20 text-on-surface text-xs font-mono focus:border-cyan-400 focus:outline-none" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-2.5 top-2.5 text-outline hover:text-white">
              <span className="material-symbols-outlined text-[16px]">{showPass ? 'visibility' : 'visibility_off'}</span>
            </button>
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full h-11 mt-1 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50">
          <span>{loading ? 'Authenticating...' : 'Launch Mission Control ->'}</span>
          <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
        </button>
      </form>
    </div>
  );
}
