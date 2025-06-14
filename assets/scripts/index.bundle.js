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

/***/ "./src/assets/scripts/common/animation/parallaxImages.js":
/*!***************************************************************!*\
  !*** ./src/assets/scripts/common/animation/parallaxImages.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nconst initParallaxBlock = () => {\n  gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.refresh();\n  const parallaxImages = document.querySelectorAll('[parallax-block]');\n  parallaxImages.forEach(block => {\n    const scale = block.dataset.scale || 1;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.set(block, {\n      willChange: 'transform'\n    });\n    const speed = block.dataset.speed || 1;\n    const yPercent = block.dataset.percent || 0;\n    const time = block.dataset.time || 1;\n    const opacity = block.dataset.opacity || 1;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      ease: 'none',\n      scrollTrigger: {\n        trigger: block,\n        scrub: 3,\n        markers: false,\n        start: `top top+=${time}`,\n        end: 'bottom top'\n      }\n    }).fromTo(block, {\n      y: () => `${yPercent}%`,\n      opacity: opacity,\n      scale: 1\n    }, {\n      y: () => `${10 * (1 - speed)}%`,\n      ease: 'sine.inOut',\n      opacity: 1,\n      scale: scale\n    });\n  });\n};\nconst imageParallaxHeroBack = document.querySelectorAll('[parallax-block]');\nif (imageParallaxHeroBack) {\n  initParallaxBlock();\n}\nconst initParallaxBlockHorisontal = () => {\n  const svgGroups = document.querySelectorAll('[parallax-block-horisontal]');\n  svgGroups.forEach(group => {\n    const scale = group.dataset.scale || 1.2;\n    const speed = group.dataset.speed || 1;\n    const yPercent = group.dataset.percent || 10;\n    const time = group.dataset.time || 0.5;\n    const rotate = group.dataset.rotate || 0;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.set(group, {\n      x: `${yPercent}%`,\n      scale: 1,\n      willChange: 'transform'\n    });\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      ease: 'power2.inOut',\n      scrollTrigger: {\n        trigger: group,\n        scrub: 2,\n        // markers: true,\n        start: `top bottom`,\n        end: 'top top'\n      }\n    }).fromTo(group, {\n      scale: 1,\n      rotate: 0\n    }, {\n      x: () => `${10 * (1 - speed)}%`,\n      scale: scale,\n      ease: 'sine.inOut',\n      duration: time,\n      rotate: rotate\n    });\n  });\n};\nconst imageParallaxHeroBackHorisontal = document.querySelectorAll('[parallax-block-horisontal]');\nif (imageParallaxHeroBackHorisontal) {\n  initParallaxBlockHorisontal();\n}\nconst initParallaxBlockVertical = () => {\n  const svgGroups = document.querySelectorAll('[parallax-block-vertical]');\n  svgGroups.forEach(group => {\n    const scale = group.dataset.scale || 1.2;\n    const speed = group.dataset.speed || 1;\n    const yPercent = group.dataset.percent || 10;\n    const time = group.dataset.time || 0.5;\n    const rotate = group.dataset.rotate || 0;\n    // Set initial state\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.set(group, {\n      y: `${yPercent}%`,\n      scale: 1,\n      willChange: 'transform'\n    });\n\n    // Define timeline animation\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      ease: 'power2.inOut',\n      scrollTrigger: {\n        trigger: group,\n        scrub: 2,\n        markers: false,\n        start: `top bottom`,\n        end: 'top top'\n      }\n    }).fromTo(group, {\n      scale: 1,\n      rotate: 0\n    }, {\n      y: () => `${10 * (1 - speed)}%`,\n      scale: scale,\n      ease: 'sine.inOut',\n      duration: time,\n      rotate: rotate\n    });\n  });\n};\nconst imageParallaxVertical = document.querySelectorAll('[parallax-block-vertical]');\nif (imageParallaxVertical) {\n  initParallaxBlockVertical();\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/animation/parallaxImages.js?");

/***/ }),

/***/ "./src/assets/scripts/common/animation/scaleImages.js":
/*!************************************************************!*\
  !*** ./src/assets/scripts/common/animation/scaleImages.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nconst initScaled = () => {\n  const parallaxImages = document.querySelectorAll('[img-scale]');\n  parallaxImages.forEach(image => {\n    const wrap = document.createElement('div');\n    wrap.style.overflow = 'hidden';\n    wrap.style.height = '100%';\n    image.parentElement.prepend(wrap);\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.set(image, {\n      willChange: 'transform'\n    });\n    wrap.prepend(image);\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      ease: 'none',\n      scrollTrigger: {\n        trigger: wrap,\n        scrub: 0.5,\n        start: 'top bottom',\n        end: 'center center',\n        markers: false,\n        onLeave: () => {\n          console.log('leave');\n        }\n        // markers: true,\n      }\n    }).fromTo(image, {\n      scale: 1\n    }, {\n      scale: 1.2,\n      ease: 'linear'\n    });\n  });\n};\nconst imageScaled = document.querySelectorAll('[img-scale]');\nif (imageScaled) {\n  initScaled();\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/animation/scaleImages.js?");

/***/ }),

