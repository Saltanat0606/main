const CACHE_NAME = 'menu-calories-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/pages/about.html',
  '/pages/blog.html',
  '/pages/calories.html',
  '/pages/contact.html',
  '/pages/dashboard.html',
  '/pages/login.html',
  '/pages/menu.html',
  '/pages/profile.html',
  '/pages/register.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});