## 2024-05-23 - Credentials in Logs and Unignored Log Files

**Vulnerability:** I discovered that the login page (`src/app/caregiver-login/page.tsx`) was logging the user's email and password to the console via `console.log`. Additionally, a `server.log` file was present in the root directory and not ignored by `.gitignore`, potentially risking the exposure of sensitive runtime data if committed.

**Learning:** Logging credentials, even for debugging purposes during development, is a critical security risk as these logs can persist in browser history, be captured by error monitoring tools, or be seen by anyone looking at the console. Furthermore, failing to ignore log files in version control can lead to accidental leaks of sensitive environment information.

**Prevention:**
1.  **Never** log sensitive data like passwords, tokens, or PII.
2.  Use a linter rule (e.g., `no-console`) to flag `console.log` usage in production code.
3.  Ensure all log files (like `*.log`) are added to `.gitignore` immediately upon project setup.
4.  Periodically scan the codebase for sensitive keywords (password, secret, key) in log statements.
