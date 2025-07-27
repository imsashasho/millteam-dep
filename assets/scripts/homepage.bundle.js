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

/***/ "./src/assets/scripts/homepage.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/homepage.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/index */ \"./src/assets/scripts/homepage/index.js\");\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage.js?\n}");

/***/ }),

/***/ "./src/assets/scripts/homepage/accordeon.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/homepage/accordeon.js ***!
  \**************************************************/
/***/ (function() {

eval("{document.addEventListener('DOMContentLoaded', () => {\n  const faqItems = document.querySelectorAll('.faq-item');\n  if (faqItems) {\n    faqItems.forEach(item => {\n      const header = item.querySelector('.faq-item-header');\n      header.addEventListener('click', () => {\n        const isActive = item.classList.contains('active');\n        faqItems.forEach(i => i.classList.remove('active'));\n        if (!isActive) {\n          item.classList.add('active');\n        }\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/accordeon.js?\n}");

/***/ }),

/***/ "./src/assets/scripts/homepage/animation.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/homepage/animation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to('.parallax-img', {\n  yPercent: 20,\n  ease: 'none',\n  scrollTrigger: {\n    trigger: '.why-us-item-bg-img',\n    start: 'top bottom',\n    // starts when section enters viewport\n    end: 'bottom top',\n    // ends when section leaves viewport\n    scrub: 1\n  }\n});\nconst animatedCount = () => {\n  const items = document.querySelectorAll('.why-us-item-number');\n  items.forEach(item => {\n    const content = item.dataset.target;\n    const match = content.match(/(\\d+)/);\n    if (!match) return;\n    const targetValue = parseInt(match[0], 10);\n    const prefix = content.split(match[0])[0];\n    const suffix = content.split(match[0])[1];\n\n    // Utility to add leading zeros\n    const padWithZeros = (num, length) => String(num).padStart(length, '0');\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromTo(item, {\n      textContent: 0\n    }, {\n      textContent: targetValue,\n      duration: 1,\n      ease: 'power1.out',\n      scrollTrigger: {\n        trigger: item,\n        start: 'top 70%',\n        once: true\n      },\n      snap: {\n        textContent: 1\n      },\n      onUpdate: function () {\n        const currentValue = Math.round(this.targets()[0].textContent);\n        const formattedValue = padWithZeros(currentValue, 2);\n        item.textContent = `${prefix}${formattedValue}${suffix}`;\n      }\n    });\n  });\n};\n\n// Ensure the function is only called when necessary\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (document.querySelector('.why-us-item-number')) {\n    animatedCount();\n  }\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to('.companies-homepage-list', {\n  xPercent: -40,\n  ease: 'none',\n  scrollTrigger: {\n    scrub: true\n  }\n});\nconst blockContent = document.querySelector('.hero-content');\nconst topLeft = document.querySelector('.hero-row-item--top-left');\nconst topRight = document.querySelector('.hero-row-item--top-right');\nconst bottomLeft = document.querySelector('.hero-row-item--bottom-left');\nconst expandingBlock = document.getElementById('expanding-block');\nconst expandingSvg = document.querySelector('.expanding-block-svg');\nconst nextSection = document.querySelector('.about');\nconst clipShape = document.querySelector('.hero-clip-animated-shape');\nconst heroRowWrapper = document.querySelector('.hero-row-wrap');\nconst itemContent = document.querySelectorAll('.hero-row-item-content');\nconst tl = gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n  scrollTrigger: {\n    trigger: '.hero-inner',\n    start: 'top top',\n    end: '+=100%',\n    // Довше скролити\n    endTrigger: '.about',\n    scrub: true,\n    pin: true,\n    anticipatePin: 1\n    // markers: true, // Для налагодження\n  }\n});\ntl.to(blockContent, {\n  yPercent: -10,\n  opacity: 0,\n  duration: 1,\n  ease: 'sine.inOut'\n});\n\n// Витискаємо кожен блок у свою сторону\ntl.to(topLeft, {\n  x: '-60vw',\n  y: '-60vh',\n  scale: 0.8,\n  // opacity: 0,\n  ease: 'sine.inOut',\n  duration: 2\n}).to(topRight, {\n  x: '60vw',\n  y: '-60vh',\n  scale: 0.8,\n  // opacity: 0,\n  ease: 'sine.inOut',\n  duration: 2\n}, '<' // одночасно з попереднім\n).to(bottomLeft, {\n  x: '-60vw',\n  y: '60vh',\n  scale: 0.8,\n  // opacity: 0,\n  ease: 'sine.inOut',\n  duration: 2\n}, '<');\n// tl.to(heroRowWrapper, {\n//   height: 'auto',\n//   duration: 0.5,\n//   ease: 'sine.inOut',\n// });\n\n// Step 1: Expand to full width, stay at bottom\ntl.to(expandingBlock, {\n  width: '100vw',\n  right: '0',\n  left: '0',\n  ease: 'sine.inOut',\n  duration: 0.5\n}, '-=1.5' // overlap with previous animations if needed\n);\n\n// Step 2: Expand height and move to top\ntl.to(expandingBlock, {\n  height: '100vh',\n  top: '0',\n  bottom: 'auto',\n  ease: 'sine.inOut',\n  duration: 0.5\n}, '>');\ntl.to(clipShape, {\n  clipPath: 'polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0)',\n  ease: 'power2.inOut',\n  scale: 1,\n  duration: 0.5,\n  top: 0\n}, '-=0.5' // slight overlap for fluid feel\n);\ntl.to(blockContent, {\n  yPercent: 0,\n  opacity: 1,\n  duration: 1,\n  ease: 'sine.inOut'\n});\ntl.to(itemContent, {\n  y: '40%',\n  // stagger: 0.2,\n  ease: 'sine.inOut',\n  duration: 1\n}, '-=1.5' // Start this animation at the same time as the previous one\n); // Start this animation at the same time as the previous one\n\n// Показ наступної секції\ntl.to(nextSection, {\n  opacity: 1,\n  duration: 0.8,\n  ease: 'sine.inOut'\n}, '+=0.3');\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/animation.js?\n}");

