# Spartan Systems Marketing Site

Static marketing site (home page plus a privacy policy) served by GitHub Pages at **spartansystems.us** (apex domain via `CNAME` file). No build step, no framework, no dependencies.

- `privacy/index.html` is the privacy policy (served at `/privacy/`), linked from the footer here and from the app. Keep it in step with what the product actually collects and which providers receive data.
- Everything else lives in `index.html`: inline CSS (custom properties like `--navy`, `--blue2`), one inline script (IntersectionObserver reveal animations + screenshot tab switcher). External resources are Google Fonts (Inter) and the Google Ads tag (`AW-17734229904`, in the `<head>` of both pages, ad personalization off; the policy's cookies section depends on that).
- All CTAs point to the product app at `https://data.spartansystems.us/login`; contact is `mailto:sales@spartansystems.us`.
- The `screen_*.png` screenshots are of the `government-data` app and go stale when its UI changes.
- Deploy = push to the default branch (Pages serves the branch directly; there is no Actions workflow).
