/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.css",
    "revision": "e5e7bdbce663087be39a01d77daf7a40"
  },
  {
    "url": "build/app.js",
    "revision": "575829ffafa4cdd19c5ccaac305b8005"
  },
  {
    "url": "build/app/app.vwnlfls8.js",
    "revision": "5563657cbb3cadd8097497ab733a11c5"
  },
  {
    "url": "build/app/app.ywobmiif.js",
    "revision": "616a019a2885d1ef4b0e74ea0293b9f2"
  },
  {
    "url": "build/app/bnvl2pyr.es5.js",
    "revision": "5fcba7e1444cd5ea6dc60c96f9361540"
  },
  {
    "url": "build/app/bnvl2pyr.js",
    "revision": "6e7bcbd8f62be0dfe5dcefdf24c3bc89"
  },
  {
    "url": "build/app/bnvl2pyr.sc.es5.js",
    "revision": "f1543aa5c0694568b72fe6e1f79add47"
  },
  {
    "url": "build/app/bnvl2pyr.sc.js",
    "revision": "0f41704f7e198dd6d10cec9e2574c32d"
  },
  {
    "url": "index.html",
    "revision": "8c0ca8c0faa5c6027ad3f8edb043305a"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
