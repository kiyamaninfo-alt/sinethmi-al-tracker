import { useState } from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginFooter from './LoginFooter';

export default function CandidateLogin() {
  const [lang, setLang] = useState('si');

  return (
    <main className="w-full min-h-screen bg-[#050811] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Ambient Depth Lighting */}
      <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      {/* Ambient Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img
          src="/assets/login/image_0.png"
          alt=""
          aria-hidden="true"
          className="w-[800px] h-[800px] object-contain filter grayscale"
        />
      </div>

      {/* Main Authentication Console Card */}
      <div className="relative z-10 w-full max-w-lg mx-auto rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center border border-outline-variant/20">
        <LoginHeader lang={lang} onLangChange={setLang} />
        <LoginForm lang={lang} />
        <LoginFooter />
      </div>
    </main>
  );
}
