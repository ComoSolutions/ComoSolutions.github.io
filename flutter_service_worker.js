'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fb277f3f8e1f0a741f1d8ee5a9b0db94",
"index.html": "f8f1355b3a106d6c459f26235f456ed2",
"/": "f8f1355b3a106d6c459f26235f456ed2",
"main.dart.js": "7acdf216d0c538b78c3b3ce59f722229",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/como-logo.png": "9294e8549dad5948a7e9242833e9aa87",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "021d67044f6c220457d2a05bc6f98a84",
"splash.css": "e02a71184ff1f79e0019788383f833c2",
".git/config": "7a54550b023971b502dc167b024ceabd",
".git/objects/61/4a825f48e62b3839bcc4b94960890503de85d6": "9089d60948811f57c698627dce9092c7",
".git/objects/0d/d0f28a99be701b9b347c497a55425e7b94e08e": "093b292213a7caa6d095884ae2c92cde",
".git/objects/0d/5348e51bcb65c8a14dbde3aaca19e18779e39f": "a4873e38ad2e4d5b4a7b6b21b72bc79d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/4affa88eb49d8b95d67f6ab48f25b4f57ba604": "8a7e52d0ee678515a3e260e577326379",
".git/objects/0c/9cd6fa9c3ca53b60cd46c224f583e10d1ea0b8": "8b62e203a2ed34b4ddcbf150dd25639a",
".git/objects/3e/8b5dbe1607acc782cd627185c54eac490b7ce5": "8b5d33e79e77cada4e77fa363158d696",
".git/objects/6f/81f7dcb8927fe52e48452af827fd40cfd4e701": "5b2bc414263bf629cd02ed591fbff54f",
".git/objects/03/74c8a708a7c82b554787612cab3611fb9b261d": "549e120d8fc563b210f95063529f31c8",
".git/objects/03/5dd8d66b6dcdffd4cde52b1721c20492806e27": "363ea5056d552400abfe85c5281bc044",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/82bf3e03531d69d9ec9d02fb76866c472682ac": "805e28f6c95f8933b0528efe79df8469",
".git/objects/34/011b2a70e08bddddec9887f7ce6b8ba2ab9d70": "7e9e40798933fa2c868549514674e62c",
".git/objects/a3/e3d75b860a7bc9b9905548266eff29fc93150b": "19b4e2b936a3b91af01d905a0b050374",
".git/objects/b5/06f6a7a641367f1b842df034961a348061b01d": "8841b0327d73e4e947810c9dd3ebc968",
".git/objects/b2/a394d3fa4b2a5632f32ab8a96875ec2a56ac22": "e4b59aa920fc3002f05fa1388c2c693e",
".git/objects/ad/e7c52da695d45828020bc780c410f96e634c13": "86c5668a5bd1a4830315c5ce997c5da1",
".git/objects/be/ba497453b5d424458f88e8930b39d0d8f760d5": "721728f71c1e85f992917882ea8137d6",
".git/objects/be/1d40b59053c2915d27452b73d3059f8e44d9ac": "b587dd4b784f02a577f496100a8b7204",
".git/objects/b3/aefe3450fd23565a4f595429f0988322326ddb": "5cb6e335e1aa111632314a9f3a458033",
".git/objects/da/bc0519804c1bfa44b14d142a5df9728c5375e7": "f0e0e95bd80f323aaee8f021338a3a95",
".git/objects/a2/a7d22fc389634147bb3daaa3659369e8ffd7f2": "5e8655f7e88802b027e8210f80ad0f12",
".git/objects/bd/9f0ba6305cc053218d01724567b4c7b984a97b": "394dc4a4b56e2be0ac6fcd0920e1c765",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/12deb610d45df4daa557478804afd47d8b53cd": "48aab21c8f6e42f2727ddce7bfc459f9",
".git/objects/d8/0c5073e14165f7cbb99868a930222837b2bab0": "4b591e77834f64fbb0dd50276dd014ae",
".git/objects/d8/00db6c99073858dceaf2ea818a154c6b9839c4": "ac009dd4cfe01a5e36c9905555f52115",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/8b2b901b3fdc1c0284b02a8620a48650995ba4": "ceba8a0915ec3650f8a2101f833d4dfa",
".git/objects/f4/2457b83beebe090d934bc6ffef68cdd1675544": "7288a9e2d2ece843df83ad357a37d57a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/20fa525a3f33a03050f5a6619f0afd1d513f19": "9406d55fb6a0dbf86c5e16597aa51c43",
".git/objects/f2/2fab411fa01578fb41e9b55da5eb95be303f5f": "287c5efecf3247ef1d7b73a6ebf1be2d",
".git/objects/f2/8bbcbc1795e6d3b543296b566922f67483f963": "5ea926fbaca006111984559b81e6ce99",
".git/objects/e3/d1f325bc44d80abd0a5fc69ceed802b5f11efb": "48869a25515431f9b3e774e82d721fb8",
".git/objects/c8/d9b34918e71e93c59a20ca0f9ba6c11aeb61f1": "7073617566708ad2b2d25172710d2403",
".git/objects/c8/f5952c16195a1554c362e0a406b85456a11584": "246b412b04dda5c04ea6eb0dcad12c4a",
".git/objects/c1/41f7d5014020dd1dc4e5b0f5835a1dd7749dd5": "2b88695c1c2c7510a6d52a5473140bb4",
".git/objects/c1/45f3bae56923d821cf8dbcf106762bbddc37a2": "6c016cc435f6d30a7e08606e574bada6",
".git/objects/c6/2cab49db96c907c04d0540efaf487effb5e7f3": "4c7f7f58d673d8615e02815b8c47f8f4",
".git/objects/c6/afdf9d88be656108d24b631ca0f22a2408b32b": "652dfe7e114c9cec33837d120af81002",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/b72672f8cb3a25291a0e4b6a2ae23213f9ff25": "aa695ebcc6e9aba182a6370f9f76d8b5",
".git/objects/16/b9eb2372b4a71987048818040cb585b58b3683": "245225126436c041daeed463a1338535",
".git/objects/89/e75d037a3e4bf121cb0e8f66cf99b6828c26e8": "ded4fded5ded84bb56bd07c7a2fd2a7e",
".git/objects/87/333ffac7850f58c63a1041a11c44b098a5875c": "b199a9556bbc1d48a1a5f714d4142558",
".git/objects/1a/3ce0138374c3997a5dff9196d7681265fe3448": "11344c74319720e96ba3e9439ba8747d",
".git/objects/28/2f1506e27ca20449fb268850a86bcf8f3423ea": "e72722cfaa2775c9c4ac787be823ecb5",
".git/objects/17/57227181798ec2308af69bd91091735d49af01": "b260a306f139970112c5ea3a5be2179e",
".git/objects/7b/50b231b28b559ecba03435ba71efd5456d7131": "9c7508d417d91c889b189cb4490ae677",
".git/objects/8f/1ce9bd7d75186e0169f89128d02a65fccb2370": "e9cdc0dd4c69f83079e3c99108189bad",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/39c5c765af53e06ee2ffbf04756a2b02ac56dd": "dc7c39e248b692aa685072930a1656c9",
".git/objects/4c/e9ee0b3e918880f5fbc8664965d999427d3536": "0376b18dd2264c18e3359007fce9765e",
".git/objects/4c/6e0639cc15c794ead826db7edb381518f0b8d2": "99f30acb330bba5fb98d35f69ea1f8a3",
".git/objects/44/324a4d1179406034339596ed74908334fe0081": "325abeef4cddf29e10e0c542c0de5573",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/c3d77a8417841e588f0d8b1c3f522973bfb3c9": "7f67317480476cb71647360b60f22816",
".git/objects/38/164f25084e86a5b3db1a524cb05ddae1d3f22d": "0591fda8eee0e1af1f1ad5cba05a3151",
".git/objects/00/12f251c309bd0fd8d8d6d86fdcba97e9c0fbc9": "e684bad858323c5ac22d304166cbff40",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/65/05a4b16e843532cbfc46622e040ce4b8ac2091": "57601b99b4c17ce59c9087bc4f8a9bdc",
".git/objects/96/829dc41c39bf1c8ea1903ef08987b8cfa1b19d": "c6e3eaff62c41dda96641830ee796ca3",
".git/objects/30/ee3d579f5adc667115cc7bc3acb174ac71459a": "2e4d1d48c29cfc7b6de0d42c9b15a79b",
".git/objects/5e/a2864eb160dece4369a61b5d63fc4b834766f7": "34f3c77b6741a046573ef2e7aa1830a2",
".git/objects/99/9e4135b999653b2aa6ff04b357e4de18f73145": "ec9c63ae96149a1717a6e3b4d19e4f84",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/0f/2157c7157ae1a60b799ad905d415f8e38530fd": "3ce8a86e7eddf3f295d9eca5f5c2bdc1",
".git/objects/0a/52a1c2411c8a8420fb9a232194147dbc9f4628": "824a51d84d4d1ff6438251d666d91a32",
".git/objects/64/e3f4e9f24960fd7037328c0f9f85fab7b172ad": "224105bac1d899c4700de1158b340d6e",
".git/objects/90/13bda09eb0cbe48bd47e80d874e07ba149c18a": "f9d85d37cf9e666fa0430c3b967bcdb4",
".git/objects/90/c4948cb8ea967f7fe77b8586ac72672d61f6ec": "40da6c30602347a4ac3bd40552c14590",
".git/objects/bf/3137c912c9ffdab5432b93798bc0af976bf230": "3f6f6bc07956ced03db9a95266bd412c",
".git/objects/ba/9c58f19452c7d4c6033024caca7f214cc8bbea": "1279a65fcf2a90ff39bceec5a165c2ea",
".git/objects/a0/a1866c33b998529fd1221e218ed6bc969d9160": "ea4a7135db3a110793c8279f4fa52bcd",
".git/objects/b1/8a284431c81934560b7a4ee0ada94e7f6bb1b9": "0e24cd5bf2d677d4780511cc0bd4e891",
".git/objects/b6/bda575353d601fb3af7aaf0243c95d3c3fb22d": "bc201749de0d129d5bfd8a67723d7a94",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/d2/da56ec1748e887a58da5673dbe4958aa5be9d5": "d61e9155cce319262a1f0c51f689dd18",
".git/objects/af/37e13acf6467f9f7f613d26ab6dad77e147827": "a46b7cc5642d5fb945cfe243b15f5f74",
".git/objects/b7/933893d22c68c6321dc3a302f570ac98092e5d": "185bbf3136231843a59b40f32a06a656",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/eea40358deb258c32329328d424cf845c2fdeb": "c0993408e6a399dfb9113cb770366e11",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ba2ab2bdb9a43d56fe080c383cbab728f901aa": "3a6a8ce5fc2b244506da124b89bd01d9",
".git/objects/c3/2943660ed27d78976cd6ab46f7a0dac7051265": "d5d4d41455fcf7cbd13bf055803a6b3e",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/f9/3de79e65972de32cc3307b10915897bc89e314": "4876d245c0d336312b1f9e2e21a3a506",
".git/objects/f0/2ad36333a5c54078b2c84dad69c797458b1f25": "41687ccd34f536fee8280977bb3727c9",
".git/objects/f7/768bb608d526fe9d634e9e638709cf9bd1b523": "4d18e7a9e6cc3019c609dd1efeb2156f",
".git/objects/c5/6b827165c5fee7b48e19bdfe5da69e84e4025b": "a4c50be21d425cfa52a7f7843d3d4bf7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/a43f2b203054676b64e38e2b78af5468c39b6d": "c74b50a853cc4b1a5f5dc1f07b4a619a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/91484e3178169dd2ce1a931599ceb08aa7fae1": "113d41fdd6e8d3b962d0d781339b31c9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/70/050fc7c45981118a09ff149d1c90d82df45ad5": "39ff99cea147520dc871c75f9199f175",
".git/objects/4a/ff16f1353ddb5a5c472ed87b9aa1f20f870668": "8a75953c5c3edc5f1717a7c61c31a934",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/12/e82ea5da49db75aa1194c6b37e6b75f48591b7": "adeeef76192f3802539bf698b420fa8b",
".git/objects/12/b202937368af3b6b1b0ad7eea90158fd3662be": "0fe3e84703c2a5fbaf6453973bcaaa71",
".git/objects/8c/8c7fcc1c78cda1f5ead42e481a5bdb41180af0": "214b580c91d69485e57e8327f0d75cb6",
".git/objects/1d/03f39bfb1fd9d28b37c79b2394c36c92d42455": "c207c0e49d494c18327d111e598637cb",
".git/objects/71/ed490b97a80d3038ecee3d163c8d7597f119ab": "de1526c6407383868e9f2987115abf9e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/f29693ce23be9e4cb96029592e2e420a64640a": "bce392eb47383e59cbfa2d9b7cb02ea3",
".git/objects/47/0abf5e80b26f5a22854efa2d3c0e2b61e46c0d": "ed6016df3ebf6eb4ca9222c9cd5cb7e8",
".git/objects/47/424a565b332495ea542f1cd181158a2f0faa06": "8f6859e1f1edceb765eae3bf53fcbb5d",
".git/objects/78/40b96b636311f39e4194b291102dd1247302e2": "2e040e0ada33a5bf4cd5880513b6c1ff",
".git/objects/13/096d225787be52f41b7a6827df196d1f7870de": "6207cba61a2cc3f31a7f0d7bb7465213",
".git/objects/22/63f6b024af8a1e4c5fdb4c180646febb097a12": "e3eef953900f7746b68d672dd11dc481",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4550b71d1285b73168563a52b90c298b",
".git/logs/refs/heads/master": "4550b71d1285b73168563a52b90c298b",
".git/logs/refs/remotes/origin/master": "63d57f30af794de5e2aefc111fcebd72",
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
".git/refs/heads/master": "1433a36f6a529d464af9948f1b430aed",
".git/refs/remotes/origin/master": "1433a36f6a529d464af9948f1b430aed",
".git/index": "b98ba42f185417e63894888f926de8ea",
".git/COMMIT_EDITMSG": "11eb56499a1dfa446e2b4516424403d3",
"assets/AssetManifest.json": "3514c099b01e8fb09096d25467113ad0",
"assets/NOTICES": "5aa1569306929b5b81e08a2a496fb539",
"assets/FontManifest.json": "ad2498c93ca274b6391b73d15d7fb147",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/vertical-threepoints.png": "1bdabb9363ad86883bb9c3bc81da2873",
"assets/assets/images/arrow-right.png": "e6779a6cd13fbc95d3b17e6326e83c3a",
"assets/assets/images/login-image.png": "7305d5079f015eee128662d43422cd1a",
"assets/assets/images/arrow-down.png": "a9b9564e27c732c0036f898de78a5013",
"assets/assets/images/budget-image.png": "aad77ef18ff53c4cb9a36dbc80245008",
"assets/assets/images/como-logo.png": "14e3405115ecb492a87ed88ca6b3fcd0",
"assets/assets/images/add-user.png": "09b75d1623d75c2c28ad45ffded834f5",
"assets/assets/images/credits-image.png": "10431f5dc4cf79b1b312cb7753ae42ef",
"assets/assets/images/info-circle.png": "ca1243a91291a3a7783c4ba84d017cdb",
"assets/assets/lottie_animations/loader_blue.json": "2da56fbe469d9eed64063c1041f8139e",
"assets/assets/lottie_animations/loader.json": "cb52cf7eb3b28539359a4d347f5fdfe3",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
