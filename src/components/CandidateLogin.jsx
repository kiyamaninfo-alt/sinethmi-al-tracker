import LoginHeader from './login/LoginHeader';
import LoginForm from './login/LoginForm';
import LoginFooter from './login/LoginFooter';

export default function CandidateLogin() {
  return (
    <main className="w-full min-h-screen bg-surface flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full min-h-[92vh] flex items-center justify-center py-6 px-3 sm:px-6 overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
        {/* Ambient Depth Lighting */}
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary-container/15 blur-3xl pointer-events-none -rotate-12" />
        <div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-surface-container-lowest/80 blur-2xl pointer-events-none" />

        {/* Ambient Background Watermark Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <img
            src="/assets/login/image_0.png"
            alt=""
            aria-hidden="true"
            className="w-[800px] h-[800px] object-contain filter grayscale"
          />
        </div>

        {/* Main Authentication Console Card */}
        <div className="relative w-full max-w-xl mx-auto rounded-xl bg-surface-container-low/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 flex flex-col items-center border border-outline-variant/20">
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>
    </main>
  );
}
