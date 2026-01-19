## 2024-05-22 - False Positive Code Review on Feature Branches
**Vulnerability:** Automated reviews flagging "scaffolding" on existing code.
**Learning:** When working on a feature branch where `main` is empty, automated reviews compare against `main` and see the entire codebase as "newly added", leading to rejection based on size constraints.
**Prevention:** Be aware of this validation gap. Ensure PR descriptions explicitly clarify the base branch and the actual scope of changes (e.g., "Diff appears large due to empty main; actual changes are < 50 lines").
