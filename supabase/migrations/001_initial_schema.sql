-- ==============================================================================
-- Sinethmi A/L Tracker (krishsoft) - Initial Production Schema Migration
-- Migration: 001_initial_schema.sql
-- Stack: Supabase PostgreSQL + Auth + Row Level Security (RLS)
-- ==============================================================================

-- 1. EXTENSIONS & HELPER FUNCTIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Trigger function to automatically refresh updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==============================================================================
-- 2. TABLE DEFINITIONS
-- ==============================================================================

-- TABLE 1: profiles (1:1 with auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  candidate_index TEXT UNIQUE,
  name TEXT NOT NULL DEFAULT 'Sinethmi Rathnayake',
  avatar_url TEXT,
  school TEXT DEFAULT 'Visakha Vidyalaya Colombo',
  province TEXT DEFAULT 'Western',
  district TEXT DEFAULT 'Colombo',
  town TEXT DEFAULT 'Bambalapitiya',
  phone TEXT,
  stream TEXT NOT NULL DEFAULT 'Technology',
  target_year SMALLINT NOT NULL DEFAULT 2028,
  custom_exam_date DATE,
  target_rank TEXT DEFAULT 'Top 50 Island Rank',
  target_z_score NUMERIC(4, 3) DEFAULT 2.450,
  subject_mean NUMERIC(5, 2) DEFAULT 52.50,
  standard_deviation NUMERIC(5, 2) DEFAULT 14.20,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- TABLE 2: student_preferences (1:1 with profiles)
CREATE TABLE IF NOT EXISTS public.student_preferences (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  selected_technique TEXT NOT NULL DEFAULT 'rule_50_10',
  duration_minutes SMALLINT NOT NULL DEFAULT 50 CHECK (duration_minutes > 0),
  break_minutes SMALLINT NOT NULL DEFAULT 10 CHECK (break_minutes >= 0),
  rounds SMALLINT NOT NULL DEFAULT 3 CHECK (rounds > 0),
  sound_enabled BOOLEAN NOT NULL DEFAULT true,
  sound_track TEXT NOT NULL DEFAULT 'radar_ping',
  random_sound BOOLEAN NOT NULL DEFAULT false,
  video_enabled BOOLEAN NOT NULL DEFAULT false,
  video_track TEXT NOT NULL DEFAULT 'lofi_study',
  custom_video_url TEXT,
  random_video BOOLEAN NOT NULL DEFAULT false,
  timer_color TEXT NOT NULL DEFAULT 'cyan',
  font_size TEXT NOT NULL DEFAULT 'default',
  theme TEXT NOT NULL DEFAULT 'cyberpunk',
  language VARCHAR(5) NOT NULL DEFAULT 'si',
  master_notifications BOOLEAN NOT NULL DEFAULT true,
  study_session_alerts BOOLEAN NOT NULL DEFAULT true,
  daily_milestones BOOLEAN NOT NULL DEFAULT true,
  exam_countdowns BOOLEAN NOT NULL DEFAULT true,
  key_sound_enabled BOOLEAN NOT NULL DEFAULT true,
  vibrate_enabled BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- TABLE 3: subjects
CREATE TABLE IF NOT EXISTS public.subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  sinhala TEXT,
  color TEXT NOT NULL DEFAULT 'cyan',
  target_score SMALLINT NOT NULL DEFAULT 75 CHECK (target_score BETWEEN 0 AND 100),
  weekly_hours NUMERIC(4, 1) NOT NULL DEFAULT 8.0,
  benchmark_hours NUMERIC(5, 1) NOT NULL DEFAULT 20.0,
  total_units SMALLINT NOT NULL DEFAULT 14,
  credits NUMERIC(3, 1) DEFAULT 4.0,
  display_order SMALLINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_user_subject_slug UNIQUE (user_id, slug)
);

-- TABLE 4A: syllabus_units
CREATE TABLE IF NOT EXISTS public.syllabus_units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  unit_number SMALLINT NOT NULL,
  title TEXT NOT NULL,
  sinhala_title TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_subject_unit_number UNIQUE (subject_id, unit_number)
);

-- TABLE 4B: syllabus_subunits
CREATE TABLE IF NOT EXISTS public.syllabus_subunits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id UUID NOT NULL REFERENCES public.syllabus_units(id) ON DELETE CASCADE,
  sub_number TEXT NOT NULL,
  title TEXT NOT NULL,
  target_hours SMALLINT NOT NULL DEFAULT 4,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_unit_sub_number UNIQUE (unit_id, sub_number)
);

