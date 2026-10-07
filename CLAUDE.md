# Project: krishsoft
Developer: Anjana

## Guidelines for Claude Code:
1. **Targeted Inspection**: Never read whole files when searching for functions or variables. Always prioritize `ripgrep` (`rg`) and `ast-grep` to locate precise lines.
2. **Antigravity Bug-Fixing Rule (Surgical Fixes Only)**: 
   - When fixing bugs in code generated or maintained by Antigravity, treat the existing architecture, styling, and framework choices as intentional.
   - Do NOT refactor, rewrite, or modernize working code.
   - Apply only the absolute minimal, targeted changes (surgical diffs) required to fix the specific issue.
3. **Ignore Heavy Paths**: Never inspect `node_modules`, `.git`, or large build output directories.
4. **Concise Responses**: Provide direct technical explanations and exact terminal commands without conversational fluff.
