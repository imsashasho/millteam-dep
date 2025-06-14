/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/homepage.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/homepage.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/index */ \"./src/assets/scripts/homepage/index.js\");\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage.js?");

/***/ }),

/***/ "./src/assets/scripts/homepage/animation.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/homepage/animation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to('.companies-homepage-list', {\n  xPercent: -40,\n  ease: 'none',\n  scrollTrigger: {\n    scrub: true\n  }\n});\nconst animatedCount = () => {\n  const items = document.querySelectorAll('.achievments-homepage-item__title');\n  items.forEach(item => {\n    const content = item.dataset.target;\n    const match = content.match(/(\\d+)/);\n    if (!match) return;\n    const targetValue = parseInt(match[0], 10);\n    const prefix = content.split(match[0])[0];\n    const suffix = content.split(match[0])[1];\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromTo(item, {\n      textContent: 0\n    }, {\n      textContent: targetValue,\n      duration: 1.2,\n      ease: 'power1.out',\n      scrollTrigger: {\n        trigger: item,\n        start: 'top 85%',\n        once: true\n      },\n      snap: {\n        textContent: 1\n      },\n      onUpdate: function () {\n        const currentValue = Math.round(this.targets()[0].textContent);\n        item.textContent = `${prefix}${currentValue}${suffix}`;\n      }\n    });\n  });\n};\n\n// Ensure the function is only called when necessary\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (document.querySelector('.achievments-homepage-item__title')) {\n    animatedCount();\n  }\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/animation.js?");

/***/ }),

/***/ "./src/assets/scripts/homepage/index.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/homepage/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./src/assets/scripts/homepage/animation.js\");\n/* harmony import */ var _swipers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swipers */ \"./src/assets/scripts/homepage/swipers.js\");\n\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/index.js?");

/***/ }),

/***/ "./src/assets/scripts/homepage/swipers.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/homepage/swipers.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation]);\nfunction calculateSpaceBetweenSlides() {\n  const baseWidth = 1920;\n  const baseSpace = 30;\n  const vwSpace = baseSpace / baseWidth * 100;\n  return vwSpace * window.innerWidth / 100;\n}\nconst arrivalsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.arrivals-homepage-list-wrap', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],\n  loop: false,\n  navigation: {\n    nextEl: '.arrivals-homepage-button-next',\n    prevEl: '.arrivals-homepage-button-prev'\n  },\n  slidesPerView: 4,\n  spaceBetween: calculateSpaceBetweenSlides()\n});\nconst bestsellersSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.bestsellers-homepage-list-wrap', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],\n  loop: false,\n  navigation: {\n    nextEl: '.bestsellers-homepage-button-next',\n    prevEl: '.bestsellers-homepage-button-prev'\n  },\n  slidesPerView: 4,\n  spaceBetween: calculateSpaceBetweenSlides()\n});\nconst reviewsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.reviews-homepage-list-wrap', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],\n  loop: false,\n  navigation: {\n    nextEl: '.reviews-homepage-button-next',\n    prevEl: '.reviews-homepage-button-prev'\n  },\n  slidesPerView: 3,\n  spaceBetween: calculateSpaceBetweenSlides()\n});\nconst blogSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.blog-homepage-list-wrap', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],\n  loop: false,\n  navigation: {\n    nextEl: '.blog-homepage-button-next',\n    prevEl: '.blog-homepage-button-prev'\n  },\n  slidesPerView: 4,\n  spaceBetween: calculateSpaceBetweenSlides()\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/swipers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"homepage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbuild"] = self["webpackChunkbuild"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/assets/scripts/homepage.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;