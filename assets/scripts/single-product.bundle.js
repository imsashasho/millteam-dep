/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/single-product.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/single-product.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _single_product_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-product/index */ \"./src/assets/scripts/single-product/index.js\");\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/single-product.js?");

/***/ }),

/***/ "./src/assets/scripts/single-product/accordeon.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/single-product/accordeon.js ***!
  \********************************************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const faqItems = document.querySelectorAll('.single-product-details-item-faq');\n  faqItems.forEach(item => {\n    const header = item.querySelector('.single-product-details-item-faq-header');\n    header.addEventListener('click', () => {\n      const isActive = item.classList.contains('active');\n      faqItems.forEach(i => i.classList.remove('active'));\n      if (!isActive) {\n        item.classList.add('active');\n      }\n    });\n  });\n});\ndocument.addEventListener('DOMContentLoaded', () => {\n  const cardItems = document.querySelectorAll('.single-product-details-item');\n  cardItems.forEach(card => {\n    const titleWrap = card.querySelector('.single-product-details-item-title-wrap');\n    titleWrap.addEventListener('click', () => {\n      const isActive = card.classList.contains('active');\n      cardItems.forEach(item => item.classList.remove('active'));\n      if (!isActive) {\n        card.classList.add('active');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/single-product/accordeon.js?");

/***/ }),

/***/ "./src/assets/scripts/single-product/copySku.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/single-product/copySku.js ***!
  \******************************************************/
/***/ (function() {

eval("function copySku() {\n  const skuElement = document.querySelector('.single-product-hero-sku .text-12.text-mid-grey');\n  if (skuElement) {\n    const skuText = skuElement.textContent;\n    navigator.clipboard.writeText(skuText).catch(err => {\n      console.error('Failed to copy text: ', err);\n      alert('Failed to copy SKU. Please try again.');\n    });\n  }\n}\nconst skuElementBtn = document.querySelector('.single-product-hero-sku');\nif (skuElementBtn) {\n  skuElementBtn.addEventListener('click', event => {\n    if (event.target.classList.contains('text-12') && event.target.classList.contains('text-mid-grey')) {\n      copySku();\n    }\n  });\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/single-product/copySku.js?");

/***/ }),

/***/ "./src/assets/scripts/single-product/index.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/single-product/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swipers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swipers */ \"./src/assets/scripts/single-product/swipers.js\");\n/* harmony import */ var _copySku__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copySku */ \"./src/assets/scripts/single-product/copySku.js\");\n/* harmony import */ var _copySku__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_copySku__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _readMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readMore */ \"./src/assets/scripts/single-product/readMore.js\");\n/* harmony import */ var _readMore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_readMore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordeon */ \"./src/assets/scripts/single-product/accordeon.js\");\n/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_accordeon__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/single-product/index.js?");

/***/ }),

/***/ "./src/assets/scripts/single-product/readMore.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/single-product/readMore.js ***!
  \*******************************************************/
/***/ (function() {

eval("document.addEventListener('click', event => {\n  const readMore = event.target.closest('[data-more-btn]');\n  if (readMore) {\n    const parent = readMore.closest('[data-more-container]');\n    const isExpanded = parent.classList.toggle('expanded');\n    readMore.textContent = isExpanded ? 'Сховати' : 'Читати далі';\n  }\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/single-product/readMore.js?");

/***/ }),

/***/ "./src/assets/scripts/single-product/swipers.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/single-product/swipers.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nfunction calculateSpaceBetweenSlides(space) {\n  const baseWidth = 1920;\n  const baseSpace = space;\n  const vwSpace = baseSpace / baseWidth * 100;\n  return vwSpace * window.innerWidth / 100;\n}\nconst singleThumbsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.single-product-hero-swiper-thumbs', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Controller],\n  loop: false,\n  slidesPerView: 4,\n  watchSlidesProgress: true,\n  slideToClickedSlide: true,\n  spaceBetween: calculateSpaceBetweenSlides(20)\n});\nconst singleSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.single-product-hero-swiper', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Controller],\n  loop: false,\n  slidesPerView: 1,\n  navigation: {\n    nextEl: '.single-product-hero-swiper-thumbs-btn-next',\n    prevEl: '.single-product-hero-swiper-thumbs-btn-prev'\n  },\n  spaceBetween: calculateSpaceBetweenSlides(20),\n  thumbs: {\n    swiper: singleThumbsSwiper\n  }\n});\nconst arrivalsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.category-views-list-wrap', {\n  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],\n  loop: false,\n  navigation: {\n    nextEl: '.category-views-button-next',\n    prevEl: '.category-views-button-prev'\n  },\n  slidesPerView: 4,\n  spaceBetween: calculateSpaceBetweenSlides(30)\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/single-product/swipers.js?");

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
/******/ 			"single-product": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/assets/scripts/single-product.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;