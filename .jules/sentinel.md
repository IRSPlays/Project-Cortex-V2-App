## 2024-05-23 - Sensitive Data Exposure in Logs
**Vulnerability:** A `console.log` statement in the login page was logging plain-text passwords to the console/server logs.
**Learning:** Developers often use `console.log` for debugging and forget to remove it. In a client-side context, this exposes credentials to anyone viewing the browser console (potentially via XSS or physical access). In a server-side context (Next.js server components or SSR), this logs passwords to persistent server logs.
**Prevention:**
1. Use a linting rule like `no-console` or `no-console-log` in production builds.
2. Implement pre-commit hooks that scan for sensitive variable names (password, secret, key) inside `console.log` statements.
3. Use a dedicated logger that automatically scrubs sensitive fields.
