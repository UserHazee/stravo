// ⚡ STRAVO Progressive Web App Service Worker (Full Performance Edition)

// --- Dynamic versioning ensures users always get the latest files ---
const CACHE_VERSION = `v${new Date().getTime()}`;
const STATIC_CACHE = `stravo-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `stravo-dynamic-${CACHE_VERSION}`;
const MAX_DYNAMIC_ITEMS = 60;

// --- Core static files to pre-cache ---
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/vite.svg",
  "/manifest.webmanifest",
  "/manifest_logo.png",
  "/manifest_logo512.png",
  "/offline.html" // ✅ custom offline fallback
];

// --- INSTALL: Pre-cache essential files ---
self.addEventListener("install", (event) => {
  console.log("[SW] Installing and caching static assets...");
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting(); // activate immediately
});

// --- ACTIVATE: Clean up old caches ---
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating new version...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// --- FETCH: Smart caching for static + dynamic requests ---
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignore non-GET requests (like POST, PUT, etc.)
  if (request.method !== "GET") return;

  const requestURL = new URL(request.url);

  // --- Handle same-origin requests only (avoid CORS issues) ---
  if (requestURL.origin === location.origin) {
    // ✅ HTML Navigation fallback for offline
    if (request.mode === "navigate") {
      event.respondWith(
        fetch(request)
          .then((res) => cachePage(request, res))
          .catch(() => caches.match(request).then((r) => r || caches.match("/offline.html")))
      );
      return;
    }

    // ✅ Static assets (images, CSS, JS)
    if (
      request.destination === "image" ||
      request.url.includes("/assets/") ||
      request.url.endsWith(".js") ||
      request.url.endsWith(".css")
    ) {
      event.respondWith(
        caches.match(request).then((cached) => {
          const fetchPromise = fetch(request)
            .then((res) => cacheDynamic(request, res))
            .catch(() => cached);
          return cached || fetchPromise;
        })
      );
      return;
    }
  }

  // --- ✅ Handle API requests (runtime caching) ---
  if (requestURL.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request)
        .then((res) => cacheAPI(request, res))
        .catch(() => caches.match(request)) // offline API fallback
    );
    return;
  }
});

// --- Helper: Cache a page (HTML navigation) ---
function cachePage(request, response) {
  if (!response || response.status !== 200) return response;
  const clone = response.clone();
  caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
  return response;
}

// --- Helper: Cache dynamic assets (CSS, JS, Images) ---
function cacheDynamic(request, response) {
  if (!response || response.status !== 200) return response;
  const clone = response.clone();
  caches.open(DYNAMIC_CACHE).then((cache) => {
    cache.put(request, clone);
    trimCache(cache);
  });
  return response;
}

// --- Helper: Cache API responses ---
function cacheAPI(request, response) {
  if (!response || response.status !== 200) return response;
  const clone = response.clone();
  caches.open(DYNAMIC_CACHE).then((cache) => {
    cache.put(request, clone);
    trimCache(cache);
  });
  return response;
}

// --- Helper: Limit cache size ---
function trimCache(cache) {
  cache.keys().then((keys) => {
    if (keys.length > MAX_DYNAMIC_ITEMS) {
      cache.delete(keys[0]).then(() => trimCache(cache));
    }
  });
}

// --- Optional: Listen for messages (for future “Update Available” UI) ---
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
