# Sinethmi A/L Tracker (krishsoft)
Stack: Vite + React + Tailwind v4 + Supabase + PWA

## Architecture Rule (Micro-Files & Modular Design):
1. **Never write large monolithic files**: Break components and logic into small, dedicated files (< 80 lines).
2. **Directory Structure**:
   - `src/components/`: Pure UI presentation components (e.g., SubjectCard.jsx, ProgressBar.jsx).
   - `src/services/`: Supabase queries and data fetching only.
   - `src/constants/`: Static subjects, A/L syllabus metadata, colors.
3. **Surgical Fixes**: Inspect and edit only the targeted micro-file. Never rewrite unrelated modules.
4. **Tool Usage**: Use `rg` and `ast-grep` to jump directly to target functions.