/***/ "./src/assets/scripts/common/contactForm.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/common/contactForm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactForm: function() { return /* binding */ contactForm; }\n/* harmony export */ });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var _pug_components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pug/components/form/form */ \"./src/pug/components/form/form.js\");\n/* harmony import */ var _pug_components_input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pug/components/input/input */ \"./src/pug/components/input/input.js\");\n/* harmony import */ var _successPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./successPopup */ \"./src/assets/scripts/common/successPopup.js\");\n\n\n\n\n\nconst contactForm = (formRef, onSuccess) => {\n  const btnRef = formRef.querySelector('[data-btn-submit]');\n  new _pug_components_form_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    elements: {\n      $form: formRef,\n      $btnSubmit: btnRef,\n      showSuccessMessage: false,\n      successAction: function () {\n        console.log('successAction');\n        const $form = this.$form;\n        _successPopup__WEBPACK_IMPORTED_MODULE_4__.successPopup.open();\n        const eventDetail = {\n          status: 'success',\n          formId: $form.id\n        };\n        const formSuccessEvent = new CustomEvent('formSubmissionSuccess', {\n          detail: eventDetail\n        });\n        document.dispatchEvent(formSuccessEvent);\n        setTimeout(() => {\n          _successPopup__WEBPACK_IMPORTED_MODULE_4__.successPopup.close();\n        }, 3000);\n        onSuccess && onSuccess();\n      },\n      fields: {\n        name: {\n          inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            animation: 'none',\n            $field: formRef.querySelector('[data-field-name]'),\n            typeInput: 'name'\n          }),\n          rule: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required')).trim(),\n          defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('name'),\n          valid: false,\n          error: []\n        },\n        phone: {\n          inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            animation: 'none',\n            $field: formRef.querySelector('[data-field-phone]'),\n            typeInput: 'phone'\n          }),\n          rule: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required')).min(17, i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('field_too_short', {\n            cnt: 19 - 7\n          })),\n          defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('phone'),\n          valid: false,\n          error: []\n        }\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/contactForm.js?");

/***/ }),

/***/ "./src/assets/scripts/common/contactFormFooter.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/common/contactFormFooter.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactFormFooter: function() { return /* binding */ contactFormFooter; }\n/* harmony export */ });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var _pug_components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pug/components/form/form */ \"./src/pug/components/form/form.js\");\n/* harmony import */ var _pug_components_input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pug/components/input/input */ \"./src/pug/components/input/input.js\");\n/* harmony import */ var _successPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./successPopup */ \"./src/assets/scripts/common/successPopup.js\");\n\n\n\n\n\nconst contactFormFooter = (formRef, onSuccess) => {\n  const btnRef = formRef.querySelector('[data-btn-submit]');\n  new _pug_components_form_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    elements: {\n      $form: formRef,\n      $btnSubmit: btnRef,\n      showSuccessMessage: false,\n      successAction: () => {\n        console.log('successAction');\n        _successPopup__WEBPACK_IMPORTED_MODULE_4__.successPopup.open();\n        const eventDetail = {\n          status: 'success'\n        };\n        console.log('eventDetail', eventDetail);\n        const formSuccessEvent = new CustomEvent('formSubmissionSuccess', {\n          detail: eventDetail\n        });\n        document.dispatchEvent(formSuccessEvent);\n        setTimeout(() => {\n          _successPopup__WEBPACK_IMPORTED_MODULE_4__.successPopup.close();\n        }, 6000);\n        onSuccess && onSuccess();\n      },\n      fields: {\n        phone: {\n          inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            animation: 'none',\n            $field: formRef.querySelector('[data-field-phone]'),\n            typeInput: 'phone'\n          }),\n          rule: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required')).min(17, i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('field_too_short', {\n            cnt: 19 - 7\n          })),\n          defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('phone'),\n          valid: false,\n          error: []\n        },\n        name: {\n          inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            animation: 'none',\n            $field: formRef.querySelector('[data-field-name]'),\n            typeInput: 'name'\n          }),\n          rule: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required')).trim(),\n          defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('name'),\n          valid: false,\n          error: []\n        }\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/contactFormFooter.js?");

/***/ }),

