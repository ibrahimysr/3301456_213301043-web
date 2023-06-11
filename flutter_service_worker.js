'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "846e3a5991749865e4e5a326b7469503",
"assets/assets/%25C3%2587ikolata.jpg": "99b1376eae79bb2f7ba1a43000ba0feb",
"assets/assets/%25C3%2587ilek.jpg": "2a9b5e8f68de225af3da202e381251fb",
"assets/assets/Americano.jpg": "d94337096cfec3da62a559e7f13a1f4f",
"assets/assets/animasyon/kalp.json": "a9405bc4b8526e47fe53546bccc047cf",
"assets/assets/B%25C3%25B6%25C4%259F%25C3%25BCrtlen.jpg": "c5695d3c288a0a2a115c338cd14f7d44",
"assets/assets/Baklava.jpg": "11b6a25e5b061d8b5aee7749dd1c7f71",
"assets/assets/Beyran.jpg": "3a651c493920127aad2284a0b7b4bd4c",
"assets/assets/bg.png": "d03ec45fe1bed7e84a71e169608aa464",
"assets/assets/card_bg.png": "2c4252905bf68cbcaccf8adaff09a455",
"assets/assets/deneme1.jpg": "2fefea2df8db87faa5fd636067dba010",
"assets/assets/Espresso.jpg": "4a630e690ac07f5f7d684c2cdab32d4a",
"assets/assets/facebook.png": "f7ad1d5639b8594b533397036a1999a0",
"assets/assets/Fanta.jpg": "1ec31184c5d248656509ef5a3b57399d",
"assets/assets/FlatWhite.jpg": "a11ef0a3caf3c3f31896d0a93fd6b855",
"assets/assets/fonts/CormorantGaramond-Italic.ttf": "6f96488d4a6352608c20b2621e5b2227",
"assets/assets/google.png": "0b99b093ebb5303f3cdb691cfdbc54ed",
"assets/assets/K%25C3%25BCnefe.jpg": "5f21033e157c6b0fbc15cbf1c79927c8",
"assets/assets/Kaday%25C4%25B1f.jpg": "d59c0e4103689d93e6230fd99c3cb3bc",
"assets/assets/Kapucino.jpg": "775ec7aa0df4e4dafce7fd7f0b3ac8ee",
"assets/assets/Lahmacun.jpg": "1a273498c4a2ddbb6c8436058c4ada6d",
"assets/assets/Latte.jpg": "f7d96ef95183c85b80672c459bcbd698",
"assets/assets/Limonata.jpg": "c89cba4c59473089541c52de374999ad",
"assets/assets/login.jpg": "e84bb703e2a3a3a649d1e47888cfb0e3",
"assets/assets/Makarna.jpg": "b9fba52acc63c3ab2d3baa3b359c20b4",
"assets/assets/master.png": "6845f63070d253039295113eed079246",
"assets/assets/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/assets/Menemen.jpg": "04b95d72ddb02c638ddf72e869c6a1d9",
"assets/assets/Mercimek.jpg": "7372448dcc8f9f1b137e2f7c0e5262e4",
"assets/assets/Muz.jpg": "0d89b363d6f54f6a020783e5d5c37ee9",
"assets/assets/Pepsi.jpg": "276b16dd2c5ceec9d8ccaeb987b0873c",
"assets/assets/Pirin%25C3%25A7.jpg": "c365bbb4fed76226e7390709771d149f",
"assets/assets/S%25C3%25BCtla%25C3%25A7.jpg": "d2689070dee2aace93313e9e44f1d77a",
"assets/assets/Sarma.jpg": "c9a1e9e9d1c4d0729800b322fabc9e66",
"assets/assets/Soda.jpg": "2da1aa022c4b7e16bebedba5a4413983",
"assets/assets/Su.jpg": "e8234f3a4cad5431a8b2f4b2d1fc42a8",
"assets/assets/T%25C3%25BCrkKahvesi.jpg": "75a445a71ad577f5a533416c5a3bdc42",
"assets/assets/Tarhana.jpg": "cd936745f1bca3243594e64b892cbc2b",
"assets/assets/WhiteMocha.jpg": "052f42789f088e511203789d7232b7e7",
"assets/FontManifest.json": "b0101cf5b7782f1ca1dede74a12efa26",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ded33b35d0b48c6758362cb4d53134fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/veritabani/veri.sqlite": "7398d8c3871358c0e5c23bd96f99a401",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a97f30d649bb1da00bc4afa170f302e2",
"/": "a97f30d649bb1da00bc4afa170f302e2",
"main.dart.js": "bfaf156e1d1fd52fdac6e70e2b0ad427",
"manifest.json": "e7418ebc80ab55ddfa382f0bbffc32d2",
"version.json": "ba25f2269e75c151e76606c6a42d2177"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
