"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1.25px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full dark:bg-light tranisition-[width] ease duration-300 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com/JacobHocker\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://www.linkedin.com/in/jacobhocker/\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://pintrest.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://dribble.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setMode(mode === \"light\" ? \"dark\" : \"light\");\n                        },\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\\n                \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n                \"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 97,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                            lineNumber: 99,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/components/NavBar.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavBar, \"bpg7nQjE1LUbvkT9xTUmmm2/twQ=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUNkLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtJQXpGTWtCOztRQUNzQlIsK0RBQWdCQTs7O01BRHRDUTtBQTJGTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IERyaWJiYmxlSWNvbiwgR2l0aHViSWNvbiwgTGlua2VkSW5JY29uLCBNb29uSWNvbiwgUGludGVyZXN0SWNvbiwgU3VuSWNvbiwgVHdpdHRlckljb24gfSBmcm9tICcuL0ljb25zJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHVzZVRoZW1lU3dpdGNoZXIgZnJvbSAnLi9ob29rcy91c2VUaGVtZVN3aXRjaGVyJztcblxuXG5jb25zdCBDdXN0b21MaW5rID0gKHtocmVmLCB0aXRsZSwgY2xhc3NOYW1lID0gXCJcIn0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLVsxLjI1cHhdIGlubGluZS1ibG9jayBiZy1kYXJrIGFic29sdXRlIGxlZnQtMCAtYm90dG9tLTAuNSBncm91cC1ob3Zlcjp3LWZ1bGwgZGFyazpiZy1saWdodCB0cmFuaXNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnIDogJ3ctMCd9YH0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICA8L0xpbms+IFxuICAgIClcbn1cblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVRoZW1lU3dpdGNoZXIoKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlclxuICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblxuICAgICAgICBkYXJrOnRleHQtbGlnaHQnXG4gICAgICAgID5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9cIiB0aXRsZT1cIkhvbWVcIiBjbGFzc05hbWU9XCJtci00XCIgIC8+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiQWJvdXRcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxuICAgICAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIiB0aXRsZT1cIkFydGljbGVzXCIgIGNsYXNzTmFtZT1cIm1sLTRcIiAvPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XG5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmEgIGhyZWYgPSBcImh0dHBzOi8vdHdpdHRlci5jb21cIlxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6MC45IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3ctNiBtci0zJyA+XG4gICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XG5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmEgIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9KYWNvYkhvY2tlclwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTowLjkgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAndy02IG14LTMnID5cbiAgICAgICAgICAgICAgICAgICAgPEdpdGh1Ykljb24gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5hICBocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFjb2Job2NrZXIvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOjAuOSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICd3LTYgbXgtMycgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua2VkSW5JY29uIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSAgaHJlZiA9IFwiaHR0cHM6Ly9waW50cmVzdC5jb21cIlxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6MC45IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3ctNiBteC0zJyA+XG4gICAgICAgICAgICAgICAgICAgIDxQaW50ZXJlc3RJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSAgaHJlZiA9IFwiaHR0cHM6Ly9kcmliYmxlLmNvbVwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTowLjkgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAndy02IG1sLTMnID5cbiAgICAgICAgICAgICAgICAgICAgPERyaWJiYmxlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKG1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKX19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xXG4gICAgICAgICAgICAgICAgJHttb2RlID09PSBcImxpZ2h0XCIgPyBcImJnLWRhcmsgdGV4dC1saWdodFwiIDogXCJiZy1saWdodCB0ZXh0LWRhcmtcIn1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gXCJkYXJrXCIgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW5JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb29uSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV0nPlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJMb2dvIiwidXNlUm91dGVyIiwiRHJpYmJibGVJY29uIiwiR2l0aHViSWNvbiIsIkxpbmtlZEluSWNvbiIsIk1vb25JY29uIiwiUGludGVyZXN0SWNvbiIsIlN1bkljb24iLCJUd2l0dGVySWNvbiIsIm1vdGlvbiIsInVzZVRoZW1lU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsIm1vZGUiLCJzZXRNb2RlIiwiaGVhZGVyIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});