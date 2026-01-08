## 2024-05-22 - [Credential Leak in Logs]
**Vulnerability:** Found `console.log` exposing user credentials (email/password) in the login component. Also found `server.log` committed to the repo.
**Learning:** Developers often leave debug logs in production code, which can leak sensitive data. Default gitignores for Next.js might not catch all custom log files.
**Prevention:** Use a logger that can be configured to silence specific levels in production. Enforce strict linting rules against `console.log`. Ensure `*.log` is in `.gitignore`.
