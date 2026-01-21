# Sentinel Journal

## 2024-05-22 - Password Exposure in Console Logs
**Vulnerability:** A `console.log` statement in `src/app/caregiver-login/page.tsx` was logging the user's password in plain text during the login submission process.
**Learning:** Developers often add logging for debugging purposes but forget to remove it before production. Even client-side logs are dangerous as they can be persisted or viewed by malicious actors with access to the browser or via XSS.
**Prevention:**
1. Use ESLint rules like `no-console` (warn/error) to flag console usage.
2. Implement pre-commit hooks that grep for `console.log`.
3. Conduct code reviews specifically checking for sensitive data in logging statements.
