'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "46b73951093604d734aae668d12f9149",
".git/config": "1b4d3fb91941fb547d935b8e39f04d85",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "787a74e94b189f6744b98e36e90811dc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7e50d20f9b16cecc03c49229fc5f19e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67a93752d1b09fde08cbb1a1600fd144",
".git/logs/refs/heads/master": "67a93752d1b09fde08cbb1a1600fd144",
".git/logs/refs/remotes/origin/master": "bbab64623f0ec5a47f4e1249d6aefd2b",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/03/7aa8dd060018da9ad82188ef93c35f2388532e": "9fdda8c49e17f24a572a824265da28db",
".git/objects/09/9aeed7b1e6083018a4f583d3abc1d06c9150ba": "5c17469eec64052dcb92b43a141116b6",
".git/objects/09/b4243d6a017637abdffc7334ace1e79ba855e2": "04268f3bc7518250dd781ca83cafd5fd",
".git/objects/0b/20ae8a44d642e47dbfd5ada4ca029b59126a68": "fa610a01536ca5cef33bb8394f4120de",
".git/objects/0f/2f8b525eac4a0daf94107ea252c579a3ffba8f": "32f2d01a91fb5c5d415374a947f64e3a",
".git/objects/0f/43a399b14e6142e1c329a10816d83ed5dabfd6": "5b456ed0879a3db9ed7a528063e9c576",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/13/47a1a663ddbdd1cd095fb100eb06b6f00134dd": "da72da0c60e18abe58250ac1d880a053",
".git/objects/17/97f804bff0a767501d33e0febe78455bb5a46a": "9c11ecac8dd9269fcc2547aba8009ac6",
".git/objects/17/9808b68bab48a83ab5f63f08fe609e722c5b9d": "4695c3058c48260817421bdebb4a9c84",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/20/8e93206222d5d7da6d496be668748ba1cc2ffe": "f990f8b38bb28de0f95258fc8cbda224",
".git/objects/25/fbe7bce9b94e2ea26daeba5dad5d1c3941dee0": "290a036c397962b55044e7290ceebfbb",
".git/objects/26/ba5453a83a28e366e300eb4573ced9f5224d0d": "2def7e741dd91b725f9765c5b20b0e04",
".git/objects/27/b86e0dd3486581f752c46df5921d0af8834e6d": "35d5bb7db497db8c18e0f423fadac34c",
".git/objects/28/cffec5679c847d8b1b73ec64f0f20efab4e978": "25a985a86c948a654837cc4f0c4bafd6",
".git/objects/2f/47c9dd0b4b93f32a1b18a70dbac08974739b9f": "a2456b5730c28e201076e517692c57e4",
".git/objects/31/1ce2518672764a00248b851c1c33c7806beaca": "d4b148149d82498d8faff9177ffe2fd4",
".git/objects/32/0ced49f2c81502ad7e62075b76aed72ec12eee": "4acbd6f4f89962b1e7ade27181321010",
".git/objects/33/bb597a4d5fac9ca41cb0a902d7cc0056b67895": "ab53306c6a8b9e4ce62fb341bdef663c",
".git/objects/34/5a1f106204fbc419fe0d959df865025270aacb": "c4414df1e2ef4bc7bd4ec6c00b717794",
".git/objects/35/8c2981c8d0a98a3295a1ec97e2cd5ffdf07265": "3464413aa9906d426a14bda7b5dbaa2a",
".git/objects/36/27d8b89509496b50427f404ab88e8ae77c64ed": "210535ff09c208f50f9bf1d805835881",
".git/objects/3c/fc9946013b63ec9dff7ea63939085866214ccd": "d40f1b53f9ebed04b3bce41a38b8ad9a",
".git/objects/3d/530ebfb28b6e97a79fe2fba495cca6356753f1": "acda67ff622b2fda9b5b1506cc05e098",
".git/objects/3d/a5c64b76d3cdbb3edc678bade503c190e3c975": "526cda7f9a1bd1409d024eb12d2b5632",
".git/objects/3d/aeb69bacf1d6ed21d99012444f038065ac960b": "f5eda7f15030ab92c4d44c524ddfbc36",
".git/objects/41/111ee58f2b90192d1e43072c4a6b0c082f5ab1": "a3229a3087fceefb7d4a7f66b273918b",
".git/objects/45/9d86b56541f2d51cb6fed0858d9fb107d848ae": "c3d733d4bb31ff55363a56d5945ea4cb",
".git/objects/48/c221cf1202519b5c9c9005ddd9f012d6cb1060": "053e67cedb372e207c7b0003c48f6718",
".git/objects/4e/58d8733269218e9dbbe4014715811b522e7550": "7629640a024dce049069004bf6b294fe",
".git/objects/4e/77186096c7abbf5c77f3b89831d809609ce243": "ab776ee24d8d5c0a63db448f84ba1f9b",
".git/objects/4e/ac950f3166f92cacb8453040cf48f22457f2e4": "96e49872a0f67249a9fdfe981f4c4974",
".git/objects/4e/c3408cd24aa95f7a06cb319968ba553fa2464c": "623f3983c9f5a95874afbcd66cd1aab3",
".git/objects/4e/cced243cf401d3695372f5c85cd71ac49e8b34": "8fc43ac1b3629e52637a58c970187873",
".git/objects/4f/4999f2b76f82e7c30fc188f858e1bc6e2b3fba": "93af47a110feb41561ec4d6233236ca3",
".git/objects/55/d2cc3baa4946c3ee686ab758fb3547af3ed119": "ea9feaca4c6da39c230526c3bdd07871",
".git/objects/56/29392cb757b5fe6a5044a335013794ab1aafb8": "a910dfca921af5e61546f22924338d95",
".git/objects/5c/12fba47bcd83aaae60134f777eb11d1fff6730": "2092ba9a537af1359fe3660b7d3b53dd",
".git/objects/61/641a932015d18cb85e2cb2910321eb22146211": "5ac590321d75ad8734e655fcfe46f2e9",
".git/objects/61/ddb6cb3395bf608fa84b6ab846dd0db2e72a52": "aae8263e3e0585ed19d9ba3a31bd1000",
".git/objects/65/51380d5bb8af3b379570df8444661d69c77fc6": "59648d086332caba0cb3f7429d54cb0e",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/67/3d37fe2e9f5c670d5128d2540e31a9b5721fe4": "7e7bd64fef54933eaa11576998dd7ba7",
".git/objects/69/1878cc53fbab8dc4c912713a13637e5b3a3d29": "dfbd25310f5b2804081ee1fcb933bd62",
".git/objects/69/85cca619b0fb8cc31aa4bc4eb4cf74687c2200": "6317484f00276515a22151e61766e1a3",
".git/objects/6e/42900845818ad9cb8cb2ddf6b2d69687d1ba9d": "b8940922ee4da908fc0fac108b999429",
".git/objects/6f/dc44d6595bdfebd25b0cf5f8d690d4d39801d4": "11e01dd1c64756f5250fa56416c25181",
".git/objects/72/b5e41be489013fc4a56732202dc6dc2254f6b3": "b420bc1b28d00a15e5d1bf32c2197d74",
".git/objects/72/ccf56df7c46c1e5a7b39dc39bd5da6d6fe20fd": "e4c567c1e81e4d70364599550331d8f1",
".git/objects/75/2ecb52fb90394fcb17855f86a79cf85ca2f10c": "d80954ddeb0bbc1f3292b9f138eb90d2",
".git/objects/78/404db707d25b91c2c73e9efbe5eef13f34afe7": "f3877180f8e57d07d7ed67282c504f40",
".git/objects/79/717fc76425a8b3bea4b66318855d561f642c8d": "c1f0c4dd1de5b4cd39244fced93fc597",
".git/objects/7d/11dfb7c46a247e9cce0d8692465d446f92e34f": "2e5fb92801c36c1de88843ede6570eaf",
".git/objects/7d/8a28cda0206ca8fecc40c297e92dbe0dd01bb1": "fa741828f46d2b50e2c6b2ab027e3bc1",
".git/objects/80/6d28c439d8f1346e5acf6e14ff64d6f9f6b62a": "c2fdc4e2207f602c5e8cbb8169129142",
".git/objects/82/519a9751f7e7eaf3cba730ae9fea841de2d512": "cf50efd8e3230dcb4d96750c86b21911",
".git/objects/87/b592b8ba3ad03e91ef3e77c32f8be86765179f": "3f63a1ade0038250aa7a51c8ba57fb2c",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/3168f6f98a775dab948f9d7ff8d9e6474ae5dd": "beb5137146530065258c2f67baffd0af",
".git/objects/99/ee2a5f369e910760e2f8644a339df9be4cec47": "3b51212f59883d3da23159176591b269",
".git/objects/9e/94ad167c035a74f9d2e4a967a3257a68888220": "91517a4ff13709e7dd76a90a9f1c27cf",
".git/objects/a2/cb2493003bda7ddf27977bb9c82fe79718d295": "3c56b91be0ce70fc8d847262b0102c49",
".git/objects/a4/157e81b4c3f619d2af06c447a82d66844a7486": "01f74e7953c63ea6ebd3ad69b8ebe67e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/6c6383ea47bb136a7b2539293d9b0978c3182c": "bfd9e255cdf75c6dfe71fd50cac95875",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ab/982ba16cbbd59c07c900b759fc435c2513ec36": "929f5ee18af99d84f7e5cf9853b3aba9",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/ad/cb3f5ffc40484a0e087862fdf20bc0373bd181": "07338bbc48e09bc45253af8254d68f91",
".git/objects/ad/deb1594c7d9329726a1f676ab2cc6d3703eae3": "f88dd2582deb61f17d154d241c89a710",
".git/objects/af/496bc50d8871fb28e8fb5d9ee94dcea4447089": "b8290c20e79ccc4734bda588bda397d2",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/bf/975ae6efc29308609369ae4482e311300ef9d5": "b6b4b633e5d407f099d08c474fb51cd6",
".git/objects/c9/bace0b0e3ab5fd918a02d7f917eb6f3b7c0622": "429c7c91f0f690d606d10891faa8dab1",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d5/f382442aeaad1b3ad9d3c01daa9f3627f179f8": "d295daf8afe239b13b2aa231aa291a55",
".git/objects/d7/d38268561f8139cb9f02d70db3b4e7b54b40f5": "74f5bf0c58665d7296e0929531666e9e",
".git/objects/dd/08f4bf8acdc4c0179454f1511f0a8db3c92076": "c7a40b73f10e70361654235814e7f215",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/421758dec0f8fdf1c19db36cf27726422dbd79": "c62181ca6496ad125be7a9944d236e7e",
".git/objects/e3/d45de21d342da02da52ab952940d7cfc97a403": "3e23a67410f1ad1fef7588ddfea16aac",
".git/objects/e9/c3fdcdc96564e3fd0b25388ce6a9b2bd00e3d4": "7a0c22416b1191a5195d377577e45040",
".git/objects/ea/208c8b3cf708b74aa570dab31d58aec1b679e3": "f489db273c220546299ce6ba9174375c",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fb/0766c94af3edd60582284d71424d3d95c850fe": "b5cd0336092162924d0029e4de97ce97",
".git/objects/fb/fbeae1b201ef8384fcd486bac08d514efe6685": "838e19665d4c65374d86ae5b55086c1e",
".git/objects/fc/dde4f40450ce839c5dceaea37f757d68256737": "ac229d5d6a95391104d96fc52d9ae837",
".git/ORIG_HEAD": "9fa9fb504ed475aaeafc26b3a663d261",
".git/refs/heads/master": "dbc742f8aa466f825b3698ae7baaf882",
".git/refs/remotes/origin/master": "dbc742f8aa466f825b3698ae7baaf882",
"assets/AssetManifest.json": "c968122976c610886ca30ef18e822b53",
"assets/assets/about.html": "37d342ed9cf99277b638240f34c9ea25",
"assets/assets/avatar1.PNG": "4e0dd9040329ec8d60fd1d4e51fb671c",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "4b859210b1cb7cc0af63babc29eac841",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/Spice.png": "7eac8bc3101bb39f88588bf3d45da837",
"assets/assets/works/visitor.png": "4697a59422149db2504b4e6da960e8eb",
"assets/assets/youtube.png": "bbc83282bdac314de0e725e4016e0c69",
"assets/FontManifest.json": "ab310715c29abd30b1eb1b6c626d8ec7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "558598be809ee78a6cfc4094cc37aaf8",
"CNAME": "d2e59bb7a3b702b6267e7b3459bb433f",
"google248269c6649c0671.html": "d3928911d9390636a48209fb03368fd5",
"index.html": "9e78e75f1aa1c4b73be1795a61f7cabf",
"/": "9e78e75f1aa1c4b73be1795a61f7cabf",
"main.dart.js": "d3172eaeddde0b6bf69048b9b24ff585",
"sitemap.xml": "ae9f41b0d6ba9c869d1544b93930cd95",
"version.json": "34fd7d3d200964b23b119514f894cf2b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
