## 2024-04-12 - Critical: Sensitive Data Exposure in Logs
**Vulnerability:** User passwords were being logged to the browser console during login.
**Learning:** Developers often add debug logs during development and forget to remove them. `console.log` with sensitive variables is a common pattern to watch for.
**Prevention:**
1. Use a logger that can redact sensitive keys.
2. Add linting rules to flag `console.log` in production code.
3. Review all form submission handlers for logging.
