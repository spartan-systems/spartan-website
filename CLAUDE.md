# Spartan Systems Marketing Site

Single-page static marketing site served by GitHub Pages at **spartansystems.us** (apex domain via `CNAME` file). No build step, no framework, no dependencies.

- Everything lives in `index.html`: inline CSS (custom properties like `--navy`, `--blue2`), one inline script (IntersectionObserver reveal animations + screenshot tab switcher). Only external resource is Google Fonts (Inter).
- All CTAs point to the product app at `https://data.spartansystems.us/login`; contact is `mailto:sales@spartansystems.us`.
- The `screen_*.png` screenshots are of the `government-data` app and go stale when its UI changes.
- Deploy = push to the default branch (Pages serves the branch directly; there is no Actions workflow).
