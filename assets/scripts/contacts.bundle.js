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

/***/ "./src/assets/scripts/contacts.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/contacts.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contacts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts/index */ \"./src/assets/scripts/contacts/index.js\");\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/contacts.js?");

/***/ }),

/***/ "./src/assets/scripts/contacts/index.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/contacts/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map */ \"./src/assets/scripts/contacts/map/map.js\");\n\n(0,_map_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://build/./src/assets/scripts/contacts/index.js?");

/***/ }),

/***/ "./src/assets/scripts/contacts/map/map-style.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/contacts/map/map-style.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getMapTheme; }\n/* harmony export */ });\nfunction getMapTheme() {\n  return [{\n    featureType: 'all',\n    elementType: 'labels.text.fill',\n    stylers: [{\n      saturation: 36\n    }, {\n      color: '#000000'\n    }, {\n      lightness: 40\n    }]\n  }, {\n    featureType: 'all',\n    elementType: 'labels.text.stroke',\n    stylers: [{\n      visibility: 'on'\n    }, {\n      color: '#000000'\n    }, {\n      lightness: 16\n    }]\n  }, {\n    featureType: 'all',\n    elementType: 'labels.icon',\n    stylers: [{\n      visibility: 'off'\n    }]\n  }, {\n    featureType: 'administrative',\n    elementType: 'geometry.fill',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 20\n    }]\n  }, {\n    featureType: 'administrative',\n    elementType: 'geometry.stroke',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 17\n    }, {\n      weight: 1.2\n    }]\n  }, {\n    featureType: 'landscape',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 20\n    }]\n  }, {\n    featureType: 'poi',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 21\n    }]\n  }, {\n    featureType: 'road.highway',\n    elementType: 'geometry.fill',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 17\n    }]\n  }, {\n    featureType: 'road.highway',\n    elementType: 'geometry.stroke',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 29\n    }, {\n      weight: 0.2\n    }]\n  }, {\n    featureType: 'road.arterial',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 18\n    }]\n  }, {\n    featureType: 'road.local',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 16\n    }]\n  }, {\n    featureType: 'transit',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 19\n    }]\n  }, {\n    featureType: 'water',\n    elementType: 'geometry',\n    stylers: [{\n      color: '#000000'\n    }, {\n      lightness: 17\n    }]\n  }];\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/contacts/map/map-style.js?");

/***/ }),

/***/ "./src/assets/scripts/contacts/map/map.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/contacts/map/map.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ googleMap; }\n/* harmony export */ });\n/* harmony import */ var _map_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-style */ \"./src/assets/scripts/contacts/map/map-style.js\");\n/* harmony import */ var _markersData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markersData */ \"./src/assets/scripts/contacts/map/markersData.js\");\n\n\nconst filterBtn = document.querySelector('#filter-button');\nconst filterNav = document.querySelector('.map-navigation');\nif (filterBtn) {\n  filterBtn.addEventListener('click', function () {\n    filterNav.classList.toggle('oppened');\n  });\n}\nfunction googleMap() {\n  __webpack_require__.g.initMap = initMap;\n}\n// Google map start\nasync function func() {\n  const script = document.createElement('script');\n  let key = 'AIzaSyCYwk23aIR-N5XTFmojgQRHbj_T6lOOUPE';\n  // if (window.location.href.match(/localhost/)) key = '';\n  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&language=ua`;\n  document.getElementsByTagName('head')[0].appendChild(script);\n}\n\n// setTimeout(func, 1000);\nconst maps = document.querySelectorAll('.map');\nconst options = {\n  rootMargin: '0px',\n  threshold: 0.1\n};\nmaps.forEach(image => {\n  const callback = (entries, observer) => {\n    /* Content excerpted, show below */\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const lazyImage = entry.target;\n        lazyImage.src = lazyImage.dataset.src;\n        observer.unobserve(image);\n        func();\n      }\n    });\n  };\n  const observer = new IntersectionObserver(callback, options);\n  const target = image;\n  observer.observe(target);\n});\n// eslint-disable-next-line no-unused-vars\nfunction initMap() {\n  const gmarkers1 = [];\n  const center = {\n    lat: 49.87369859330394,\n    lng: 24.018499697172192\n  };\n  const choosedCategories = new Set();\n  choosedCategories.add('main');\n  const filterItems = document.querySelectorAll('[data-marker]');\n  const map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 12,\n    center,\n    scrollwheel: false,\n    navigationControl: false,\n    mapTypeControl: false,\n    scaleControl: false,\n    streetViewControl: false,\n    // Disable Street View control\n    draggable: true,\n    language: 'ua',\n    styles: (0,_map_style__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  });\n  window.googleMap = map;\n\n  /* beautify preserve:end */\n  const infowindow = new google.maps.InfoWindow({\n    text: '',\n    maxWidth: 300\n  });\n  const markersData = (0,_markersData__WEBPACK_IMPORTED_MODULE_1__.createMarkersData)(google);\n\n  // Create markers using the data\n  markersData.forEach(marker => {\n    const category = marker.type;\n    const mapMarker = new google.maps.Marker({\n      map,\n      category,\n      zIndex: marker.zIndex || 1,\n      icon: marker.icon,\n      cursor: 'grap',\n      // курсор при наведении на макркер жк\n      position: new google.maps.LatLng(marker.position.lat, marker.position.lng)\n    });\n    google.maps.event.addListener(mapMarker, 'click', function () {\n      infowindow.setContent(marker.text);\n      infowindow.open(map, mapMarker);\n      map.panTo(this.getPosition());\n    });\n    mapMarker.name = marker.type;\n    gmarkers1.push(mapMarker);\n  });\n}\n\n// window.addEventListener(\"load\", () => {\n// const legend = document.querySelector(\"[data-accordeon]\");\n// const legendTitle = document.querySelector(\".infrastructure-markers__btn\");\n// const openedMarker = document.querySelector(\".infrastructure-markers__btn svg\");\n// const markersHeight = getComputedStyle(\n//   document.querySelector(\".infrastructure-markers__ul\")\n// ).height;\n// if (document.documentElement.clientWidth < 575) {\n//     legend.classList.remove(\"opened\");\n//     gsap.timeline().fromTo(legend, { y: 0 }, { y: markersHeight });\n//     gsap.timeline().fromTo(legendTitle, {y: 0}, {y: markersHeight});\n// }\n\n// legendTitle.addEventListener(\"click\", () => {\n//   const legendWrapper = document.querySelector('.infastructure-markers__wrapper');\n//   legend.classList.toggle('opened');\n//   openedMarker.classList.toggle('rotate');\n//   if (legend.classList.contains(\"opened\")) {\n//     legendWrapper.classList.remove('closed');\n//     gsap.timeline().fromTo(legend, { y: markersHeight }, { y: 0 });\n//     gsap.timeline().fromTo(legendTitle, {y: markersHeight}, {y: 0});\n//   } else {\n//     legendWrapper.classList.add('closed')\n//     gsap.timeline().fromTo(legend, { y: 0 }, { y: markersHeight });\n//     gsap.timeline().fromTo(legendTitle, {y: 0}, {y: markersHeight});\n//   }\n// });\n// });\n\n//# sourceURL=webpack://build/./src/assets/scripts/contacts/map/map.js?");

