"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_RoutesArticle_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/RoutesArticle.png */ \"./public/images/articles/RoutesArticle.png\");\n/* harmony import */ var _public_images_articles_ApiCallArticle_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/ApiCallArticle.png */ \"./public/images/articles/ApiCallArticle.png\");\n/* harmony import */ var _public_images_articles_CustomKeysArticle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/CustomKeysArticle.png */ \"./public/images/articles/CustomKeysArticle.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion)((next_image__WEBPACK_IMPORTED_MODULE_5___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMouseLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                priority: true,\n                sizes: \"(max-width: 768px) 100vw, (max-width: 1200) 50vw, 50vw\",\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"w-96 z-10 h-auto hidden absolute rounded-lg md:!hidden\"\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.li, {\n        initial: {\n            y: 150\n        },\n        whileInView: {\n            y: 0,\n            transition: {\n                duration: 0.5,\n                ease: \"easeInOut\",\n                once: true\n            }\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary dark:text-primaryDark font-semibold pl-4 sm:text-start sm:pl-0 xs:text-sm\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"col-span-1 relative w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl\"\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full cursor-pointer inline-block overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize font-bold text-2xl my-2 mt-4 hover:underline dark:text-light xs:text-lg \",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary dark:text-primaryDark font-semibold\",\n                children: [\n                    time,\n                    \" minutes\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Jacob Hocker | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Articles written by Jacob Hocker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World\",\n                            className: \"mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl md:grid-cols-1 md:gap-y-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    img: _public_images_articles_RoutesArticle_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    link: \"https://medium.com/@jacobhocker/creating-custom-randomized-routes-in-react-rails-app-109c7c9a5780\",\n                                    title: \"Create Custom Randomized Routes in React/Rails App\",\n                                    summary: \"Learn how to create randomized routes customized in Rails & React, for randomizing API route calls.\",\n                                    time: \"4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    img: _public_images_articles_CustomKeysArticle_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                    link: \"https://medium.com/@jacobhocker/disabling-setting-up-custom-keys-in-ruby-activerecord-sinatra-phase-3-349253f04999\",\n                                    title: \"Setting Up Custom Keys In Ruby And Sinatra\",\n                                    summary: \"Learn how to create custom keys and disbale custom keys in Ruby using Active Record and Sinatra.\",\n                                    time: \"4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                            lineNumber: 121,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                title: \"Making External API Calls Ruby/React\",\n                                date: \"March 10, 2022\",\n                                img: _public_images_articles_ApiCallArticle_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                link: \"https://medium.com/@jacobhocker/making-an-external-api-call-using-backend-in-a-react-rails-app-89f3d657f8e1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                                lineNumber: 123,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                            lineNumber: 122,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jacobhocker/Development/projects/next-portfolio/src/pages/articles.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7Ozs7Ozs7Ozs7MEJBRXpHLDhEQUFDMEM7Z0JBQUV2QixXQUFVOzBCQUFnQm1COzs7Ozs7MEJBQzdCLDhEQUFDSDtnQkFBS2hCLFdBQVU7O29CQUFvRGtCO29CQUFLOzs7Ozs7Ozs7Ozs7O0FBR3JGO01BdEJNRDtBQXdCTixNQUFNTyxXQUFXLElBQU07SUFDbkIscUJBQ0k7OzBCQUNJLDhEQUFDdkQsa0RBQUlBOztrQ0FDRCw4REFBQ1k7a0NBQU07Ozs7OztrQ0FDUCw4REFBQzRDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBSzVCLFdBQVU7MEJBQ1osNEVBQUNoQywwREFBTUE7b0JBQUNnQyxXQUFVOztzQ0FDZCw4REFBQ2pDLGdFQUFZQTs0QkFBQzhELE1BQUs7NEJBQThCN0IsV0FBVTs7Ozs7O3NDQUUzRCw4REFBQzhCOzRCQUFHOUIsV0FBVTs7OENBQ1YsOERBQUNpQjtvQ0FDRG5DLEtBQUtSLGlGQUFhQTtvQ0FDbEJTLE1BQUs7b0NBQ0xGLE9BQU07b0NBQ05zQyxTQUFRO29DQUNSRCxNQUFLOzs7Ozs7OENBR0wsOERBQUNEO29DQUNEbkMsS0FBS04scUZBQWlCQTtvQ0FDdEJPLE1BQUs7b0NBQ0xGLE9BQU07b0NBQ05zQyxTQUFRO29DQUNSRCxNQUFLOzs7Ozs7Ozs7Ozs7c0NBSVQsOERBQUNuQjs0QkFBR0MsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FDbEUsOERBQUM4QjtzQ0FDRyw0RUFBQ25CO2dDQUNEOUIsT0FBTTtnQ0FDTitCLE1BQUs7Z0NBQ0w5QixLQUFLUCxrRkFBY0E7Z0NBQ25CUSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0I7QUFFQSwrREFBZXlDLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzLmpzP2Y1YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVzQXJ0aWNsZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL1JvdXRlc0FydGljbGUucG5nJztcbmltcG9ydCBBcGlDYWxsQXJ0aWNsZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL0FwaUNhbGxBcnRpY2xlLnBuZyc7XG5pbXBvcnQgQ3VzdG9tS2V5c0FydGljbGUgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9DdXN0b21LZXlzQXJ0aWNsZS5wbmcnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBGcmFtZXJJbWFnZSA9IG1vdGlvbihJbWFnZSk7XG5cbmNvbnN0IE1vdmluZ0ltZyA9ICh7IHRpdGxlLCBpbWcsIGxpbmsgfSkgPT4ge1xuXG4gICAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZShldmVudCkge1xuICAgICAgICBpbWdSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICB4LnNldChldmVudC5wYWdlWClcbiAgICAgICAgeS5zZXQoLTEwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIHguc2V0KDApXG4gICAgICAgIHkuc2V0KDApXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgIFxuICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjYXBpdGFsaXplIHRleHQteGwgZm9udC1zZW1pYm9sZCBob3Zlcjp1bmRlcmxpbmUnPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPEZyYW1lckltYWdlXG4gICAgICAgICAgICBzdHlsZT17eyB4OngsIHk6eSB9fVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6MSwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH19fVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIHNpemVzPScobWF4LXdpZHRoOiA3NjhweCkgMTAwdncsIChtYXgtd2lkdGg6IDEyMDApIDUwdncsIDUwdncnXG4gICAgICAgICAgICByZWY9e2ltZ1JlZn0gc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT0ndy05NiB6LTEwIGgtYXV0byBoaWRkZW4gYWJzb2x1dGUgcm91bmRlZC1sZyBtZDohaGlkZGVuJyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufTtcblxuY29uc3QgQXJ0aWNsZSA9ICh7IGltZywgdGl0bGUsIGRhdGUsIGxpbmsgfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPG1vdGlvbi5saSBcbiAgICAgICAgaW5pdGlhbD17eyB5OjE1MCB9fVxuICAgICAgICB3aGlsZUluVmlldz17eyB5OjAsIHRyYW5zaXRpb246eyBkdXJhdGlvbjogMC41LCBlYXNlOlwiZWFzZUluT3V0XCIsIG9uY2U6IHRydWUgfX19XG4gICAgICAgIFxuICAgICAgICBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXJcbiAgICAgICAganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0IHRleHQtZGFyayBkYXJrOmJnLWRhcmsgZGFyazp0ZXh0LWxpZ2h0IGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBkYXJrOmJvcmRlci1saWdodFxuICAgICAgICBib3JkZXItci00IGJvcmRlci1iLTQgc206ZmxleC1jb2xcbiAgICAgICAgXG4gICAgICAgICc+XG4gICAgICAgICAgICA8TW92aW5nSW1nIHRpdGxlPXt0aXRsZX0gaW1nPXtpbWd9IGxpbms9e2xpbmt9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeURhcmsgZm9udC1zZW1pYm9sZCBwbC00IHNtOnRleHQtc3RhcnQgc206cGwtMCB4czp0ZXh0LXNtJz57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgKVxufTtcblxuY29uc3QgRmVhdHVyZWRBcnRpY2xlID0gKHsgaW1nLCB0aXRsZSwgdGltZSwgc3VtbWFyeSwgbGluayB9KSA9PiB7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2NvbC1zcGFuLTEgcmVsYXRpdmUgdy1mdWxsIHAtNCBiZy1saWdodCBkYXJrOmJnLWRhcmsgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBkYXJrOmJvcmRlci1saWdodCByb3VuZGVkLTJ4bCc+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDElXSBoLVsxMDMlXSBcbiAgICAgICAgICAgIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmsgZGFyazpiZy1saWdodCByb3VuZGVkLWJyLTN4bCcgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGcmFtZXJJbWFnZSBzcmM9e2ltZ30gYWx0PXt0aXRsZX0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1hdXRvJyBcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1fX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NhcGl0YWxpemUgZm9udC1ib2xkIHRleHQtMnhsIG15LTIgbXQtNCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWxpZ2h0IHhzOnRleHQtbGcgJz57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBtYi0yJz57c3VtbWFyeX08L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeURhcmsgZm9udC1zZW1pYm9sZCc+e3RpbWV9IG1pbnV0ZXM8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5jb25zdCBhcnRpY2xlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkphY29iIEhvY2tlciB8IEFydGljbGVzIFBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PVwiQXJ0aWNsZXMgd3JpdHRlbiBieSBKYWNvYiBIb2NrZXJcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSd3LWZ1bGwgbWItMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGRhcms6dGV4dC1saWdodCc+XG4gICAgICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9J3B0LTE2Jz5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiV29yZHMgQ2FuIENoYW5nZSBUaGUgV29ybGRcIiAgY2xhc3NOYW1lPSdtYi0xNiBzbTptYi04IHNtOiF0ZXh0LTZ4bCB4czohdGV4dC00eGwgbWQ6Z3JpZC1jb2xzLTEgbWQ6Z2FwLXktMTYnLz5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIGdhcC0xNiBsZzpnYXAtOCBtZDpncmlkLWNvbHMtMSBtZDpnYXAteS0xNic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtSb3V0ZXNBcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vbWVkaXVtLmNvbS9AamFjb2Job2NrZXIvY3JlYXRpbmctY3VzdG9tLXJhbmRvbWl6ZWQtcm91dGVzLWluLXJlYWN0LXJhaWxzLWFwcC0xMDljN2M5YTU3ODBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgQ3VzdG9tIFJhbmRvbWl6ZWQgUm91dGVzIGluIFJlYWN0L1JhaWxzIEFwcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGNyZWF0ZSByYW5kb21pemVkIHJvdXRlcyBjdXN0b21pemVkIGluIFJhaWxzICYgUmVhY3QsIGZvciByYW5kb21pemluZyBBUEkgcm91dGUgY2FsbHMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGUgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e0N1c3RvbUtleXNBcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vbWVkaXVtLmNvbS9AamFjb2Job2NrZXIvZGlzYWJsaW5nLXNldHRpbmctdXAtY3VzdG9tLWtleXMtaW4tcnVieS1hY3RpdmVyZWNvcmQtc2luYXRyYS1waGFzZS0zLTM0OTI1M2YwNDk5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNldHRpbmcgVXAgQ3VzdG9tIEtleXMgSW4gUnVieSBBbmQgU2luYXRyYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGNyZWF0ZSBjdXN0b20ga2V5cyBhbmQgZGlzYmFsZSBjdXN0b20ga2V5cyBpbiBSdWJ5IHVzaW5nIEFjdGl2ZSBSZWNvcmQgYW5kIFNpbmF0cmEuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtNHhsIHctZnVsbCB0ZXh0LWNlbnRlciBteS0xNiBtdC0zMic+QWxsIEFydGljbGVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1ha2luZyBFeHRlcm5hbCBBUEkgQ2FsbHMgUnVieS9SZWFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPVwiTWFyY2ggMTAsIDIwMjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtBcGlDYWxsQXJ0aWNsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL21lZGl1bS5jb20vQGphY29iaG9ja2VyL21ha2luZy1hbi1leHRlcm5hbC1hcGktY2FsbC11c2luZy1iYWNrZW5kLWluLWEtcmVhY3QtcmFpbHMtYXBwLTg5ZjNkNjU3ZjhlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXMiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiTGF5b3V0IiwiSGVhZCIsIlJlYWN0IiwidXNlUmVmIiwiSW1hZ2UiLCJMaW5rIiwiUm91dGVzQXJ0aWNsZSIsIkFwaUNhbGxBcnRpY2xlIiwiQ3VzdG9tS2V5c0FydGljbGUiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsIkZyYW1lckltYWdlIiwiTW92aW5nSW1nIiwidGl0bGUiLCJpbWciLCJsaW5rIiwieCIsInkiLCJpbWdSZWYiLCJoYW5kbGVNb3VzZSIsImV2ZW50IiwiY3VycmVudCIsInN0eWxlIiwiZGlzcGxheSIsInNldCIsInBhZ2VYIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhyZWYiLCJ0YXJnZXQiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VMZWF2ZSIsImgyIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInByaW9yaXR5Iiwic2l6ZXMiLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiZGF0ZSIsImxpIiwiZWFzZSIsIm9uY2UiLCJzcGFuIiwiRmVhdHVyZWRBcnRpY2xlIiwidGltZSIsInN1bW1hcnkiLCJkaXYiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJwIiwiYXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});