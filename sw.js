const cachName = "ecuclaasAgent-v1";
const assets = [
  "/",
  "/index.html",
  "/icons/icon.png"
  ];

//install event
self.addEventListner("install", (e) => {
  e.waitUntill(
    caches.open(cacheName).then((cache) => {
    return cache.addAll(assets);
  })
);
});

//fetch event
self.addEventListner("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
    );
});