-- TABLE 5: study_sessions
CREATE TABLE IF NOT EXISTS public.study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  subunit_id UUID REFERENCES public.syllabus_subunits(id) ON DELETE SET NULL,
  topic_name TEXT NOT NULL,
  session_date DATE NOT NULL DEFAULT CURRENT_DATE,
  start_time TIME NOT NULL,
  stop_time TIME NOT NULL,
  duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
  session_mode VARCHAR(20) NOT NULL DEFAULT 'study',
  round_number SMALLINT NOT NULL DEFAULT 1,
  rounds_completed SMALLINT NOT NULL DEFAULT 1,
  technique_used TEXT DEFAULT 'rule_50_10',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- TABLE 6: paper_evaluations
CREATE TABLE IF NOT EXISTS public.paper_evaluations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  paper_type VARCHAR(20) NOT NULL CHECK (paper_type IN ('unit_paper', 'full_paper', 'model_paper')),
  paper_number SMALLINT NOT NULL DEFAULT 1,
  unit_code TEXT,
  paper_title TEXT NOT NULL,
  score_percentage NUMERIC(5, 2) NOT NULL CHECK (score_percentage BETWEEN 0 AND 100),
  grade VARCHAR(5) DEFAULT 'A',
  mcq_score NUMERIC(5, 2),
  essay_score NUMERIC(5, 2),
  speed_trial_score NUMERIC(5, 2),
  evaluated_date DATE NOT NULL DEFAULT CURRENT_DATE,
  attempts_count SMALLINT NOT NULL DEFAULT 1,
  is_printed BOOLEAN NOT NULL DEFAULT false,
  print_status VARCHAR(30) NOT NULL DEFAULT 'None',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- TABLE 7: spaced_repetition_tasks
CREATE TABLE IF NOT EXISTS public.spaced_repetition_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  unit_code TEXT NOT NULL,
  lesson_title TEXT NOT NULL,
  description TEXT,
  interval_days SMALLINT NOT NULL DEFAULT 28,
  cycle_label TEXT DEFAULT 'Cycle 1 (28)',
  retention_index NUMERIC(5, 2) DEFAULT 94.80,
  needs_urgent_model_paper BOOLEAN NOT NULL DEFAULT false,
  scheduled_date DATE NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- TABLE 8: lesson_queue_items
CREATE TABLE IF NOT EXISTS public.lesson_queue_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  queue_type VARCHAR(30) NOT NULL CHECK (queue_type IN ('learned_not_studied', 'pending_instruction')),
  unit_code TEXT NOT NULL,
  lesson_title TEXT NOT NULL,
  description TEXT,
  status VARCHAR(30) NOT NULL DEFAULT 'Queued',
  elapsed_days SMALLINT NOT NULL DEFAULT 0,
  study_hours_logged NUMERIC(4, 1) NOT NULL DEFAULT 0.0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- TABLE 9: daily_priorities
CREATE TABLE IF NOT EXISTS public.daily_priorities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  priority_order SMALLINT NOT NULL CHECK (priority_order BETWEEN 1 AND 6),
  subject_code VARCHAR(10) NOT NULL DEFAULT 'ALL',
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  urgency_label TEXT NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  target_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_user_priority_order_target_date UNIQUE (user_id, priority_order, target_date)
);

-- ==============================================================================
-- 3. INDEXES FOR PERFORMANCE OPTIMIZATION
-- ==============================================================================

-- Profiles indexes
CREATE INDEX IF NOT EXISTS idx_profiles_candidate_index ON public.profiles(candidate_index);

-- Subjects indexes
CREATE INDEX IF NOT EXISTS idx_subjects_user_id ON public.subjects(user_id);
CREATE INDEX IF NOT EXISTS idx_subjects_slug ON public.subjects(user_id, slug);

-- Syllabus units & subunits indexes
CREATE INDEX IF NOT EXISTS idx_syllabus_units_subject_id ON public.syllabus_units(subject_id);
CREATE INDEX IF NOT EXISTS idx_syllabus_subunits_unit_id ON public.syllabus_subunits(unit_id);

