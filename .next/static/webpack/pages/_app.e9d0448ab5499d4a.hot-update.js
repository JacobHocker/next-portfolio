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

/***/ "./src/components/hooks/useThemeSwitcher.js":
/*!**************************************************!*\
  !*** ./src/components/hooks/useThemeSwitcher.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useThemeSwitcher = ()=>{\n    _s();\n    const preferDarkQuery = \"(prefers-color-scheme: dark)\";\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"dark\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(mode);\n    }, [\n        mode\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(preferDarkQuery);\n        const userPref = window.localStorage.getItem(\"theme\");\n        const handleChange = ()=>{\n            if (userPref) {\n                let check = userPref === \"dark\" ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            } else {\n                let check = mediaQuery.matches ? \"dark\" : \"light\";\n                setMode(check);\n                window.localStorage.setItem(\"theme\", check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            }\n        };\n        handleChange();\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>mediaQuery.removeEventListener(\"change\", handleChange);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (mode === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            window.localStorage.setItem(\"theme\", \"light\");\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemeSwitcher, \"3PTDhk4iOy7ziAEBY3TyIKstzJQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemeSwitcher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBa0Q7QUFFbEQsTUFBTUcsbUJBQW1CLElBQU07O0lBRTNCLE1BQU1DLGtCQUFrQjtJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFHakNDLGdEQUFTQSxDQUFDLElBQU07UUFDUkssUUFBUUMsR0FBRyxDQUFDSDtJQUNoQixHQUFHO1FBQUNBO0tBQUs7SUFFYkgsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1PLGFBQWFDLE9BQU9DLFVBQVUsQ0FBQ1A7UUFDckMsTUFBTVEsV0FBV0YsT0FBT0csWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFJN0MsTUFBTUMsZUFBZSxJQUFNO1lBQ3ZCLElBQUdILFVBQVM7Z0JBQ1IsSUFBSUksUUFBUUosYUFBYSxTQUFTLFNBQVMsT0FBTztnQkFDbEROLFFBQVFVO2dCQUNSLElBQUdBLFVBQVEsUUFBTztvQkFDZEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDM0MsT0FBSztvQkFDREgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLE9BQUs7Z0JBQ0QsSUFBSUwsUUFBUVAsV0FBV2EsT0FBTyxHQUFHLFNBQVMsT0FBTztnQkFDakRoQixRQUFRVTtnQkFDUk4sT0FBT0csWUFBWSxDQUFDVSxPQUFPLENBQ3ZCLFNBQ0FQO2dCQUdKLElBQUdBLFVBQVEsUUFBTztvQkFDZEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDM0MsT0FBSztvQkFDREgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLENBQUM7UUFDTDtRQUVBTjtRQUVBTixXQUFXZSxnQkFBZ0IsQ0FBQyxVQUFVVDtRQUV0QyxPQUFPLElBQU1OLFdBQVdnQixtQkFBbUIsQ0FBQyxVQUFVVjtJQUUxRCxHQUFHLEVBQUU7SUFFTGIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUdHLFNBQVMsUUFBTztZQUNmSyxPQUFPRyxZQUFZLENBQUNVLE9BQU8sQ0FBQyxTQUFTO1lBQ3JDTixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzNDLE9BQUs7WUFDRFYsT0FBT0csWUFBWSxDQUFDVSxPQUFPLENBQUMsU0FBUztZQUNyQ04sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM5QyxDQUFDO0lBRUwsR0FBRztRQUFDaEI7S0FBSztJQUVULE9BQU87UUFBQ0E7UUFBTUM7S0FBUTtBQUMxQjtHQTdETUg7QUErRE4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aXRjaGVyLmpzPzc2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlVGhlbWVTd2l0Y2hlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHByZWZlckRhcmtRdWVyeSA9IFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiO1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcbiAgICBcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZSlcbiAgICAgICAgfSwgW21vZGVdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKHByZWZlckRhcmtRdWVyeSk7XG4gICAgICAgIGNvbnN0IHVzZXJQcmVmID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZih1c2VyUHJlZil7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gdXNlclByZWYgPT09IFwiZGFya1wiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG4gICAgICAgICAgICAgICAgc2V0TW9kZShjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2s9PT1cImRhcmtcIil7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSBtZWRpYVF1ZXJ5Lm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKGNoZWNrKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIixcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYoY2hlY2s9PT1cImRhcmtcIil7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcblxuICAgICAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2hhbmdlKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiBtZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2hhbmdlKVxuXG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihtb2RlID09PSBcImRhcmtcIil7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICAgICAgfVxuXG4gICAgfSwgW21vZGVdKVxuXG4gICAgcmV0dXJuIFttb2RlLCBzZXRNb2RlXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZVN3aXRjaGVyXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVGhlbWVTd2l0Y2hlciIsInByZWZlckRhcmtRdWVyeSIsIm1vZGUiLCJzZXRNb2RlIiwiY29uc29sZSIsImxvZyIsIm1lZGlhUXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwidXNlclByZWYiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY2hlY2siLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm1hdGNoZXMiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/hooks/useThemeSwitcher.js\n"));

/***/ })

});