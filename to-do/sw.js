importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
        ],
    }),
);

workbox.precaching.precacheAndRoute([
  {
    "url": "app.svg",
    "revision": "f606832809fd0f14cd3a25c8179cff56"
  },
  {
    "url": "index.html",
    "revision": "b9d485748a26ed8199e54ffddbd79dcc"
  },
  {
    "url": "README.md",
    "revision": "4bf4dd0308de5fa88c03257d7c6f2231"
  },
  {
    "url": "resource/css/reset.min.css",
    "revision": "d3d1bfe449ddec8532207b99b2a1031e"
  },
  {
    "url": "resource/css/style.css",
    "revision": "7b68291323275988da6dc66cda60ba2a"
  },
  {
    "url": "resource/js/main.js",
    "revision": "27de6a0160da4c6f983c88720036069d"
  }
]);