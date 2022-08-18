'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "c13b29fa58c4044b4a308397b52585fb",
"/": "c13b29fa58c4044b4a308397b52585fb",
"CNAME": "93d104d580cf4c6b073826b53325928e",
"main.dart.js": "58feb53d1566b94a40d9e6f626a8e267",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "f175e6d7a1cd70acc7fad86244f7d566",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "204db5bf584f716947d0985e99656d6b",
".git/config": "10dc5bf73669bd7be6ec9a2854f33a85",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/3526c00b2772374a1667b84da2b451aed60309": "dbc210caf214d13f70d4ce90e0392adf",
".git/objects/66/f145a0e170795cc87abecb7b8f519b29d508d6": "2f3aea726da0a1f570f8697ff0504e38",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/3fb54a027cdc484730322bda69524b93e9a4dc": "dad95d8fad54efe0741d54b9e497483d",
".git/objects/6a/30e151a7b593be5e33661e6813ffd0604a2bdc": "8c43fa88203a56ddc4c5c7b00a8e7c3c",
".git/objects/69/4bbd6b140949af8eb78928ee44859e1c87642f": "d831ed0b0848c1d1e3574622aed1c0ba",
".git/objects/51/8a64bc00a2509b9c0f7fbd8c8145502afd535d": "ebbdf8051513f547fbcc9a7117d5eab9",
".git/objects/93/db03e36c81b3d566f5f6b67d32bd8c499d8ebb": "250575971bc7e8ad88d1751581631063",
".git/objects/5a/e3699d0360586d348e28c6c529098b1b2840b8": "d9fe3906c6723da784ba6f1c1bb40294",
".git/objects/5f/714211da5650369da913ff7d50c76088911c36": "3acd82f3542d25858048d18af94286e1",
".git/objects/9d/d9f3f7ad34fb00b4520d884496043f829145b6": "28e331d04414210d2d741c79817e5305",
".git/objects/02/a04c9349389715b591672edc4f8d035d4e320a": "9abb6e1a7b3781e17acb313575dbbf6c",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/d15c7930fa599ac70e00f8ae329287e81d9450": "50411315b8223f3390a257ee085d3301",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a953d129fe2605f94d8fa026954606f3cc84ae": "a4db739ad30a182b891311746e6184a4",
".git/objects/f5/71623a9c6f11f4178969477fd3b9a60c323154": "402a3992e399df09aec673f4ba11baab",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/e3/7aef98068778b325c90cf8786ecdf6a008e1bc": "bcab4fdf73d24fd65b8be346e38d8aa1",
".git/objects/e4/043f2b65c2cfb0632543ac09aa0af1bfd63636": "a90641795b27b715dfea21fd866afee5",
".git/objects/fb/e1ebf5581337661b5c0d587a1448e3fd05f1ac": "ed279d0f80ded8d5d6395997cea92be2",
".git/objects/c6/f354ced07a888b7af85017466b79fcb0374e32": "d56c75df94ce660768b1020d9323ebb5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/58d8733269218e9dbbe4014715811b522e7550": "7629640a024dce049069004bf6b294fe",
".git/objects/pack/pack-bc08f30d68e2f3435ed0825081e5516fdf1b5267.pack": "0b78477a527cdf79e113231fb1e5afb6",
".git/objects/pack/pack-bc08f30d68e2f3435ed0825081e5516fdf1b5267.idx": "24757720b4368fd7686440b4418cdf76",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/87/c3e6807ed2931cb463d20f94cdabbbf16ff64d": "47895853ce709d2985ef8ced511865dd",
".git/objects/17/ef8e2371d8a41bfca809e95daaf580e12fd908": "db0e0d72e0d0f050c2638c0a625a5861",
".git/objects/7e/848904a88ae841b34b37819501d41273bb7311": "23ee10ff0355892830695779d22c7386",
".git/objects/26/f4734b1d365093c7fc456e119b106a43564875": "872adb5226a5f69581609a545ed51c76",
".git/objects/26/d1dc924afbeb6a2594b149166e33a7dc572b1e": "d3cd18a6077e6e7d072824ed48478c48",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/21/0a1ba2e906ca4ba3a9e44d34570a5715be4185": "b1c732b33c906d5742944b4946b3db35",
".git/objects/86/f3e0eb8abeb28ebd7a59dd729eba9342a395d9": "1ed88b617f40bd7856942b6037433f84",
".git/objects/2f/b702ad76e5e531a540569d25a21335fd4bd9ae": "7c4d552077226af815e62d738b9830ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/96/8b6278b57bff24a35327c119690632bd591440": "8918c19de5249f36f8681e61bc2c109a",
".git/objects/54/bebf1192d4d9f2e4ba478a64e19998c284f94a": "2c36938ee971fdba4ee16ef8aedafc93",
".git/objects/54/c6afb1fb165fd9eeb650f430f5471ae92e3c2c": "ca7dd4e564a66e14954dcac222b64cdf",
".git/objects/53/c3da3c7a9deebf92cc5ffebfd8b7460c252c07": "7cda53f0ec1ca8dbe8f991c1aacc7706",
".git/objects/30/e1fda7edca9512aef6bb87f45fdf78d68a11be": "3cf2c0ad16bfd362bd589a20e9edd7b5",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/bf/f11165dff6f95d91d3e0d9fb88b3b26fe14108": "40b3b3d300e73b6ffc34cbf0e22b30b4",
".git/objects/b8/902b998b64b1bca2cb22443e6bf060abcfcb33": "f5383076a69487e6114be64b81c8a155",
".git/objects/dc/362aace20bda3b56bf043841bbe3504410bab9": "6127968ff4a1b4a5f3bf4b95f4da1377",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/14057004354514c46aa72d82b716047f7f2c89": "1618e4a119831bcc8ee3824500ca6224",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/30dba4cc2c6e9b8cdf7f7e580711b9bd5c0505": "804089ed0b5cd05fe93615b6ef49821e",
".git/objects/ea/cb34726bc9202eff4d2ae15786ea6351cc3f89": "c8236a888d291277f8559c9b6fafb1e1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/56f2792eb2c120f95811e2faaeec6089cc6357": "1d4f12346642c48766a62d1e6ed19685",
".git/objects/f1/200c723183e142184523655516dfa3d74498f0": "76eac2f3a45ee4ad53c52e05a2582439",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/1230c5387dd5f16c2bd0f2ec0aa8a0b40a4364": "36b37c64ecf45c69c0fadac83e8ebcd7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/a60cb4e8bd7ce138d7802744b99240d0501e8c": "555ffecb06780546dd0fd8854f5776c2",
".git/objects/70/59a3cf98c268f2a01b0d2027786c96dbb0ed64": "89ef19118eea4304b24c4eade0eb2132",
".git/objects/4a/a8eb98596c8030b352156efdaadfe2d36ccb61": "b9245d1a8a836da7fae566f7dd9569ba",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/ca6b2d2735a832763b82887a9866c2cd531a75": "77201e366037db58a41d2c4d599c0812",
".git/objects/71/60e0f4b3d52f191966a65aa336980a198818f4": "cc0c9cbcc35960a18c9a871ac081bb99",
".git/objects/71/11ee5169a28ff4953b6c976bf738c0a140861d": "d26b80076ba08c68f9492faaf5b92cbb",
".git/objects/76/d4ee0c043f01f28f8e178344e5a8ed314fe5ed": "a7765cf5bca3280ae290fef766ddc91a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/9c425a6c1657a12854426cdfcfc7c7d16207f3": "969e7fc5f1d27cc9fd57b75efaf2b530",
".git/objects/82/fdd2d06482a8a76e999ca1b82b40d7e557d311": "4c7d0d3da479fc6645e9414c65d7ccf3",
".git/objects/82/58974c2caed580d55ba99e3f880848a6aa4bde": "d5308167ee750de48fe958169e04c8d6",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b0cd365c6e194f5a02db71e14e4d754",
".git/logs/refs/heads/master": "3b0cd365c6e194f5a02db71e14e4d754",
".git/logs/refs/remotes/origin/master": "e2e190b4661d9af21f95c62cea9f9956",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1d7385e117f560d0dffe033927d2052f",
".git/refs/remotes/origin/master": "1d7385e117f560d0dffe033927d2052f",
".git/index": "2e8092d5010fffc51bdff6cfa2646bdd",
".git/COMMIT_EDITMSG": "c2ddf4e8fb6b240746031a536a157cc9",
".git/FETCH_HEAD": "f76b30f7fdb8c59d5bd91ad74fc95033",
"assets/AssetManifest.json": "d5b31869eb7083fdc58fc6cf6a143606",
"assets/NOTICES": "af57ce80719d8ff50628394a1b90bb1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/Csharp_Logo.png": "e7b8fcd4ceb430ffc60ed55e5ab98fa5",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/assets/images/technology/javascript.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/images/technology/csharp.png": "6eed9079ae1b7c07153d1c9479fa3003",
"assets/assets/images/technology/reactJs.png": "25957e96be60b448149d447f7049d852",
"assets/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/assets/images/technology/react.jpg": "cccd4abe569a488a41b074702ed343fe",
"assets/assets/images/technology/react.png": "cba0b89d2bf2d96a1ed26edb5849f804",
"assets/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/images/technology/dotnet.png": "6b9250e2fe29327280254521ef00be0c",
"assets/assets/images/technology/azure.png": "ace36ca4a96b6de28da92198f1b9df78",
"assets/assets/images/code.json": "605209978c8334b99597816a48b0eb36",
"assets/assets/images/projects/6.jpeg": "563048f821e840ebdbc7000e9c6b834a",
"assets/assets/images/projects/4.png": "127743d03133c0d2553c67f793a3bbff",
"assets/assets/images/projects/5.png": "e6c06c66fa44cf003becd3a50ff10307",
"assets/assets/images/projects/2.png": "8de334d29bd0575ae53773f4e2a641cd",
"assets/assets/images/projects/3.png": "f82ab742f1b4d8ea8ea37121a7efeb3f",
"assets/assets/images/projects/1.jpg": "cc77acdc60d2c7a29f15621ba095a294",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/green.png": "f175e6d7a1cd70acc7fad86244f7d566",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/outputs/gif/mobile.gif": "201990cae68f3d8d16a35a22500ab358",
"assets/outputs/gif/desktop.gif": "52e4daec50892bd8b4da1d3f4dfa1f05",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
