-- Migration: 002_add_click_sound.sql
-- Add click_sound_enabled column to student_preferences
ALTER TABLE public.student_preferences 
ADD COLUMN IF NOT EXISTS click_sound_enabled BOOLEAN NOT NULL DEFAULT true;
