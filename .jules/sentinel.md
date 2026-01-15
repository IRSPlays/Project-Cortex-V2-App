## 2024-05-23 - Critical Password Exposure in Logs
**Vulnerability:** Found `console.log` statement exposing plain-text user passwords in the login handler.
**Learning:** Developers sometimes leave debug logs in production code, risking credential leakage. This was found via grep.
**Prevention:** Enforce eslint rules (no-console) or use a custom logger that sanitizes sensitive fields. Add pre-commit hooks to scan for 'password' in logs.
