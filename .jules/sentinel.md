## 2026-01-29 - Client-Side Password Logging
**Vulnerability:** A `console.log` statement in the caregiver login component (`src/app/caregiver-login/page.tsx`) was outputting the user's password in plaintext to the browser console during form submission.
**Learning:** Developers often add logging for debugging purposes and forget to remove it. In client-side code, `console.log` is visible to anyone inspecting the page, making it a critical risk for credentials.
**Prevention:** Implement strict linting rules (like `no-console` or specific custom rules) to flag logging of variables named `password`, `secret`, `key`, etc. Perform thorough code reviews checking for debug code left behind.
