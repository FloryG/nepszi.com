const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about-us.html',
  '/blog-1.html',
  '/blog-2.html',
  '/blog.html',
  '/csengu-details.html',
  '/events.html',
  '/flori-details.html',
  '/gallery.html',
  '/hala-details.html',
  '/levi-details.html',
  '/marki-details.html',
  '/menu.html',
  '/music.html',
  '/netti-details.html',
  '/nyaralas.html',
  '/soma-details.html',
  '/tami-details.html',
  '/webshop.html',
  'css/main.css',       // your CSS file(s)
  'js/main.js',           // your JS file(s)
  '/icons/android-chrome-192x192.png',
  '/icons/android-chrome-512x512.png',
  '/icons/apple-touch-icon.png'
];

// Install event — caching essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate event — clean up old caches if needed
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// Fetch event — respond with cached resources or fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});