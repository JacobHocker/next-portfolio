"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TransitionEffect.js":
/*!********************************************!*\
  !*** ./src/components/TransitionEffect.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst TransitionEffect = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                exit: {\n                    x: [\n                        \"0%\",\n                        \"100%\"\n                    ],\n                    width: [\n                        \"0%\",\n                        \"100%\"\n                    ]\n                },\n                transition: {\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/TransitionEffect.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/TransitionEffect.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-15 bg-dark\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.4,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/TransitionEffect.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = TransitionEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransitionEffect);\nvar _c;\n$RefreshReg$(_c, \"TransitionEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDYTtBQUV2QyxNQUFNRSxtQkFBbUIsSUFBTTtJQUMzQixxQkFDSTs7MEJBQ0ksOERBQUNELHFEQUFVO2dCQUFDRyxXQUFVO2dCQUN0QkMsU0FBUztvQkFBRUMsR0FBRTtvQkFBUUMsT0FBTTtnQkFBTztnQkFDbENDLFNBQVM7b0JBQUVGLEdBQUU7b0JBQU1DLE9BQU07Z0JBQUs7Z0JBQzlCRSxNQUFNO29CQUFFSCxHQUFFO3dCQUFDO3dCQUFNO3FCQUFPO29CQUFFQyxPQUFPO3dCQUFDO3dCQUFNO3FCQUFPO2dCQUFDO2dCQUNoREcsWUFBWTtvQkFBRUMsVUFBUztvQkFBS0MsTUFBSztnQkFBWTs7Ozs7OzBCQUU3Qyw4REFBQ1gscURBQVU7Z0JBQUNHLFdBQVU7Z0JBQ3RCQyxTQUFTO29CQUFFQyxHQUFFO29CQUFRQyxPQUFNO2dCQUFPO2dCQUNsQ0MsU0FBUztvQkFBRUYsR0FBRTtvQkFBTUMsT0FBTTtnQkFBSztnQkFDOUJHLFlBQVk7b0JBQUVHLE9BQU07b0JBQUtGLFVBQVM7b0JBQUtDLE1BQUs7Z0JBQVk7Ozs7OzswQkFFeEQsOERBQUNYLHFEQUFVO2dCQUFDRyxXQUFVO2dCQUN0QkMsU0FBUztvQkFBRUMsR0FBRTtvQkFBUUMsT0FBTTtnQkFBTztnQkFDbENDLFNBQVM7b0JBQUVGLEdBQUU7b0JBQU1DLE9BQU07Z0JBQUs7Z0JBQzlCRyxZQUFZO29CQUFFRyxPQUFNO29CQUFLRixVQUFTO29CQUFLQyxNQUFLO2dCQUFZOzs7Ozs7OztBQUlwRTtLQXJCTVY7QUF1Qk4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzPzE2MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFRyYW5zaXRpb25FZmZlY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0zMCBiZy1wcmltYXJ5XCIgXG4gICAgICAgICAgICBpbml0aWFsPXt7IHg6XCIxMDAlXCIsIHdpZHRoOlwiMTAwJVwiIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHg6XCIwJVwiLCB3aWR0aDpcIjAlXCIgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgeDpbXCIwJVwiLCBcIjEwMCVcIl0sIHdpZHRoOiBbXCIwJVwiLCBcIjEwMCVcIl0gfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246MC44LCBlYXNlOlwiZWFzZUluT3V0XCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMjAgYmctbGlnaHRcIiBcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeDpcIjEwMCVcIiwgd2lkdGg6XCIxMDAlXCIgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeDpcIjAlXCIsIHdpZHRoOlwiMCVcIiB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTowLjIsIGR1cmF0aW9uOjAuOCwgZWFzZTpcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBoLXNjcmVlbiB6LTE1IGJnLWRhcmtcIiBcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeDpcIjEwMCVcIiwgd2lkdGg6XCIxMDAlXCIgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeDpcIjAlXCIsIHdpZHRoOlwiMCVcIiB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTowLjQsIGR1cmF0aW9uOjAuOCwgZWFzZTpcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb25FZmZlY3QiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJUcmFuc2l0aW9uRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIngiLCJ3aWR0aCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.js\n"));

/***/ })

});