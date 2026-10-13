import { useAppLanguage } from '../../hooks/useAppLanguage';
import LandingNavbar from './LandingNavbar';
import LandingHeroSection from './LandingHeroSection';
import ProblemSolutionSection from './ProblemSolutionSection';
import WorkflowStepsSection from './WorkflowStepsSection';
import InteractivePlaygroundSection from './InteractivePlaygroundSection';
import SocialProofSection from './SocialProofSection';
import LandingFooterCta from './LandingFooterCta';

export default function StudyTrackerLandingPage() {
  const [lang, setLang] = useAppLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      <LandingNavbar lang={lang} onLangChange={setLang} />
      <main>
        <LandingHeroSection lang={lang} />
        <ProblemSolutionSection lang={lang} />
        <WorkflowStepsSection />
        <InteractivePlaygroundSection />
        <SocialProofSection />
      </main>
      <LandingFooterCta />
    </div>
  );
}

