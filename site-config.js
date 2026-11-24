// Settings the page reads. If this file doesn't load, the page falls back to the production bases and no Turnstile key.
//   apiBase, appBase: where the page calls and where its sign-up links go.
//   turnstileSiteKey: switches on Cloudflare's check in the CAGE box. Set it before the API has its secret,
//   because once the API has the secret every lookup needs a token. Empty, the box sends no token.
window.SPARTAN_SITE = {
  apiBase: 'https://api.spartansystems.us/api',
  appBase: 'https://data.spartansystems.us',
  turnstileSiteKey: ''
};
