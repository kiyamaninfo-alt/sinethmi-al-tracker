# Sinethmi A/L Tracker (krishsoft) - AGY / Gemini Rules
Stack: Vite + React + Tailwind v4 + Supabase + PWA

## 1. Micro-Files & Modular Architecture:
- **Strict Size Limit**: Keep every component and module under 80 lines. Split logic into small, focused files.
- **Directory Roles**:
  - `src/components/`: Pure visual/UI components only (< 80 lines each).
  - `src/services/`: Supabase client queries and API operations.
  - `src/constants/`: Syllabus metadata, subject configs, color schemes.
  - `src/hooks/`: Custom state management and lifecycle hooks.

## 2. Token Optimization & Tooling Protocols:
- **ast-grep / Tree-sitter MCP**: Always target specific functions or AST nodes. Never read or rewrite entire files when editing a single method.
- **Repomix**: When full codebase context is required, pack only `src/` using Repomix with strict ignore patterns (`node_modules/`, `dist/`, build artifacts).
- **Agent Skills**: Leverage modular skills for specialized tasks (marking, schema generation, evaluation) instead of massive multi-step single prompts.
- **Surgical Diffs**: Modify only the requested lines. Never reformat, refactor, or reorganize untouched working code.

## 3. Verification:
- Always verify changes via `npm run build` before finalizing.