/***/ "./src/assets/scripts/common/contactPopup.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/common/contactPopup.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPopup: function() { return /* binding */ contactPopup; }\n/* harmony export */ });\n/* harmony import */ var _modalFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFactory */ \"./src/assets/scripts/common/modalFactory.js\");\n\nconst contactPopup = (0,_modalFactory__WEBPACK_IMPORTED_MODULE_0__.modalFactory)(document.querySelector('[data-form-popup]'));\nconst closeBtnRef = document.querySelector('[data-form-popup-close]');\nconst closeAllBtnRef = document.querySelector('[data-form-popup-close]');\ncloseBtnRef.addEventListener('click', () => {\n  contactPopup.close();\n});\ncloseAllBtnRef.addEventListener('click', () => {\n  contactPopup.close();\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/contactPopup.js?");

/***/ }),

/***/ "./src/assets/scripts/common/footer/footer.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/common/footer/footer.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\n\n// const footer = document.querySelector('footer');\n\n// const initFooter = () => {\n//   const scrollToTopBtn = document.querySelector('.footer-sales-list-item-arrow');\n//   const rootElement = document.documentElement;\n//   function scrollToTop() {\n//     rootElement.scrollTo({\n//       top: 0,\n//       behavior: 'smooth',\n//     });\n//   }\n//   scrollToTopBtn.addEventListener('click', scrollToTop);\n// };\n\n// if (footer) {\n//   initFooter();\n// }\nconst footer = document.querySelector('footer');\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/footer/footer.js?");

/***/ }),

/***/ "./src/assets/scripts/common/header/header.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/common/header/header.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contactForm */ \"./src/assets/scripts/common/contactForm.js\");\n/* harmony import */ var _contactPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contactPopup */ \"./src/assets/scripts/common/contactPopup.js\");\n/* harmony import */ var _lenisScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lenisScroll */ \"./src/assets/scripts/common/lenisScroll.js\");\n/* harmony import */ var _contactFormFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contactFormFooter */ \"./src/assets/scripts/common/contactFormFooter.js\");\n\n\n\n\n\n\n\n\n// contactFormFooter(document.querySelector('[data-form-contact]'));\n\nconst headerRef = document.querySelector('.header');\nconst popupRef = document.querySelector('.form-popup');\nlet lastScrollTop = 0;\nlet ticking = false;\nwindow.addEventListener('scroll', () => {\n  scrollFunction();\n});\nfunction scrollFunction() {\n  const scrollTop = window.scrollY || document.documentElement.scrollTop;\n  const isScrollingDown = scrollTop > lastScrollTop;\n  if (scrollTop === 0) {\n    // At the very top of the page\n    headerRef.classList.add('top');\n    headerRef.classList.remove('bg', 'header-hidden');\n  } else {\n    headerRef.classList.remove('top');\n    headerRef.classList.add('bg');\n    if (isScrollingDown) {\n      headerRef.classList.add('header-hidden');\n    } else {\n      headerRef.classList.remove('header-hidden');\n    }\n  }\n\n  // Special case for \"on\" class\n  if (headerRef.classList.contains('on')) {\n    headerRef.classList.add('bg');\n    headerRef.classList.remove('header-hidden');\n  }\n  lastScrollTop = scrollTop;\n}\n\n// Ensure the 'top' class is set correctly when the page loads\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (window.scrollY === 0) {\n    headerRef.classList.add('top');\n  } else {\n    headerRef.classList.remove('top');\n  }\n});\nconst contactFormsRef = document.querySelectorAll('[data-form=\"contact\"]');\ncontactFormsRef.forEach(el => {\n  (0,_contactForm__WEBPACK_IMPORTED_MODULE_0__.contactForm)(el);\n});\nconst requestFormRef = document.querySelectorAll('[data-open-form=\"true\"]');\nrequestFormRef.forEach(el => {\n  el.addEventListener('click', () => {\n    _contactPopup__WEBPACK_IMPORTED_MODULE_1__.contactPopup.open();\n    modalMobile.close();\n  });\n});\nconst preventScroll = () => {\n  if (headerRef.classList.contains('on')) {\n    _lenisScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop();\n    console.log('stop');\n  } else {\n    _lenisScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start();\n  }\n};\nconst contactFormRef = document.querySelectorAll('[data-form-contact]');\ncontactFormRef.forEach(el => {\n  (0,_contactFormFooter__WEBPACK_IMPORTED_MODULE_3__.contactFormFooter)(el);\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/header/header.js?");

/***/ }),

