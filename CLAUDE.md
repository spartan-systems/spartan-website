# Spartan Systems Marketing Site

Static marketing site (home page plus a privacy policy) served by GitHub Pages at **spartansystems.us** (apex domain via `CNAME` file). No build step, no framework, no dependencies.

- `privacy/index.html` is the privacy policy (served at `/privacy/`), linked from the footer here and from the app. Keep it in step with what the product actually collects and which providers receive data.
- Everything else lives in `index.html`: inline CSS (custom properties like `--navy`, `--blue2`), one inline script (IntersectionObserver reveal animations + screenshot tab switcher). Only external resource is Google Fonts (Inter).
- All CTAs point to the product app at `https://data.spartansystems.us/login`; contact is `mailto:sales@spartansystems.us`.
- The `screen_*.png` screenshots are of the `government-data` app and go stale when its UI changes.
- Deploy = push to the default branch (Pages serves the branch directly; there is no Actions workflow).
