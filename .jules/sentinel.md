## 2024-05-21 - Password Exposure in Logs
**Vulnerability:** User password was being logged to the console in `caregiver-login/page.tsx` during the login process.
**Learning:** Developers sometimes leave debug logs (`console.log`) that inadvertently expose sensitive data like passwords or PII.
**Prevention:** Implement strict linting rules (e.g., `no-console`) for production builds, or use a custom logger that automatically redacts sensitive keys (password, token, secret) before logging. Always review logs during code reviews.