/***/ "./src/assets/scripts/common/i18nGeneral.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/common/i18nGeneral.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var _assets_scripts_modules_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/scripts/modules/helpers/helpers */ \"./src/assets/scripts/modules/helpers/helpers.js\");\n\n\n/*  */\nconst lang = (0,_assets_scripts_modules_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.langDetect)();\n(async () => {\n  await i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n    // lng: lang, // Текущий язык\n    lng: lang,\n    // Текущий язык\n    // debug: true,\n    // returnObjects: true,\n    resources: {\n      az: {\n        // Varsayılan dildə mətn\n        translation: {\n          // Varsayılan namespace\n          name: 'Ad:*',\n          phone: 'Telefon:*',\n          send: 'Müraciət et',\n          sending: 'Göndərilir',\n          field_too_short: 'telefon ən azı {{cnt}} simvol olmalıdır',\n          field_too_long: 'telefon ən çox {{cnt}} simvol olmalıdır',\n          only_number: 'yalnız rəqəmlər',\n          required: 'Bu sahə mütləq doldurulmalıdır',\n          sendingSuccessTitle: 'Mesaj göndərildi',\n          sendingSuccessText: 'Menecerlərimizin cavabını gözləyin',\n          sendingErrorText: 'Menecerlərimizin cavabını gözləyin',\n          sendingErrorTitle: 'Xəta baş verdi',\n          send_fail: 'Mesaj serverdə naməlum xəta səbəbindən göndərilmədi. Kod: [send_fail] ',\n          invalid_form: 'Mesaj serverdə naməlum xəta səbəbindən göndərilmədi. Kod: [invalid_form] ',\n          front_error: 'Mesaj serverdə naməlum xəta səbəbindən göndərilmədi. Kod: [front_error] ',\n          invalid_upload_file: 'Fayl yükləmə xətası. Kod: [invalid_upload_file]',\n          invalid_recaptcha: 'Captcha doldurun və yenidən cəhd edin. Kod: [invalid_recaptcha]',\n          connectionFailed: 'CRM ilə əlaqə xətası',\n          card: 'kart',\n          send: 'Müraciət et'\n        }\n      },\n      ru: {\n        // Текст на языке по умолчанию\n        translation: {\n          // namespace по умолчанию\n          name: 'Имя:*',\n          phone: 'Телефон:*',\n          send: 'Оставить заявку',\n          sending: 'Отправка',\n          field_too_short: 'телефон должен содержать как минимум {{cnt}} символов',\n          field_too_long: 'телефон должен содержать не более {{cnt}} символов',\n          only_number: 'только цифры',\n          required: 'Это поле обязательно для заполнения',\n          sendingSuccessTitle: 'Сообщение отправлено',\n          sendingSuccessText: 'Ожидайте ответа от наших менеджеров',\n          sendingErrorText: 'Ожидайте ответа от наших менеджеров',\n          sendingErrorTitle: 'Произошла ошибка',\n          send_fail: 'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [send_fail] ',\n          invalid_form: 'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [invalid_form] ',\n          front_error: 'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [front_error] ',\n          invalid_upload_file: 'Ошибка загрузки файла. Код: [invalid_upload_file]',\n          invalid_recaptcha: 'Заполните капчу и попробуйте снова. Код: [invalid_recaptcha]',\n          connectionFailed: 'Ошибка соединения с CRM',\n          card: 'карта',\n          send: 'Оставить заявку'\n        }\n      },\n      uk: {\n        // Текст на мові по замовчуванню\n        translation: {\n          // namespace по замовчуванню\n          name: 'Ім’я:*',\n          phone: 'Телефон:*',\n          send: 'Залишити заявку',\n          sending: 'Відправлення',\n          field_too_short: 'телефон має містити принаймні {{cnt}} символів',\n          field_too_long: 'телефон має містити не більше {{cnt}} символів',\n          only_number: 'тут лише цифри',\n          required: 'Це поле є обов’язковим',\n          sendingSuccessTitle: 'Повідомлення надіслано',\n          sendingSuccessText: 'Чекайте відповіді наших менеджерів',\n          sendingErrorText: 'Чекайте відповіді наших менеджерів',\n          sendingErrorTitle: 'Сталася помилка',\n          send_fail: 'Повідомлення не було відправлено через невідому помилку сервера. Код: [send_fail] ',\n          invalid_form: 'Повідомлення не було відправлено через невідому помилку сервера. Код: [invalid_form] ',\n          front_error: 'Повідомлення не було відправлено через невідому помилку сервера. Код: [front_error] ',\n          invalid_upload_file: 'Помилка завантаження файлу. Код: [invalid_upload_file]',\n          invalid_recaptcha: 'Заповніть капчу і спробуйте ще раз знову. Код: [invalid_recaptcha]',\n          connectionFailed: 'Помилка з’єднання с CRM',\n          card: 'card',\n          send: 'Залишити заявку'\n        }\n      },\n      en: {\n        // Тексты конкретного языка\n        translation: {\n          // namespace по замовчуванню\n          name: 'Ім’я:*',\n          phone: 'Телефон:*',\n          send: 'Залишити заявку',\n          sending: 'Відправлення',\n          field_too_short: 'телефон має містити принаймні {{cnt}} символів',\n          field_too_long: 'телефон має містити не більше {{cnt}} символів',\n          only_number: 'тут лише цифри',\n          required: 'Це поле є обов’язковим',\n          sendingSuccessTitle: 'Повідомлення надіслано',\n          sendingSuccessText: 'Чекайте відповіді наших менеджерів',\n          sendingErrorText: 'Чекайте відповіді наших менеджерів',\n          sendingErrorTitle: 'Сталася помилка',\n          send_fail: 'Повідомлення не було відправлено через невідому помилку сервера. Код: [send_fail] ',\n          invalid_form: 'Повідомлення не було відправлено через невідому помилку сервера. Код: [invalid_form] ',\n          front_error: 'Повідомлення не було відправлено через невідому помилку сервера. Код: [front_error] ',\n          invalid_upload_file: 'Помилка завантаження файлу. Код: [invalid_upload_file]',\n          invalid_recaptcha: 'Заповніть капчу і спробуйте ще раз знову. Код: [invalid_recaptcha]',\n          connectionFailed: 'Помилка з’єднання с CRM',\n          card: 'card',\n          send: 'Залишити заявку'\n        }\n      }\n    }\n  });\n})();\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/i18nGeneral.js?");

