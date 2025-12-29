## 2024-05-23 - Exposed Password in Console Logs
**Vulnerability:** Found `console.log('Logging in with:', { email, password });` in `CaregiverLogin` component.
**Learning:** Developers often leave debug logs in production code, exposing sensitive data like passwords.
**Prevention:** Enforce eslint rules like `no-console` (or specific warnings for敏感 data) and conduct code reviews focusing on debug statements.