/***/ }),

/***/ "./src/assets/scripts/homepage/cardAnimation.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/homepage/cardAnimation.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Select all decorative elements\n  const decoElements = document.querySelectorAll('[class^=\"features-additional-list-item-deco--\"]');\n\n  // Create a unique parallax effect for each decorative element\n  decoElements.forEach((element, index) => {\n    // Calculate unique parallax parameters based on element index\n    const parallaxIntensity = 25 + index % 3 * 10; // Values between 25-45\n    const scaleAmount = 1 + index % 5 * 0.05; // Values between 1.0-1.2\n    const rotationAmount = index % 2 === 0 ? 5 : -5; // Alternate rotation direction\n    const parallaxDirection = index % 2 === 0 ? 1 : -1; // Alternate parallax direction\n\n    // Create a timeline for this element\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n      scrollTrigger: {\n        trigger: element.closest('.features-additional-list-item'),\n        start: 'top top',\n        // Start animation when the top of the container hits the bottom of the viewport\n        end: 'bottom bottom',\n        // End animation when the bottom of the container leaves the top of the viewport\n        scrub: 1.5,\n        // Smooth scrubbing effect with slight delay for more natural feel\n        toggleActions: 'play none none reverse'\n        // markers: true, // Enable for debugging\n      }\n    });\n\n    // Add animations to the timeline\n    tl.fromTo(element, {\n      y: parallaxDirection * -20,\n      // Starting position\n      scale: 0.95,\n      opacity: 0.85,\n      rotation: parallaxDirection * -rotationAmount\n    }, {\n      y: parallaxDirection * parallaxIntensity,\n      // Move element for parallax effect\n      scale: scaleAmount,\n      // Slightly scale up\n      opacity: 1,\n      rotation: parallaxDirection * rotationAmount,\n      // Slight rotation for more dynamic feel\n      ease: 'power1.inOut'\n    });\n\n    // Add hover effect\n    element.addEventListener('mouseenter', () => {\n      gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(element, {\n        scale: scaleAmount + 0.1,\n        rotation: parallaxDirection * rotationAmount * 1.5,\n        duration: 0.4,\n        ease: 'power2.out'\n      });\n    });\n    element.addEventListener('mouseleave', () => {\n      gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(element, {\n        scale: gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProperty(element, 'scale'),\n        rotation: gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProperty(element, 'rotation'),\n        duration: 0.4,\n        ease: 'power2.inOut'\n      });\n    });\n  });\n  const featuresList = document.querySelector('.features-additional-list');\n  if (featuresList) {\n    const layeredParallax = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n      scrollTrigger: {\n        trigger: featuresList,\n        start: 'top bottom',\n        end: 'bottom top',\n        scrub: true\n      }\n    });\n\n    // Group elements by layers for different parallax speeds\n    const layer1 = document.querySelectorAll('.features-additional-list-item-deco--1, .features-additional-list-item-deco--4, .features-additional-list-item-deco--7');\n    const layer2 = document.querySelectorAll('.features-additional-list-item-deco--2, .features-additional-list-item-deco--5, .features-additional-list-item-deco--8');\n    const layer3 = document.querySelectorAll('.features-additional-list-item-deco--3, .features-additional-list-item-deco--6, .features-additional-list-item-deco--9');\n\n    // Add subtle floating animation to each layer\n    layer1.forEach(element => {\n      gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(element, {\n        y: '+=15',\n        x: '+=10',\n        duration: 3 + Math.random() * 2,\n        repeat: -1,\n        yoyo: true,\n        ease: 'sine.inOut'\n      });\n    });\n    layer2.forEach(element => {\n      gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(element, {\n        y: '+=20',\n        x: '-=5',\n        duration: 4 + Math.random() * 2,\n        repeat: -1,\n        yoyo: true,\n        ease: 'sine.inOut',\n        delay: Math.random()\n      });\n    });\n    layer3.forEach(element => {\n      gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(element, {\n        y: '+=10',\n        x: '+=7',\n        duration: 5 + Math.random() * 2,\n        repeat: -1,\n        yoyo: true,\n        ease: 'sine.inOut',\n        delay: Math.random()\n      });\n    });\n  }\n\n  // Add fade-in effect when elements enter the viewport\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].utils.toArray('.features-additional-list-item').forEach((item, i) => {\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(item, {\n      autoAlpha: 0,\n      y: 50,\n      duration: 0.8,\n      ease: 'power2.out',\n      scrollTrigger: {\n        trigger: item,\n        start: 'top 85%',\n        toggleActions: 'play none none none'\n      },\n      delay: i * 0.1 // Stagger effect\n    });\n  });\n});\n\n// Optional: Add CSS for better performance\n// Add this to your CSS:\n/*\n.features-additional-list-item-deco img {\n  will-change: transform;\n  backface-visibility: hidden;\n  transform: translateZ(0);\n}\n*/\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/cardAnimation.js?\n}");