/***/ }),

/***/ "./src/assets/scripts/common/lenisScroll.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/common/lenisScroll.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lenis */ \"./node_modules/lenis/dist/lenis.mjs\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nconst lenis = new lenis__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  smoothWheel: true,\n  duration: 1.2\n});\nfunction raf(time) {\n  lenis.raf(time);\n  gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.update();\n  requestAnimationFrame(raf);\n}\nif (/Mobi|Android/i.test(navigator.userAgent)) {\n  lenis.destroy();\n}\ngsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.update();\nrequestAnimationFrame(raf);\n/* harmony default export */ __webpack_exports__[\"default\"] = (lenis);\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/lenisScroll.js?");

/***/ }),

/***/ "./src/assets/scripts/common/modalFactory.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/common/modalFactory.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalFactory: function() { return /* binding */ modalFactory; }\n/* harmony export */ });\nconst modalFactory = ref => ({\n  element: typeof ref === 'string' ? document.querySelector(ref) : ref,\n  open() {\n    this.element.classList.add('active');\n  },\n  close() {\n    this.element.classList.remove('active');\n  },\n  toggle() {\n    this.element.classList.toggleClass('active');\n  }\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/modalFactory.js?");

/***/ }),

/***/ "./src/assets/scripts/common/successPopup.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/common/successPopup.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   successPopup: function() { return /* binding */ successPopup; }\n/* harmony export */ });\n/* harmony import */ var _modalFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFactory */ \"./src/assets/scripts/common/modalFactory.js\");\n\nconst successPopup = (0,_modalFactory__WEBPACK_IMPORTED_MODULE_0__.modalFactory)(document.querySelector('[data-success]'));\n\n//# sourceURL=webpack://build/./src/assets/scripts/common/successPopup.js?");

/***/ }),

/***/ "./src/assets/scripts/index-app.js":
/*!*****************************************!*\
  !*** ./src/assets/scripts/index-app.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _common_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/header/header */ \"./src/assets/scripts/common/header/header.js\");\n/* harmony import */ var _common_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/footer/footer */ \"./src/assets/scripts/common/footer/footer.js\");\n/* harmony import */ var _common_lenisScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/lenisScroll */ \"./src/assets/scripts/common/lenisScroll.js\");\n/* harmony import */ var _common_animation_parallaxImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/animation/parallaxImages */ \"./src/assets/scripts/common/animation/parallaxImages.js\");\n/* harmony import */ var _common_animation_scaleImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/animation/scaleImages */ \"./src/assets/scripts/common/animation/scaleImages.js\");\n\n// // // eslint-disable-next-line import/no-extraneous-dependencies\n\n// import './common/i18nGeneral';\n\n// import './common/loader/loader';\n\n\n\n\n\n// import './common/animation/textAppearence';\n// import { fun } from './common/fun';\n\n__webpack_require__.g.gsap = gsap_all__WEBPACK_IMPORTED_MODULE_5__.gsap;\n__webpack_require__.g.ScrollTrigger = gsap_all__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger;\ngsap_all__WEBPACK_IMPORTED_MODULE_5__.gsap.core.globals('ScrollTrigger', gsap_all__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);\n__webpack_require__.g.axios = axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\ngsap_all__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);\nconst appHeight = () => {\n  const doc = document.documentElement;\n  doc.style.setProperty('--app-height', `${window.innerHeight}px`);\n};\nwindow.addEventListener('resize', appHeight);\nappHeight();\n// // fun();\n\n//# sourceURL=webpack://build/./src/assets/scripts/index-app.js?");

/***/ }),

