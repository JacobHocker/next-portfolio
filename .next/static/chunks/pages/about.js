/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/about"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjacobhocker%2FDevelopment%2Fprojects%2Fnext-portfolio%2Fsrc%2Fpages%2Fabout.js&page=%2Fabout!":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjacobhocker%2FDevelopment%2Fprojects%2Fnext-portfolio%2Fsrc%2Fpages%2Fabout.js&page=%2Fabout! ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/about\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/about.js */ \"./src/pages/about.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/about\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmphY29iaG9ja2VyJTJGRGV2ZWxvcG1lbnQlMkZwcm9qZWN0cyUyRm5leHQtcG9ydGZvbGlvJTJGc3JjJTJGcGFnZXMlMkZhYm91dC5qcyZwYWdlPSUyRmFib3V0IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGtEQUFzQjtBQUM3QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YjQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2Fib3V0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9zcmMvcGFnZXMvYWJvdXQuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2Fib3V0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjacobhocker%2FDevelopment%2Fprojects%2Fnext-portfolio%2Fsrc%2Fpages%2Fabout.js&page=%2Fabout!\n"));

/***/ }),

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 1\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nfunction AnimatedText(param) {\n    let { text , clasName =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \" inline-block w-full text-dark font-bold capitalize text-8xl \".concat(clasName),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/AnimatedText.js\",\n                    lineNumber: 40,\n                    columnNumber: 25\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/AnimatedText.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/AnimatedText.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNvQjtBQUU5QyxNQUFNRyxRQUFRO0lBQ1ZDLFNBQVE7UUFDSkMsU0FBUTtJQUNaO0lBQ0FDLFNBQVE7UUFDSkQsU0FBUTtRQUNSRSxZQUFXO1lBQ1BOLE9BQU87WUFDUE8saUJBQWlCO1FBQ3JCO0lBQ0o7QUFDSjtBQUNBLE1BQU1DLGFBQWE7SUFDZkwsU0FBUTtRQUNKQyxTQUFRO1FBQ1JLLEdBQUU7SUFDTjtJQUNBSixTQUFRO1FBQ0pELFNBQVE7UUFDUkssR0FBRTtRQUNGSCxZQUFXO1lBQ1BJLFVBQVU7UUFDZDtJQUNKO0FBQ0o7QUFFQSxTQUFTQyxhQUFhLEtBQW9CLEVBQUU7UUFBdEIsRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEdBQUUsRUFBQyxHQUFwQjtJQUNsQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ2Qsb0RBQVM7WUFBQ2MsV0FBVyxnRUFBeUUsT0FBVEY7WUFDdEZJLFVBQVVmO1lBQ1ZDLFNBQVE7WUFDUkUsU0FBUTtzQkFHQU8sS0FBS00sS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdkIsOERBQUNwQixzREFBVztvQkFBYWMsV0FBVTtvQkFDbkNFLFVBQVVUOzt3QkFHTFk7d0JBQUs7O21CQUpRQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzFDO0tBckJTVjtBQXVCVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanM/NGMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVsYXksIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBxdW90ZSA9IHtcbiAgICBpbml0aWFsOntcbiAgICAgICAgb3BhY2l0eToxLFxuICAgIH0sXG4gICAgYW5pbWF0ZTp7XG4gICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgdHJhbnNpdGlvbjp7XG4gICAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjA4LFxuICAgICAgICB9XG4gICAgfVxufVxuY29uc3Qgc2luZ2xlV29yZCA9IHtcbiAgICBpbml0aWFsOntcbiAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICB5OjUwLFxuICAgIH0sXG4gICAgYW5pbWF0ZTp7XG4gICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgeTowLFxuICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBBbmltYXRlZFRleHQoeyB0ZXh0LCBjbGFzTmFtZT1cIlwifSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbXgtYXV0byBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8bW90aW9uLmgxIGNsYXNzTmFtZT17YCBpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZSB0ZXh0LTh4bCAke2NsYXNOYW1lfWB9XG4gICAgICAgICAgICB2YXJpYW50cz17cXVvdGV9XG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtzaW5nbGVXb3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmR9Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwiZGVsYXkiLCJtb3Rpb24iLCJxdW90ZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzaW5nbGVXb3JkIiwieSIsImR1cmF0aW9uIiwiQW5pbWF0ZWRUZXh0IiwidGV4dCIsImNsYXNOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ2YXJpYW50cyIsInNwbGl0IiwibWFwIiwid29yZCIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction about() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Jacob Hocker | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Jacob Hocker's about page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-col-8 gap-16\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                    children: \"Biography\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/about.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRDtBQUNaO0FBQ1o7QUFDSDtBQUV6QixTQUFTSSxRQUFRO0lBQ2IscUJBQ0k7OzBCQUNJLDhEQUFDRixrREFBSUE7O2tDQUNELDhEQUFDRztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0M7Z0JBQUtDLFdBQVU7MEJBQ1osNEVBQUNULDBEQUFNQTtvQkFBQ1MsV0FBVTs7c0NBQ2QsOERBQUNWLGdFQUFZQTs0QkFBQ1csTUFBSzs7Ozs7O3NDQUNuQiw4REFBQ0M7NEJBQUlGLFdBQVU7c0NBQ1gsNEVBQUNFOzBDQUNHLDRFQUFDQztvQ0FBR0gsV0FBVTs4Q0FBZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFGO0FBRUEsK0RBQWVOLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzP2ZkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBhYm91dCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkphY29iIEhvY2tlciB8IEFib3V0IFBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PVwiSmFjb2IgSG9ja2VyJ3MgYWJvdXQgcGFnZVwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zIGNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9J3B0LTE2Jz5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGdWVscyBQdXJwb3NlIVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIHctZnVsbCBncmlkLWNvbC04IGdhcC0xNic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21iLTQgdGV4dC1sZyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZGFyay83NSc+QmlvZ3JhcGh5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dCJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJIZWFkIiwiUmVhY3QiLCJhYm91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsInRleHQiLCJkaXYiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjacobhocker%2FDevelopment%2Fprojects%2Fnext-portfolio%2Fsrc%2Fpages%2Fabout.js&page=%2Fabout!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);