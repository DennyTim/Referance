const cacheName = 'v2';

// Call install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});

//Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  //Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clear Old Cache')
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

//Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service worker: Fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        //Make copy/clone of response
        const resClone = res.clone();
        //Open cache
        caches
          .open(cacheName)
          .then(cache => {
            //Add response
            cache.put(e.request, resClone);
          });
        return res;
      }).catch(err => caches.match(e.request).then(res => res))
  )
})