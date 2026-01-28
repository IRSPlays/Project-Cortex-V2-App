## 2024-05-22 - Password Exposure in Console Logs
**Vulnerability:** Found `console.log` explicitly logging the user's password in `src/app/caregiver-login/page.tsx` during form submission.
**Learning:** Developers often use `console.log` for debugging and forget to remove it. In client-side code, this exposes sensitive data to anyone with browser dev tools open.
**Prevention:** Implement ESLint rules like `no-console` (warn or error) in production builds, or use a logger that strips sensitive fields.
