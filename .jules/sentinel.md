## 2024-04-18 - Sensitive Data Exposure in Client-Side Logs
**Vulnerability:** Hardcoded `console.log` statement in login component exposed user password in plaintext to the browser console.
**Learning:** Developers sometimes use `console.log` for debugging and forget to remove it. Even client-side logs are a security risk as they persist in the browser and can be seen by anyone with access to the unlocked device or via XSS.
**Prevention:** Use a logger that can be stripped in production, or use lint rules (`no-console`) to prevent committing `console.log` statements.
