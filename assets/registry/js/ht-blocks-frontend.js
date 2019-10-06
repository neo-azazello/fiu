/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ht-blocks-frontend.src.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ht-blocks-frontend.src.js":
/*!***************************************!*\
  !*** ./src/ht-blocks-frontend.src.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggle_toggle_block_frontend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggle/toggle-block-frontend.js */ \"./src/modules/toggle/toggle-block-frontend.js\");\n/* harmony import */ var _modules_toggle_toggle_block_frontend_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_toggle_toggle_block_frontend_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_accordion_accordion_block_frontend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion/accordion-block-frontend.js */ \"./src/modules/accordion/accordion-block-frontend.js\");\n/* harmony import */ var _modules_accordion_accordion_block_frontend_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion_block_frontend_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_tabs_tabs_block_frontend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs/tabs-block-frontend.js */ \"./src/modules/tabs/tabs-block-frontend.js\");\n/* harmony import */ var _modules_tabs_tabs_block_frontend_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs_block_frontend_js__WEBPACK_IMPORTED_MODULE_2__);\n/** toggle */\n\n\n/** accordion */\n\n\n/** tabs */\n\n\n//# sourceURL=webpack:///./src/ht-blocks-frontend.src.js?");

/***/ }),

/***/ "./src/modules/accordion/accordion-block-frontend.js":
/*!***********************************************************!*\
  !*** ./src/modules/accordion/accordion-block-frontend.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function($){\n\n\t$('.wp-block-hb-accordion__title').click(function() {\n\t\t$(this).parents('.wp-block-hb-accordion').children('.wp-block-hb-accordion__section').removeClass('wp-block-hb-accordion__section--active');\n\t    $(this).parent('.wp-block-hb-accordion__section').addClass('wp-block-hb-accordion__section--active');\n\t});\n\n});\n\n//# sourceURL=webpack:///./src/modules/accordion/accordion-block-frontend.js?");

/***/ }),

/***/ "./src/modules/tabs/tabs-block-frontend.js":
/*!*************************************************!*\
  !*** ./src/modules/tabs/tabs-block-frontend.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function($){\n\n\n\t$( document ).on( 'click', '.wp-block-hb-tabs__nav li', function(e){\n\t\t\te.stopPropagation();\n\t\t\tvar tab = $(this).attr('data-tab');\n\t\t\tif(typeof tab !== 'undefined'){\n\n\t\t\t\t//deactivate all tabs\n\t\t\t\t$(this).parents('.wp-block-hb-tabs').find('li').attr('data-hb-tabs-tab--state', 'inactive');\n\t\t\t\t$(this).parents('.wp-block-hb-tabs').find('.wp-block-hb-tabs__content').attr('data-hb-tabs-tab--state', 'inactive');\n\t\t\t\n\t\t\t\t//activate this tab\n\t\t\t\tconsole.log('tab clicked->' + tab);\n\t\t\t\t$(this).attr('data-hb-tabs-tab--state', 'active');\n\t\t\t\t$(this).parents('.wp-block-hb-tabs').find('#' + tab).attr('data-hb-tabs-tab--state', 'active');\n\t\t\t\treturn false;\n\n\t\t\t\t\n\t\t\t\t$(this).parents('.wp-block-hb-tabs').find('#' + tab).attr('data-hb-tabs-tab--state', 'active');\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\t\n\t});\n\n\tconsole.log('tabs-block-frontend loaded');\n\n});\n\n//# sourceURL=webpack:///./src/modules/tabs/tabs-block-frontend.js?");

/***/ }),

/***/ "./src/modules/toggle/toggle-block-frontend.js":
/*!*****************************************************!*\
  !*** ./src/modules/toggle/toggle-block-frontend.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function($){\n\n\t$('.wp-block-hb-toggle__title').click(function() {\n\t    $(this).parent('.wp-block-hb-toggle').toggleClass('wp-block-hb-toggle--active');\n\t});\n\n});\n\n//# sourceURL=webpack:///./src/modules/toggle/toggle-block-frontend.js?");

/***/ })

/******/ });