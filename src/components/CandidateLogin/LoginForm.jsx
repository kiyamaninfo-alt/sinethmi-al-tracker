import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from './GoogleLogo';

export default function LoginForm({ lang = 'si' }) {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/command-center');
  };

  const googleText = lang === 'ta' ? 'Google கணக்கு மூலம் உள்நுழைக' : 'Google ගිණුමෙන් ඇතුල් වන්න';

  return (
    <div className="w-full flex flex-col items-center mt-3.5">
      <button
        type="button"
        onClick={() => navigate('/command-center')}
        className="w-full h-10 rounded-lg bg-surface-container-high/80 hover:bg-surface-variant text-on-surface flex items-center justify-center gap-2.5 transition-all mb-3.5 border border-cyan-500/20 text-xs font-semibold shadow-sm cursor-pointer group"
      >
        <GoogleLogo className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
        <span>{googleText} (Continue with Google)</span>
      </button>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <div className="space-y-1 text-xs">
          <label className="text-outline uppercase tracking-wider block font-mono text-[10px]">
            Candidate Index / Identifier
          </label>
          <input
            type="text" value={id} onChange={(e) => setId(e.target.value)}
            placeholder="candidate@missioncontrol.edu / A/L ID"
            className="w-full h-10 px-3 rounded-lg bg-[#050b14]/80 border border-cyan-500/20 text-on-surface text-xs font-mono focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="space-y-1 text-xs">
          <label className="text-outline uppercase tracking-wider block font-mono text-[10px]">
            Security Passkey
          </label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'} value={pass} onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••••••"
              className="w-full h-10 px-3 pr-9 rounded-lg bg-[#050b14]/80 border border-cyan-500/20 text-on-surface text-xs font-mono focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="button" onClick={() => setShowPass(!showPass)}
              className="absolute right-2.5 top-2.5 text-outline hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px]">{showPass ? 'visibility' : 'visibility_off'}</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-11 mt-1 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
        >
          <span>Launch Mission Control -&gt;</span>
          <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
        </button>
      </form>
    </div>
  );
}