/***/ "./src/assets/scripts/modules/helpers/helpers.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/modules/helpers/helpers.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eases: function() { return /* binding */ eases; },\n/* harmony export */   langDetect: function() { return /* binding */ langDetect; },\n/* harmony export */   useState: function() { return /* binding */ useState; }\n/* harmony export */ });\nconst eases = {\n  ex: 'expo.inOut',\n  exI: 'expo.in',\n  exO: 'expo.out',\n  p4: 'power4.inOut',\n  p4I: 'power4.in',\n  p4O: 'power4.out',\n  p2: 'power2.inOut',\n  p2I: 'power2.in',\n  p2O: 'power2.out',\n  circ: 'circ.inOut',\n  circO: 'circ.out',\n  circI: 'circ.in'\n};\nconst langDetect = () => {\n  const lang = document.documentElement.getAttribute('lang') || 'en';\n  if (lang === 'uk') return 'uk';\n  return lang;\n};\nfunction useState(initialValue) {\n  let value = initialValue;\n  const subscribers = [];\n  function setValue(newValue) {\n    value = newValue;\n    subscribers.forEach(subscriber => subscriber(value));\n  }\n  function getState() {\n    return value;\n  }\n  function subscribe(callback) {\n    subscribers.push(callback);\n    return () => {\n      const index = subscribers.indexOf(callback);\n      if (index !== -1) {\n        subscribers.splice(index, 1);\n      }\n    };\n  }\n  return [getState, setValue, subscribe];\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/helpers/helpers.js?");

/***/ }),

/***/ "./src/pug/components/form/form-view.js":
/*!**********************************************!*\
  !*** ./src/pug/components/form/form-view.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! on-change */ \"./node_modules/on-change/index.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var _assets_scripts_common_i18nGeneral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/scripts/common/i18nGeneral */ \"./src/assets/scripts/common/i18nGeneral.js\");\n\n\n\n\n// BEGIN\n\nconst renderForm = (form, elements) => {\n  const elementsParamFn = elements;\n  const fieldsKey = Object.keys(elements.fields);\n  switch (form.status) {\n    case 'renderErrorValidation':\n      elementsParamFn.$btnSubmit.setAttribute('disabled', true);\n      fieldsKey.forEach(key => {\n        const field = elementsParamFn.fields[key];\n        if (field.valid) {\n          field.inputWrapper.showSuccessStyle();\n          field.inputWrapper.writeMessage('');\n          if (elementsParamFn.showSuccessMessage) {\n            field.inputWrapper.writeMessage(field.defaultMessage);\n          }\n        } else {\n          field.inputWrapper.showErrorStyle();\n          field.inputWrapper.addSelectedStyle();\n          field.inputWrapper.writeMessage(field.error[0]);\n        }\n      });\n      break;\n    case 'renderSuccessValidation':\n      elementsParamFn.$btnSubmit.removeAttribute('disabled');\n      fieldsKey.forEach(key => {\n        const field = elementsParamFn.fields[key];\n        field.inputWrapper.showSuccessStyle();\n        field.inputWrapper.writeMessage('');\n      });\n      break;\n    case 'loading':\n      fieldsKey.forEach(key => {\n        const field = elementsParamFn.fields[key];\n        field.inputWrapper.showLoadingStyle();\n      });\n      elementsParamFn.$btnSubmit.setAttribute('disabled', true);\n      elementsParamFn.$btnSubmit.querySelector('[data-btn-submit-text]').innerHTML = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('sending');\n      break;\n    case 'successSand':\n      fieldsKey.forEach(key => {\n        const field = elementsParamFn.fields[key];\n        field.inputWrapper.showDefaultStyle();\n        field.inputWrapper.removeSelectedStyle();\n      });\n      elementsParamFn.$form.reset();\n      elementsParamFn.$btnSubmit.setAttribute('disabled', false);\n      elementsParamFn.$btnSubmit.querySelector('[data-btn-submit-text]').innerHTML = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('send');\n      if (typeof elementsParamFn.successAction === 'function') {\n        elementsParamFn.successAction();\n      }\n      break;\n    case 'filling':\n      break;\n    case 'failed':\n      elementsParamFn.$btnSubmit.removeAttribute('disabled');\n      elementsParamFn.$btnSubmit.querySelector('[data-btn-submit-text]').innerHTML = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('send');\n      break;\n    default:\n      throw Error(`Unknown form status: ${form.status}`);\n  }\n};\nconst initView = (state, elementsParamFn) => {\n  const mapping = {\n    status: () => renderForm(state, elementsParamFn)\n  };\n  const watchedState = (0,on_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state, path => {\n    if (mapping[path]) {\n      mapping[path]();\n    }\n  });\n  return watchedState;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initView);\n// END\n\n//# sourceURL=webpack://build/./src/pug/components/form/form-view.js?");