/***/ }),

/***/ "./src/assets/scripts/contacts/map/markersData.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/contacts/map/markersData.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMarkersData: function() { return /* binding */ createMarkersData; },\n/* harmony export */   markersAdresses: function() { return /* binding */ markersAdresses; }\n/* harmony export */ });\nconst windowPath = window.location.origin + window.location.pathname;\nconst isDev = window.location.href.match('localhost') || window.location.href.match('https://soul-park-verstka.smartorange.com.ua/');\nconst prepareBaseFolder = isDev ? './assets/images/map/' : `${window.location.origin}/wp-content/themes/3d/assets/images/map/`;\n\n// Set the base folder dynamically\nconst baseFolder = prepareBaseFolder;\nconst markersAdresses = {\n  main: `${baseFolder}main.png`,\n  sales: `${baseFolder}sales.svg`\n};\nfunction createMarkersData(google) {\n  // Sizes will be defined here using the google object\n  const defaultMarkerSize = new google.maps.Size(37.4, 65);\n  const buildLogoSize = new google.maps.Size(82, 82);\n  return [{\n    type: 'main',\n    icon: {\n      url: markersAdresses.main,\n      scaledSize: buildLogoSize\n    },\n    position: {\n      lat: 49.87716460095959,\n      lng: 24.017357905477937\n    },\n    text: 'ЖК Soul Park'\n  }, {\n    type: 'sales',\n    icon: {\n      url: markersAdresses.sales,\n      scaledSize: defaultMarkerSize\n    },\n    position: {\n      lat: 49.86802710217604,\n      lng: 24.001854367077378\n    },\n    text: 'Відділ продажу - вул. Малоголосківська, 30, Львів, Львівська область, 79020'\n  }, {\n    type: 'sales',\n    icon: {\n      url: markersAdresses.sales,\n      scaledSize: defaultMarkerSize\n    },\n    position: {\n      lat: 49.82209066692305,\n      lng: 24.130588743617054\n    },\n    text: 'Відділ продажу - Галицька вулиця, Винники, Львівська область, 79495'\n  }, {\n    type: 'sales',\n    icon: {\n      url: markersAdresses.sales,\n      scaledSize: defaultMarkerSize\n    },\n    position: {\n      lat: 49.877966950959056,\n      lng: 24.027219168757025\n    },\n    text: 'Відділ продажу - вулиця Пилипа Орлика, Львів, Львівська область, 79059'\n  }];\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/contacts/map/markersData.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/scripts/contacts.js");
/******/ 	
/******/ })()
;