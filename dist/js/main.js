/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base/Tag.js":
/*!************************************!*\
  !*** ./src/components/base/Tag.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tag)\n/* harmony export */ });\n/* harmony import */ var _tag_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.scss */ \"./src/components/base/tag.scss\");\n\nclass Tag {\n  constructor(el) {\n    // selectors\n    this.domSelectors = {\n      tag: '.b_tag'\n    };\n\n    // classes\n    this.classes = {\n      active: 'active'\n    };\n    this.element = el;\n\n    // init\n    this.init();\n  }\n  init() {\n    console.log(\"Init for tag called!\");\n    console.log(this.element);\n  }\n}\n\n//# sourceURL=webpack://storybook-tailwind/./src/components/base/Tag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_base_Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base/Tag */ \"./src/components/base/Tag.js\");\n/* eslint-disable import/first */\n\n/*\nInstructions:\n-------------\nEvery component needs a js file. Every js file must import the css accordingly.\n\nDepending on if your component needs javascript, you need to import it differently\nhere.\n\nA: your component does not need javascript\n------------------------------------------\n\nImport the js:\nimport('./components/foo/foo');\n\nB: your component does not need javascript\n------------------------------------------\n\n1. step:\nImport the js:\nimport Foo from './components/foo/foo';\n2. step:\nAdd it to the components object:\nconst components = {\n  foo: {\n    Component: Foo,\n  },\n  ...\n}\n3. Add a data-init to your component markup:\n<div class=\"c_foo\" data-init=\"foo\"></div>\nAdd the data-init and Component values to the components object:\nconst components = {\n  foo: {\n    Component: Foo,\n    dataInit: 'foo',\n  },\n  ...\n}\n */\n\n\nconst components = {\n  tag: {\n    Component: _components_base_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    dataInit: 'tag'\n  }\n};\n\n// ------------------------------\n// --- Initialization -----------\n// ------------------------------\nfunction doInit() {\n  console.log(\"Do init\");\n\n  // init components\n  Object.keys(components).forEach(key => {\n    const component = components[key];\n    document.querySelectorAll(`[data-init=\"${component.dataInit}\"]`).forEach(element => new component.Component(element));\n  });\n}\nif (document.readyState !== 'loading') {\n  console.log(\"Call init\");\n  doInit();\n} else {\n  document.addEventListener('DOMContentLoaded', doInit);\n}\n\n//# sourceURL=webpack://storybook-tailwind/./src/index.js?");

/***/ }),

/***/ "./src/components/base/tag.scss":
/*!**************************************!*\
  !*** ./src/components/base/tag.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://storybook-tailwind/./src/components/base/tag.scss?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;