/***/ }),

/***/ "./src/assets/scripts/homepage/features.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/homepage/features.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCreative, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);\nconst paginationButtons = Array.from(document.querySelectorAll('.features-main-swiper-pagination-item'));\n\n// Update custom pagination\nfunction updateCustomPagination(index) {\n  console.log('Updating pagination for index:', index);\n  paginationButtons.forEach(btn => btn.classList.remove('active'));\n  const activeBtn = paginationButtons.find(btn => Number(btn.dataset.index) === index);\n  if (activeBtn) activeBtn.classList.add('active');\n}\n\n// Function to check if slide contains video\nfunction hasVideo(slide) {\n  return slide && slide.querySelector('video') !== null;\n}\n\n// Function to handle video playback\nfunction handleVideoPlayback(slide) {\n  // First pause all videos to ensure only one plays at a time\n  document.querySelectorAll('.swiper-slide video').forEach(video => {\n    video.pause();\n    video.currentTime = 0;\n  });\n\n  // If current slide has video, play it\n  if (hasVideo(slide)) {\n    const video = slide.querySelector('video');\n\n    // Check if video element exists and is valid\n    if (video && typeof video.play === 'function') {\n      // Add loading class if needed\n      slide.classList.add('video-loading');\n\n      // Try to play the video with proper error handling\n      video.play().then(() => {\n        console.log('Video is playing');\n        slide.classList.remove('video-loading');\n        slide.classList.add('video-playing');\n      }).catch(error => {\n        console.warn('Video playback error:', error.message);\n        slide.classList.remove('video-loading');\n\n        // Handle autoplay restrictions\n        if (error.name === 'NotAllowedError') {\n          console.warn('Autoplay prevented by browser. User interaction required.');\n          // You could add a play button overlay here if needed\n        }\n      });\n\n      // Set up ended event to handle loop or next slide\n      video.onended = () => {\n        slide.classList.remove('video-playing');\n        // Optionally advance to next slide when video ends\n        // swiper.slideNext();\n      };\n    }\n  }\n}\nconst swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.features-main-swiper', {\n  // effect: 'creative',\n  loop: false,\n  grabCursor: true,\n  slidesPerView: 1,\n  speed: 1100,\n  direction: 'vertical',\n  autoplay: {\n    delay: 5000,\n    disableOnInteraction: true\n  },\n  // creativeEffect: {\n  //   prev: {\n  //     shadow: true,\n  //     translate: [0, '-100%', -20],\n  //   },\n  //   next: {\n  //     shadow: true,\n  //     translate: [0, '110%', -30],\n  //   },\n  // },\n  on: {\n    init: function () {\n      // Handle initial slide\n      setTimeout(() => {\n        handleVideoPlayback(this.slides[this.activeIndex]);\n      }, 100);\n    },\n    slideChange: function () {\n      updateCustomPagination(this.realIndex);\n    },\n    slideChangeTransitionEnd: function () {\n      handleVideoPlayback(this.slides[this.activeIndex]);\n    },\n    touchEnd: function () {\n      // Re-check video playback on touch end (mobile)\n      setTimeout(() => {\n        handleVideoPlayback(this.slides[this.activeIndex]);\n      }, 100);\n    }\n  }\n});\n\n// Handle pagination clicks\npaginationButtons.forEach(button => {\n  button.addEventListener('click', () => {\n    const index = parseInt(button.dataset.index, 10);\n    swiper.slideTo(index);\n  });\n});\n\n// Add observer to handle video visibility changes (useful for tab switching, etc)\nif ('IntersectionObserver' in window) {\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      const video = entry.target.querySelector('video');\n      if (video) {\n        if (entry.isIntersecting) {\n          // Only play if this is the active slide\n          if (swiper.slides[swiper.activeIndex] === entry.target) {\n            video.play().catch(e => console.warn('Visibility observer video play error:', e));\n          }\n        } else {\n          video.pause();\n        }\n      }\n    });\n  }, {\n    threshold: 0.5\n  });\n\n  // Observe all slides\n  swiper.slides.forEach(slide => {\n    if (hasVideo(slide)) {\n      observer.observe(slide);\n    }\n  });\n}\n\n// Optional: Setup event listeners for all videos to handle errors better\ndocument.querySelectorAll('.swiper-slide video').forEach(video => {\n  video.addEventListener('error', e => {\n    console.error('Video error:', e);\n    const slide = video.closest('.swiper-slide');\n    if (slide) {\n      slide.classList.remove('video-loading');\n      slide.classList.add('video-error');\n    }\n  });\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/features.js?\n}");

