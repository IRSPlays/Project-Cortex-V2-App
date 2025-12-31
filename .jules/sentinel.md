## 2024-05-20 - Exposed Credentials in Logs

**Vulnerability:** Found client-side code logging credentials to the console in `src/app/caregiver-login/page.tsx`. Also ensuring `server.log` is ignored.

**Learning:** Logging entire payload objects without sanitization is a common source of credential leakage.

**Prevention:**
1.  Never log sensitive fields (password, token, etc.).
2.  Add `*.log` to `.gitignore`.