/***/ }),

/***/ "./src/pug/components/form/form.js":
/*!*****************************************!*\
  !*** ./src/pug/components/form/form.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormMonster; }\n/* harmony export */ });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _form_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-view */ \"./src/pug/components/form/form-view.js\");\n\n\n\nconst sendForm = async data => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/wp-admin/admin-ajax.php', data);\n  return response.data;\n};\nclass FormMonster {\n  constructor(setting) {\n    this.elements = setting.elements;\n    this.$body = document.querySelector('body');\n    this.showSuccessMessage = setting.showSuccessMessage || true;\n    this.state = {\n      serverError: null,\n      error: true,\n      form: setting.elements.fields,\n      status: 'filling'\n    };\n    this.fieldsKey = Object.keys(this.elements.fields);\n    this.watchedState = (0,_form_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.state, this.elements);\n    this.init();\n  }\n  validate(formData) {\n    const formDataObj = this.fieldsKey.reduce((acc, key) => {\n      acc[key] = formData.get(key);\n      return acc;\n    }, {});\n    /*  */\n    const shapeObject = this.fieldsKey.reduce((acc, key) => {\n      acc[key] = this.elements.fields[key].rule;\n      return acc;\n    }, {});\n    /*  */\n\n    const schema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape(shapeObject);\n    try {\n      schema.validateSync(formDataObj, {\n        abortEarly: false\n      });\n      return null;\n    } catch (err) {\n      return err.inner;\n    }\n  }\n  changeInput() {\n    return e => {\n      /*  */\n      e.preventDefault();\n      this.watchedState.status = 'filling';\n      /*  */\n      const formData = new FormData(this.elements.$form);\n      /*  */\n      const error = this.validate(formData);\n      /*  */\n      this.fieldsKey.map(key => {\n        const field = this.elements.fields[key];\n        field.valid = true;\n        field.error = [];\n        return null;\n      });\n      /*  */\n      /*  */\n      if (error) {\n        error.forEach(({\n          path,\n          message\n        }) => {\n          this.watchedState.form[path].valid = false;\n          this.watchedState.form[path].error.push(message);\n          return null;\n        });\n        this.watchedState.error = true;\n        this.watchedState.status = 'renderErrorValidation';\n        return null;\n      }\n      this.watchedState.error = false;\n      this.watchedState.status = 'renderSuccessValidation';\n      return null;\n    };\n  }\n  submitForm() {\n    return async e => {\n      /*  */\n      e.preventDefault();\n      this.changeInput()(e);\n\n      /*  */\n      if (this.watchedState.error === false) {\n        try {\n          this.watchedState.status = 'loading';\n          const formData = new FormData(this.elements.$form);\n          formData.append('action', 'app');\n\n          /* eslint-disable-next-line */\n          const {\n            error,\n            code_error\n          } = await sendForm(formData);\n\n          // if (true) {\n          if (error === 0) {\n            this.watchedState.status = 'successSand';\n            return true;\n          }\n          /* eslint-disable-next-line */\n          this.watchedState.serverError = code_error;\n          this.watchedState.status = 'failed';\n        } catch (err) {\n          this.watchedState.error = err.message;\n          this.watchedState.serverError = 'front_error';\n          this.watchedState.status = 'failed';\n        }\n      }\n      return null;\n    };\n  }\n  listers() {\n    this.elements.$form.addEventListener('submit', this.submitForm(this.watchedState));\n    this.fieldsKey.map(key => {\n      const {\n        input\n      } = this.elements.fields[key].inputWrapper;\n      input.addEventListener('input', this.changeInput(this.watchedState));\n      return null;\n    });\n  }\n  init() {\n    this.listers();\n  }\n}\n\n//# sourceURL=webpack://build/./src/pug/components/form/form.js?");

/***/ }),

