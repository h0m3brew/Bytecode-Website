/* eslint-disable no-restricted-globals, no-undef, no-console */

console.log('Service worker file opened!');
/* Service worker conflicts with serving pdf's.
   When that's fixed we'll reregister service workers.
const CACHE_NAME = 'bytecode';
const urlsToCache = ['/', '/over', '/services', '/cases', '/contact'];

self.addEventListener('install', event => {
    console.log('Service worker installing...');
    const preLoaded = caches
        .open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
        .then(() => console.log('Service worker installed!'));
    event.waitUntil(preLoaded);
});

self.addEventListener('fetch', event => {
    console.log('Service worker fetching...');
    const response = caches
        .match(event.request)
        .then(match => match || fetch(event.request))
        .then(() => console.log('Service worker fetched!'));
    event.respondWith(response);
});
*/