## 2026-01-14 - Exposed Secrets in Client-Side Logs
**Vulnerability:** A `console.log` statement was found in `src/app/caregiver-login/page.tsx` that explicitly logs the user's password in plain text during the login process.
**Learning:** Developers are using `console.log` to debug sensitive flows without removing them before committing. This suggests a need for stricter linting rules or pre-commit hooks that flag `console.log` usage, especially in authentication modules.
**Prevention:**
1.  Implement a linting rule (e.g., `no-console`) to warn or error on console usage in production builds.
2.  Educate the team on using the debugger instead of log statements for sensitive data.
3.  Add automated scanning for "password" or "secret" in changed files during CI.