/***/ }),

/***/ "./src/assets/scripts/homepage/index.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/homepage/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper */ \"./src/assets/scripts/homepage/swiper.js\");\n/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordeon */ \"./src/assets/scripts/homepage/accordeon.js\");\n/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_accordeon__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ \"./src/assets/scripts/homepage/animation.js\");\n/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features */ \"./src/assets/scripts/homepage/features.js\");\n/* harmony import */ var _cardAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardAnimation */ \"./src/assets/scripts/homepage/cardAnimation.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/index.js?\n}");

/***/ }),

/***/ "./src/assets/scripts/homepage/swiper.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/homepage/swiper.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_2__.EffectCreative, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay]);\nconst paginationButtons = Array.from(document.querySelectorAll('.hero-swiper-pagination-item'));\n\n// Update custom pagination\nfunction updateCustomPagination(index) {\n  paginationButtons.forEach(btn => btn.classList.remove('active'));\n  const activeBtn = paginationButtons.find(btn => Number(btn.dataset.index) === index);\n  if (activeBtn) activeBtn.classList.add('active');\n}\n\n// Function to check if slide contains video\nfunction hasVideo(slide) {\n  return slide && slide.querySelector('video') !== null;\n}\n\n// Function to handle video playback\nfunction handleVideoPlayback(slide) {\n  // First pause all videos to ensure only one plays at a time\n  document.querySelectorAll('.swiper-slide video').forEach(video => {\n    video.pause();\n    video.currentTime = 0;\n  });\n\n  // If current slide has video, play it\n  if (hasVideo(slide)) {\n    const video = slide.querySelector('video');\n\n    // Check if video element exists and is valid\n    if (video && typeof video.play === 'function') {\n      // Add loading class if needed\n      slide.classList.add('video-loading');\n\n      // Try to play the video with proper error handling\n      video.play().then(() => {\n        console.log('Video is playing');\n        slide.classList.remove('video-loading');\n        slide.classList.add('video-playing');\n      }).catch(error => {\n        console.warn('Video playback error:', error.message);\n        slide.classList.remove('video-loading');\n\n        // Handle autoplay restrictions\n        if (error.name === 'NotAllowedError') {\n          console.warn('Autoplay prevented by browser. User interaction required.');\n          // You could add a play button overlay here if needed\n        }\n      });\n\n      // Set up ended event to handle loop or next slide\n      video.onended = () => {\n        slide.classList.remove('video-playing');\n        // Optionally advance to next slide when video ends\n        // swiper.slideNext();\n      };\n    }\n  }\n}\nconst swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.hero-swiper', {\n  effect: 'creative',\n  loop: false,\n  grabCursor: true,\n  slidesPerView: 1,\n  speed: 1100,\n  autoplay: {\n    delay: 5000,\n    disableOnInteraction: true\n  },\n  creativeEffect: {\n    prev: {\n      shadow: true,\n      translate: [0, '-100%', -20]\n    },\n    next: {\n      shadow: true,\n      translate: [0, '100%', -30]\n    }\n  },\n  on: {\n    init: function () {\n      // Handle initial slide\n      setTimeout(() => {\n        handleVideoPlayback(this.slides[this.activeIndex]);\n      }, 100);\n    },\n    slideChange: function () {\n      updateCustomPagination(this.realIndex);\n    },\n    slideChangeTransitionEnd: function () {\n      handleVideoPlayback(this.slides[this.activeIndex]);\n    },\n    touchEnd: function () {\n      // Re-check video playback on touch end (mobile)\n      setTimeout(() => {\n        handleVideoPlayback(this.slides[this.activeIndex]);\n      }, 100);\n    }\n  }\n});\n\n// Handle pagination clicks\npaginationButtons.forEach(button => {\n  button.addEventListener('click', () => {\n    const index = parseInt(button.dataset.index, 10);\n    swiper.slideTo(index);\n  });\n});\n\n// Add observer to handle video visibility changes (useful for tab switching, etc)\nif ('IntersectionObserver' in window) {\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      const video = entry.target.querySelector('video');\n      if (video) {\n        if (entry.isIntersecting) {\n          // Only play if this is the active slide\n          if (swiper.slides[swiper.activeIndex] === entry.target) {\n            video.play().catch(e => console.warn('Visibility observer video play error:', e));\n          }\n        } else {\n          video.pause();\n        }\n      }\n    });\n  }, {\n    threshold: 0.5\n  });\n\n  // Observe all slides\n  swiper.slides.forEach(slide => {\n    if (hasVideo(slide)) {\n      observer.observe(slide);\n    }\n  });\n}\n\n// Optional: Setup event listeners for all videos to handle errors better\ndocument.querySelectorAll('.swiper-slide video').forEach(video => {\n  video.addEventListener('error', e => {\n    console.error('Video error:', e);\n    const slide = video.closest('.swiper-slide');\n    if (slide) {\n      slide.classList.remove('video-loading');\n      slide.classList.add('video-error');\n    }\n  });\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/homepage/swiper.js?\n}");

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