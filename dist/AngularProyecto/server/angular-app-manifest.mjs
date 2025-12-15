
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/main"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home/productos",
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/home/productos"
  },
  {
    "renderMode": 2,
    "route": "/home/carrito"
  },
  {
    "renderMode": 2,
    "route": "/home/perfil"
  },
  {
    "renderMode": 2,
    "route": "/registro"
  },
  {
    "renderMode": 2,
    "route": "/recupera-pass"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31064, hash: 'b0a35ff27ba1788ba8009497af10a231d9714289a341b76d52ff1b8ae4c3c250', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17687, hash: 'b591dd3de05b80aec1410e688a91ff50f57eebfbea5fd12c22a018ec4a52a98e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/index.html': {size: 31688, hash: 'd242713bc772b444782d197ab87c6ae097db368905f273b985f85c7372b0ccd3', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'recupera-pass/index.html': {size: 49987, hash: 'ccfa369e42f9a185fc6492477ec3b6424e19c4dedf23a179bb7804eefe583f5e', text: () => import('./assets-chunks/recupera-pass_index_html.mjs').then(m => m.default)},
    'registro/index.html': {size: 52965, hash: 'eadf42e22c03d7852f4278c6c09334b58fcd97154538f06de6aea6074d4af2be', text: () => import('./assets-chunks/registro_index_html.mjs').then(m => m.default)},
    'index.html': {size: 51355, hash: '3db83c4f1cf058849d9660af49c76463e78e832bb2ee0db2e470a5a307340ad7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/perfil/index.html': {size: 71028, hash: 'ca58dfca5a0ed171fd506b5f1a640ac1140d90fee5dfc1c524f0cf872854fc15', text: () => import('./assets-chunks/home_perfil_index_html.mjs').then(m => m.default)},
    'home/carrito/index.html': {size: 74134, hash: 'd65bc581f5cdbb34e0b23a27fe6059c69eafe74bc0ceefd7d4c6bafcaebe0cba', text: () => import('./assets-chunks/home_carrito_index_html.mjs').then(m => m.default)},
    'home/productos/index.html': {size: 89637, hash: '554de0b8f1cfc60afe97c6e61199f21848a848b369798dde727d441da677251f', text: () => import('./assets-chunks/home_productos_index_html.mjs').then(m => m.default)},
    'styles-OXZQV7LF.css': {size: 13871, hash: 'NvTX6zDeUrY', text: () => import('./assets-chunks/styles-OXZQV7LF_css.mjs').then(m => m.default)}
  },
};
