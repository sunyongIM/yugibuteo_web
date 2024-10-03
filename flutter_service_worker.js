'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6d4c464807cb6a7a577878a53b3b3d50",
"version.json": "8c9f42772d022b2d170abcec914823f0",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "795f84ff7141a5247641a090d4694d13",
"/": "795f84ff7141a5247641a090d4694d13",
"main.dart.js": "5450214e95e46792cae6d0ba2d37270e",
"404.html": "63147b8b43c65d0d3199e7070db71804",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9c715bfcde5b5ca9b9aa70c68f02f446",
".git/ORIG_HEAD": "0f96256ce8e28c9e32e7739f39af224f",
".git/config": "9e35da7b7f0d99b2e173b856bc60a21d",
".git/objects/92/e6a342aed2ad18c6e6b66951049a9ad0079e23": "52c5ce14a6d3d3100967b8f20c5a2128",
".git/objects/3e/83ee511d6fb212a70820531054b1f663bfcc38": "520538cb823c61a2247a147d92c93ba5",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9b/5e9c26e4f8f5b377c79c986899630553aee809": "aab48de9867bb6626c9f7b1d2c7daab9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3d/b53c5fc996a18e18bd2d62eb6d923b60e16e6c": "a55c43b760b6935e3fdf097095318a01",
".git/objects/93/a5eaa2635ec7e00c39f7e68d15bdb10ca9849f": "8dff245d72b9f390488484e64caae271",
".git/objects/60/3ff2067ca5eeb9fddc89c2e1bf77ab8fce7f20": "29a2bdec7f2f86a3867879e4a9e357db",
".git/objects/5f/9441c69fefef7ff8d43eb3d18c51ffd6a97d5e": "34f404159691470d3b8ac998ee690691",
".git/objects/05/0898abb733fb298de6f8e663c5e098eceb99b8": "30100787ef5f7c5b515c61ad4ec5b3fd",
".git/objects/bb/ab3a798ca00c1cccd6fdaa3c573d774ae21b74": "e209aefb0dd255f0b63e70b6a387ceb5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/fd5041d8caacc6dd2ef389bae8ec8bdc8fdcaa": "f82482d4469336d13fd93e2cc05628ad",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/5743a40b8788a050b706fddc7d09f5c1d49965": "abb4abe6b6bf7c5cff8d68d34e16e6fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/2d5ee4464e008160be850fd6a3b1522e56e74f": "8fbfe751d0288753e70a0f4aee8781c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/aa69b8262cc04bd326fcf92026acff922ea144": "2786dedfad4da30aed5157e1556ce973",
".git/objects/c0/b6c107de4f6db83a7410a2642a7a04d2ae3480": "c0fd24b2494f0db94d9779a2c242635c",
".git/objects/c9/c68cf6454b7bc17ddb5337783f58c081a21aa8": "a2f16376efebb03d3e8bb57e3c2c45d4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/edd9f95109c30e68d9188e1ae2cdef1225e1ea": "65d75e4a0171d3547e64f13f9113f488",
".git/objects/fb/f4abe80607e86d438b585879cf45c6a48753ea": "1ac84a9fd1339cb19339667b3764e752",
".git/objects/ec/db3750bd235c0e8947427579c1eb4aa2dbb74a": "de76b8c75fafe21af87e1487c80838cc",
".git/objects/20/ba35a3677f07b38005f620d1569602ee23ae2d": "d5b56f42298166f88ee096e67288523a",
".git/objects/18/ca6ab45e4704d05b7dee9fbc02af7ce521da14": "b52e8d25536f12e7c4313493d02fea00",
".git/objects/11/0de85efbccd226ce39eb13df21b864b5f29b46": "db13f322c7ad00a0ca3ee4cbc1cf17a1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/28/8f7c2e239af951a41eb720b089b34af09c54e1": "cbe8ee48e34fc9b0f560bd74a940e978",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/7ecc7d3ab31347f79d56e7ae6a1a6fe4da869e": "fd93ac23b1ab06f47b177df25c05ab7a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/1662448932f72b635bc4978850e56d0513d859": "974cd1882b3f81374ae0af8ec6fc0843",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/be4ffad1b46c6f3da6890b32b488074f7cd90c": "ba9c327b1ebd558fa922437e5f1ee4de",
".git/objects/63/463d253d657ff54ee67d70165d6a8c884bd7ca": "1b772fba1c0ba4755623272d3eeaa15d",
".git/objects/0a/0ff837311fe0fb4ccd0e157216bc9cac8b2012": "548ebe3175a9878319b0d3526005bea2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a30e151c46b915f95cdf46754535422d6654ba": "ab750d6c9ff5a37be786b13ba54ebbeb",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/3da28ede62a7a758d573cf26fd4fa6495c2ebc": "6b33e8273a45e8214c614d8097e93dbe",
".git/objects/b8/0283732c5b66645c729eb018b1563cef2b837c": "d89cbc7e7dedb198604049c92004187d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/8518d9c4d4235082332eb3a7ea2c72b7b8976e": "beaedb50eeb6d9e091275d8ad39fa0aa",
".git/objects/fa/0ae44a4fa9ae6bf096e6de006a25c3f82437db": "c3fac38e118d1b711f93383ab0dfdbc1",
".git/objects/f1/2cbd78a113978228b96d9dba1f56914f38737e": "008c58106f54ea7721ab3a5ece9aedc3",
".git/objects/79/da7edb89f35c7a04c7de7e3f1c38dedd6ad0e9": "fde7a506709649c73eae408f08c6ded8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/12/15ada0debea06e268d83bcd605f2006be1a0f7": "c8b81a2f103ce25b465ddc7161164dde",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/8d5d75cad959aa7957513b5cf3095bfa04ef5c": "e0f50d611efd13689dd13276d717fe61",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7626253d27d79c3fa263f6da3f5e955",
".git/logs/refs/heads/master": "d7626253d27d79c3fa263f6da3f5e955",
".git/logs/refs/remotes/origin/master": "e55264839469f360a90f3a21bf2fe637",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "11cdc0b337fc69040f248d5fd1515dfb",
".git/refs/remotes/origin/master": "11cdc0b337fc69040f248d5fd1515dfb",
".git/index": "5c2e5c78b9640b4e39516c4dee1b2fc7",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "0491bee03d0b3ac7d979f2a0008c430a",
"assets/AssetManifest.json": "b350ca75b33015144fcdc8229977c443",
"assets/NOTICES": "83a8f4ef8efee5b48d1ec8fd2438a4e8",
"assets/FontManifest.json": "d2e2a6a375fdcb9e3073ea7f7e0cf992",
"assets/AssetManifest.bin.json": "b238db3e4e29eb70b22721fdcb420dcc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f8ee68f7d007c2a5f2a71c80ac334230",
"assets/fonts/MaterialIcons-Regular.otf": "2981505e95e68ef818991bac68487a50",
"assets/assets/images/beta_banner.png": "d836076674e448f63a05c9b170291649",
"assets/assets/images/ok_logo_button.gif": "99dcf1ee308fd6c2281fefeb8ace52e4",
"assets/assets/images/logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"assets/assets/images/ok_button.png": "7ccc3edd8dd7ec51e0a1d17a1d0d9db1",
"assets/assets/images/background.png": "a42cb787997a63f4fa42b9dd4a297113",
"assets/assets/images/from_here.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/assets/images/beta_icon.jpeg": "0020c8a4ecc1840e833ccd65429304af",
"assets/assets/images/top_bg.png": "e09d68f80844decbb936063a31eaff01",
"assets/assets/fonts/Paperlogy-5Medium.ttf": "30a942b93f5a6ecf2b27b787f840279f",
"assets/assets/fonts/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/assets/fonts/Paperlogy-6SemiBold.ttf": "140bcc17b6275d62a4614fcc10043131",
"assets/assets/fonts/BMJUA.otf": "7592a08778fd0fc3b37b052386aac91a",
"assets/assets/fonts/SpoqaHanSansNeo-Regular.otf": "d66ff1769f2e52a90fd58c0e307094e7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