-- Study sessions indexes
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_id ON public.study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_subject_id ON public.study_sessions(subject_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_session_date ON public.study_sessions(user_id, session_date);
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_created ON public.study_sessions(user_id, created_at DESC);

-- Paper evaluations indexes
CREATE INDEX IF NOT EXISTS idx_paper_evaluations_user_id ON public.paper_evaluations(user_id);
CREATE INDEX IF NOT EXISTS idx_paper_evaluations_subject_id ON public.paper_evaluations(subject_id);
CREATE INDEX IF NOT EXISTS idx_paper_evaluations_evaluated_date ON public.paper_evaluations(user_id, evaluated_date);
CREATE INDEX IF NOT EXISTS idx_paper_evaluations_paper_type ON public.paper_evaluations(user_id, paper_type);

-- Spaced repetition tasks indexes
CREATE INDEX IF NOT EXISTS idx_spaced_rep_user_id ON public.spaced_repetition_tasks(user_id);
CREATE INDEX IF NOT EXISTS idx_spaced_rep_scheduled_date ON public.spaced_repetition_tasks(user_id, scheduled_date);
CREATE INDEX IF NOT EXISTS idx_spaced_rep_is_completed ON public.spaced_repetition_tasks(user_id, is_completed);

-- Lesson queue items indexes
CREATE INDEX IF NOT EXISTS idx_lesson_queue_user_id ON public.lesson_queue_items(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_queue_user_queue_type ON public.lesson_queue_items(user_id, queue_type);

-- Daily priorities indexes
CREATE INDEX IF NOT EXISTS idx_daily_priorities_user_date ON public.daily_priorities(user_id, target_date);

-- ==============================================================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS across all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.syllabus_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.syllabus_subunits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.paper_evaluations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spaced_repetition_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_queue_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_priorities ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can manage own profile"
  ON public.profiles FOR ALL
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Student preferences policies
CREATE POLICY "Users can manage own preferences"
  ON public.student_preferences FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Subjects policies
CREATE POLICY "Users can manage own subjects"
  ON public.subjects FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Syllabus units policies (access inherited through parent subject ownership)
CREATE POLICY "Users can manage own syllabus units"
  ON public.syllabus_units FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.subjects s WHERE s.id = subject_id AND s.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.subjects s WHERE s.id = subject_id AND s.user_id = auth.uid()));

-- Syllabus subunits policies (access inherited through parent unit -> subject ownership)
CREATE POLICY "Users can manage own syllabus subunits"
  ON public.syllabus_subunits FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.syllabus_units u
    JOIN public.subjects s ON s.id = u.subject_id
    WHERE u.id = unit_id AND s.user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.syllabus_units u
    JOIN public.subjects s ON s.id = u.subject_id
    WHERE u.id = unit_id AND s.user_id = auth.uid()
  ));

-- Study sessions policies
CREATE POLICY "Users can manage own study sessions"
  ON public.study_sessions FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Paper evaluations policies
CREATE POLICY "Users can manage own paper evaluations"
  ON public.paper_evaluations FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Spaced repetition tasks policies
CREATE POLICY "Users can manage own spaced repetition tasks"
  ON public.spaced_repetition_tasks FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Lesson queue items policies
CREATE POLICY "Users can manage own lesson queue items"
  ON public.lesson_queue_items FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Daily priorities policies
CREATE POLICY "Users can manage own daily priorities"
  ON public.daily_priorities FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ==============================================================================
-- 5. AUTOMATIC UPDATED_AT TRIGGERS
-- ==============================================================================

CREATE TRIGGER trg_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_student_preferences_updated_at
  BEFORE UPDATE ON public.student_preferences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_subjects_updated_at
  BEFORE UPDATE ON public.subjects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_syllabus_units_updated_at
  BEFORE UPDATE ON public.syllabus_units
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_syllabus_subunits_updated_at
  BEFORE UPDATE ON public.syllabus_subunits
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_study_sessions_updated_at
  BEFORE UPDATE ON public.study_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_paper_evaluations_updated_at
  BEFORE UPDATE ON public.paper_evaluations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_spaced_repetition_tasks_updated_at
  BEFORE UPDATE ON public.spaced_repetition_tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_lesson_queue_items_updated_at
  BEFORE UPDATE ON public.lesson_queue_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_daily_priorities_updated_at
  BEFORE UPDATE ON public.daily_priorities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
