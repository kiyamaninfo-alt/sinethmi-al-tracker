export const ONBOARDING_STEPS = [
  {
    id: 'tour-name',
    targetId: 'candidate-name-input',
    title: '1. Candidate Full Name',
    desc: 'Enter your official candidate name. This will personalize your Mission Control telemetry HUD.'
  },
  {
    id: 'tour-whatsapp',
    targetId: 'candidate-phone-input',
    title: '2. WhatsApp Number (Alerts & Telemetry)',
    desc: 'Provide your WhatsApp contact number (+94) for daily study reminders, milestone alerts, and exam sync.'
  },
  {
    id: 'tour-stream',
    targetId: 'candidate-stream-select',
    title: '3. Select Examination Stream',
    desc: 'Choose your A-Level examination stream (Technology, Physical Science, Bio, Commerce, Arts) to load subject tracks.'
  },
  {
    id: 'tour-year',
    targetId: 'candidate-target-year',
    title: '4. Target Exam Year',
    desc: 'Select your target examination cohort year (e.g. 2026, 2027, 2028) to synchronize live countdown timers.'
  },
  {
    id: 'tour-save',
    targetId: 'candidate-save-identity',
    title: '5. Mission Identity & Launch',
    desc: 'Review your candidate parameters and click "Save Candidate Profile & Enter Mission Control" to launch your dashboard.'
  }
];
