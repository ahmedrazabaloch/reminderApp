var staticCacheName = "Mind Minder App";

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

//for push notifcation
self.addEventListener("push", function (event) {
  const options = {
    body: event.data.text(),
    icon: "icon.png",
    badge: "badge.png",
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
});