/***/ "./src/pug/components/input/input.js":
/*!*******************************************!*\
  !*** ./src/pug/components/input/input.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SexyInput; }\n/* harmony export */ });\n/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ \"./node_modules/cleave.js/dist/cleave-esm.js\");\n/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-tel-input */ \"./node_modules/intl-tel-input/index.js\");\n/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass SexyInput {\n  constructor(setting) {\n    this.selected = false;\n    this.$field = setting.$field;\n    this.$input = setting.$input || setting.$field.querySelector('input');\n    this.typeInput = setting.typeInput || 'text';\n    this.animation = setting.animation || 'none';\n    this.$message = setting.$message || setting.$field.querySelector('[data-input-message]');\n    this.$body = document.querySelector('body');\n    this.init();\n  }\n  get input() {\n    return this.$input;\n  }\n  selectIn(self) {\n    return () => {\n      if (this.getStatusField() !== 'field--error') {\n        self.showSelectedStyle();\n        self.addSelectedStyle();\n      }\n    };\n  }\n  selectOut(self) {\n    return ({\n      target\n    }) => {\n      if (this.getStatusField() === 'field--error' || target.value !== '') return;\n      self.showDefaultStyle();\n      self.removeSelectedStyle();\n    };\n  }\n\n  /*  */\n  getStatusField() {\n    return this.$field.getAttribute('data-status');\n  }\n\n  /*  */\n  showSuccessStyle() {\n    this.changeStatus(this.$field, 'success');\n  }\n  showDefaultStyle() {\n    this.changeStatus(this.$field, 'default');\n  }\n  showErrorStyle() {\n    this.changeStatus(this.$field, 'error');\n  }\n  showSelectedStyle() {\n    this.changeStatus(this.$field, 'selected');\n  }\n  showLoadingStyle() {\n    this.changeStatus(this.$field, 'loading');\n  }\n  addSelectedStyle() {\n    if (this.animation === 'focus') {\n      this.$field.classList.add('selected');\n    }\n  }\n  removeSelectedStyle() {\n    this.$field.classList.remove('selected');\n  }\n  writeMessage(text) {\n    this.$message.innerHTML = text;\n  }\n  /*  */\n\n  changeStatus(fieldBlock, status) {\n    switch (status) {\n      case 'default':\n        fieldBlock.classList.remove('selected');\n        fieldBlock.setAttribute('data-status', 'field--inactive');\n        break;\n      case 'success':\n        fieldBlock.setAttribute('data-status', 'field--success');\n        break;\n      case 'error':\n        fieldBlock.setAttribute('data-status', 'field--error');\n        break;\n      case 'selected':\n        fieldBlock.classList.add('selected');\n        fieldBlock.setAttribute('data-status', 'field--active');\n        break;\n      case 'loading':\n        fieldBlock.classList.add('selected');\n        fieldBlock.setAttribute('data-status', 'field--loading');\n        break;\n      default:\n        throw new Error(`Unknown change status ${status}`);\n    }\n  }\n\n  /*  */\n\n  listeners(input) {\n    const self = this;\n    if (this.typeInput === 'phone') {\n      /* eslint-disable */\n      input.setAttribute('inputmode', 'tel');\n      input.intTelInput = intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default()(input, {\n        preferredCountries: ['ua', 'us', 'pl', 'kz', 'tr', 'de', 'ae'],\n        autoPlaceholder: 'on'\n      });\n      let cleave = new cleave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](input, {\n        /* eslint-enable */\n        numericOnly: true,\n        prefix: '+380',\n        blocks: [4, 2, 3, 2, 2],\n        delimiters: [' ', ' ', ' ', '']\n      });\n      document.querySelectorAll('.iti__country-list').forEach(element => {\n        element.setAttribute('data-lenis-prevent', '');\n      });\n      input.addEventListener('countrychange', () => {\n        const currentCountry = input.intTelInput.getSelectedCountryData();\n        const {\n          dialCode\n        } = currentCountry;\n        const selfInput = input;\n        let maskPartForUkraine = currentCountry.iso2 === 'ua' ? 2 : 3;\n\n        //'tr', 'kz', 'th', 'de', 'ae'\n        switch (currentCountry.iso2) {\n          case 'tr':\n            maskPartForUkraine = 3;\n            break;\n          case 'kz':\n            maskPartForUkraine = 2;\n            break;\n          case 'th':\n            maskPartForUkraine = 3;\n            break;\n          case 'de':\n            maskPartForUkraine = 3;\n            break;\n          case 'ae':\n            maskPartForUkraine = 4;\n            break;\n          default:\n            break;\n        }\n        cleave.destroy();\n        selfInput.value = '';\n        cleave = new cleave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](input, {\n          numericOnly: true,\n          delimiter: '-',\n          prefix: `+${dialCode}`,\n          /* В код страны добавляется символ + */\n          blocks: [dialCode.toString().length + 1, maskPartForUkraine, 3, 2, 2],\n          delimiters: [' ', ' ', ' ', '']\n        });\n      });\n    }\n    if (this.animation === 'focus') {\n      input.addEventListener('focus', self.selectIn(self));\n      input.addEventListener('blur', self.selectOut(self));\n    }\n  }\n  prepareMarkup() {\n    if (this.animation === 'focus') {\n      this.$field.setAttribute('data-animation', 'focus');\n    }\n    if (this.animation === 'none') {\n      this.$field.setAttribute('data-animation', 'none');\n    }\n  }\n  init() {\n    this.listeners(this.$input);\n    this.prepareMarkup(this.$input);\n  }\n}\n\n//# sourceURL=webpack://build/./src/pug/components/input/input.js?");

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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/assets/scripts/index-app.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;