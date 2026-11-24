// Settings the page reads. If this file doesn't load, the page falls back to the production bases and shows no contact links.
//   apiBase, appBase: where the page calls and where its sign-up links go.
//   phone: the number shown in the header and the pricing section, such as '+1 (555) 010-0199'. It becomes a tel: link.
//     At least 7 digits, no extension and no letters.
//   bookUrl: the calendar page for "Book 15 minutes", an https link. It opens in a new tab.
//   turnstileSiteKey: switches on Cloudflare's check in the CAGE box. Set it before the API has its secret,
//     because once the API has the secret every lookup needs a token. Empty, the box sends no token.
window.SPARTAN_SITE = {
  apiBase: 'https://api.spartansystems.us/api',
  appBase: 'https://data.spartansystems.us',
  phone: '',
  bookUrl: '',
  turnstileSiteKey: '0x4AAAAAAGRa4tWSVqvNaGe5'
};
