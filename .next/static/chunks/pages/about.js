/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/about"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fdarkrager%2Fproject%2Fportfolio%2Fsrc%2Fpages%2Fabout%2Findex.jsx&page=%2Fabout!":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fdarkrager%2Fproject%2Fportfolio%2Fsrc%2Fpages%2Fabout%2Findex.jsx&page=%2Fabout! ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/about\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/about/index.jsx */ \"./src/pages/about/index.jsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/about\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGZGFya3JhZ2VyJTJGcHJvamVjdCUyRnBvcnRmb2xpbyUyRnNyYyUyRnBhZ2VzJTJGYWJvdXQlMkZpbmRleC5qc3gmcGFnZT0lMkZhYm91dCEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxnRUFBNkI7QUFDcEQ7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzJmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9hYm91dFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL2Fib3V0L2luZGV4LmpzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvYWJvdXRcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fdarkrager%2Fproject%2Fportfolio%2Fsrc%2Fpages%2Fabout%2Findex.jsx&page=%2Fabout!\n"));

/***/ }),

/***/ "./src/components/transanim.js":
/*!*************************************!*\
  !*** ./src/components/transanim.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExitSlide: function() { return /* binding */ ExitSlide; },\n/* harmony export */   ExitSlideSep: function() { return /* binding */ ExitSlideSep; },\n/* harmony export */   SlideIn: function() { return /* binding */ SlideIn; },\n/* harmony export */   SlideNom: function() { return /* binding */ SlideNom; }\n/* harmony export */ });\nconst SlideIn = {\n    initial: {\n        y: \"100%\",\n        height: \"100%\"\n    },\n    enter: (i)=>({\n            y: \"0%\",\n            height: \"0%\",\n            transition: {\n                duration: 0.8,\n                ease: [\n                    0.76,\n                    0,\n                    0.24,\n                    1\n                ],\n                delay: 0.05 * i\n            }\n        })\n};\nconst SlideNom = {\n    initial: {\n        y: \"100%\",\n        height: \"100%\"\n    },\n    enter: {\n        y: \"0%\",\n        height: \"0%\",\n        transition: {\n            duration: 2,\n            ease: [\n                0.76,\n                0,\n                0.24,\n                1\n            ]\n        }\n    }\n};\nconst ExitSlide = {\n    intial: {\n        y: \"0%\",\n        height: \"0%\"\n    },\n    exit: {\n        y: \"-100%\",\n        height: \"100%\",\n        transition: {\n            duration: 1.2,\n            ease: [\n                0.76,\n                0,\n                0.24,\n                1\n            ]\n        }\n    }\n};\nconst ExitSlideSep = {\n    initial: {\n        y: \"0%\",\n        height: \"0%\"\n    },\n    exit: (i)=>({\n            y: \"-100%\",\n            height: \"100%\",\n            transition: {\n                duration: 0.8,\n                ease: [\n                    0.76,\n                    0,\n                    0.24,\n                    1\n                ],\n                delay: 0.05 * i\n            }\n        })\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90cmFuc2FuaW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFVBQVU7SUFDckJDLFNBQVM7UUFBRUMsR0FBRztRQUFRQyxRQUFRO0lBQU87SUFDckNDLE9BQU8sQ0FBQ0MsSUFBTztZQUNiSCxHQUFHO1lBQ0hDLFFBQVE7WUFDUkcsWUFBWTtnQkFBRUMsVUFBVTtnQkFBS0MsTUFBTTtvQkFBQztvQkFBTTtvQkFBRztvQkFBTTtpQkFBRTtnQkFBRUMsT0FBTyxPQUFPSjtZQUFFO1FBQ3pFO0FBQ0YsRUFBRTtBQUVLLE1BQU1LLFdBQVc7SUFDdEJULFNBQVM7UUFBRUMsR0FBRztRQUFRQyxRQUFRO0lBQU87SUFDckNDLE9BQU87UUFDTEYsR0FBRztRQUNIQyxRQUFRO1FBQ1JHLFlBQVk7WUFBRUMsVUFBVTtZQUFHQyxNQUFNO2dCQUFDO2dCQUFNO2dCQUFHO2dCQUFNO2FBQUU7UUFBQztJQUN0RDtBQUNGLEVBQUU7QUFDSyxNQUFNRyxZQUFZO0lBQ3ZCQyxRQUFRO1FBQUVWLEdBQUc7UUFBTUMsUUFBUTtJQUFLO0lBQ2hDVSxNQUFNO1FBQ0pYLEdBQUc7UUFDSEMsUUFBUTtRQUNSRyxZQUFZO1lBQUVDLFVBQVU7WUFBS0MsTUFBTTtnQkFBQztnQkFBTTtnQkFBRztnQkFBTTthQUFFO1FBQUM7SUFDeEQ7QUFDRixFQUFDO0FBQ00sTUFBTU0sZUFBZTtJQUMxQmIsU0FBUztRQUFFQyxHQUFHO1FBQU1DLFFBQVE7SUFBSztJQUNqQ1UsTUFBTVIsQ0FBQUEsSUFBTTtZQUNWSCxHQUFHO1lBQ0hDLFFBQVE7WUFDUkcsWUFBWTtnQkFBRUMsVUFBVTtnQkFBS0MsTUFBTTtvQkFBQztvQkFBTTtvQkFBRztvQkFBTTtpQkFBRTtnQkFBRUMsT0FBTyxPQUFPSjtZQUFFO1FBQ3pFO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90cmFuc2FuaW0uanM/MmZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU2xpZGVJbiA9IHtcbiAgaW5pdGlhbDogeyB5OiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICBlbnRlcjogKGkpID0+ICh7XG4gICAgeTogJzAlJyxcbiAgICBoZWlnaHQ6ICcwJScsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC44LCBlYXNlOiBbMC43NiwgMCwgMC4yNCwgMV0sIGRlbGF5OiAwLjA1ICogaSB9LFxuICB9KSxcbn07XG5cbmV4cG9ydCBjb25zdCBTbGlkZU5vbSA9IHtcbiAgaW5pdGlhbDogeyB5OiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICBlbnRlcjoge1xuICAgIHk6IFwiMCVcIixcbiAgICBoZWlnaHQ6IFwiMCVcIixcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAyLCBlYXNlOiBbMC43NiwgMCwgMC4yNCwgMV0gfSxcbiAgfSxcbn07XG5leHBvcnQgY29uc3QgRXhpdFNsaWRlID0ge1xuICBpbnRpYWw6IHsgeTogJzAlJywgaGVpZ2h0OiAnMCUnIH0sXG4gIGV4aXQ6IHtcbiAgICB5OiBcIi0xMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLjIsIGVhc2U6IFswLjc2LCAwLCAwLjI0LCAxXSB9LFxuICB9LFxufVxuZXhwb3J0IGNvbnN0IEV4aXRTbGlkZVNlcCA9IHtcbiAgaW5pdGlhbDogeyB5OiAnMCUnLCBoZWlnaHQ6ICcwJScgfSxcbiAgZXhpdDogaSA9PiAoe1xuICAgIHk6IFwiLTEwMCVcIixcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjc2LCAwLCAwLjI0LCAxXSwgZGVsYXk6IDAuMDUgKiBpIH0sXG4gIH0pLFxufTtcblxuIl0sIm5hbWVzIjpbIlNsaWRlSW4iLCJpbml0aWFsIiwieSIsImhlaWdodCIsImVudGVyIiwiaSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsIlNsaWRlTm9tIiwiRXhpdFNsaWRlIiwiaW50aWFsIiwiZXhpdCIsIkV4aXRTbGlkZVNlcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/transanim.js\n"));

/***/ }),

/***/ "./src/components/transition.js":
/*!**************************************!*\
  !*** ./src/components/transition.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _transanim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transanim */ \"./src/components/transanim.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ExitSlideContainer(param) {\n    let { index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        custom: index,\n        variants: _transanim__WEBPACK_IMPORTED_MODULE_1__.ExitSlideSep,\n        initial: \"initial\",\n        exit: \"exit\",\n        className: \"relative top-full z-[60] w-[25%] h-screen border-red-800 border-[1px] bg-black\"\n    }, void 0, false, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = ExitSlideContainer;\nfunction SlideContainer(param) {\n    let { index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        custom: index,\n        variants: _transanim__WEBPACK_IMPORTED_MODULE_1__.SlideIn,\n        initial: \"initial\",\n        animate: \"enter\",\n        className: \"relative -top-full z-[60] w-[25%] h-screen border-red-800 border-[1px] bg-black\"\n    }, void 0, false, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SlideContainer;\nconst TransitionEffect = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const title = (r)=>{\n        switch(r){\n            case \"/\":\n                return \"Home\";\n            case \"/about\":\n                return \"About\";\n            case \"/projects\":\n                return \"projects\";\n            case \"/contact\":\n                return \"contact\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: _transanim__WEBPACK_IMPORTED_MODULE_1__.SlideNom,\n                initial: \"initial\",\n                animate: \"enter\",\n                className: \"fixed -top-full h-screen w-screen z-[50] bg-transparent flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            y: 0\n                        },\n                        animate: {\n                            y: \"-100%\",\n                            opacity: 0,\n                            transition: {\n                                duration: 0.8,\n                                ease: [\n                                    0.76,\n                                    0,\n                                    0.24,\n                                    1\n                                ]\n                            }\n                        },\n                        className: \"absolute z-[70] text-4xl bg-gradient-to-b from-red-500 to-gray-800 bg-clip-text text-transparent\",\n                        children: title(router.asPath)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideContainer, {\n                        index: 2\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideContainer, {\n                        index: 4\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideContainer, {\n                        index: 6\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideContainer, {\n                        index: 8\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: _transanim__WEBPACK_IMPORTED_MODULE_1__.ExitSlide,\n                exit: \"exit\",\n                className: \"fixed top-full h-screen w-screen z-[40] bg-transparent flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1,\n                            transition: {\n                                duration: 0.8\n                            }\n                        },\n                        className: \"absolute text-4xl  z-[70] bg-gradient-to-b from-red-500 to-gray-800 bg-clip-text text-transparent\",\n                        children: title(router.asPath)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExitSlideContainer, {\n                        index: 2\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExitSlideContainer, {\n                        index: 4\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExitSlideContainer, {\n                        index: 6\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExitSlideContainer, {\n                        index: 8\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/transition.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TransitionEffect, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = TransitionEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransitionEffect);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ExitSlideContainer\");\n$RefreshReg$(_c1, \"SlideContainer\");\n$RefreshReg$(_c2, \"TransitionEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90cmFuc2l0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNpQjtBQUNqQztBQUV4QyxTQUFTTyxtQkFBbUIsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUO0lBQzFCLHFCQUNFLDhEQUFDUCxpREFBTUEsQ0FBQ1EsR0FBRztRQUNUQyxRQUFRRjtRQUNSRyxVQUFVUixvREFBWUE7UUFDdEJTLFNBQVE7UUFDUkMsTUFBSztRQUNMQyxXQUFZOzs7Ozs7QUFHbEI7S0FWU1A7QUFZVCxTQUFTUSxlQUFlLEtBQVM7UUFBVCxFQUFFUCxLQUFLLEVBQUUsR0FBVDtJQUN0QixxQkFDRSw4REFBQ1AsaURBQU1BLENBQUNRLEdBQUc7UUFDVEMsUUFBUUY7UUFDUkcsVUFBVVAsK0NBQU9BO1FBQ2pCUSxTQUFRO1FBQ1JJLFNBQVE7UUFDUkYsV0FBWTs7Ozs7O0FBR2xCO01BVlNDO0FBV1QsTUFBTUUsbUJBQW1COztJQUN2QixNQUFNQyxTQUFTWixzREFBU0E7SUFFeEIsTUFBTWEsUUFBUSxDQUFDQztRQUNiLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1FBQ1g7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ25CLGlEQUFNQSxDQUFDUSxHQUFHO2dCQUNURSxVQUFVTixnREFBUUE7Z0JBQ2xCTyxTQUFRO2dCQUNSSSxTQUFRO2dCQUNSRixXQUFVOztrQ0FFViw4REFBQ2IsaURBQU1BLENBQUNRLEdBQUc7d0JBQ1RHLFNBQVM7NEJBQUVTLEdBQUc7d0JBQUU7d0JBQ2hCTCxTQUFTOzRCQUFFSyxHQUFHOzRCQUFTQyxTQUFTOzRCQUFHQyxZQUFZO2dDQUFFQyxVQUFVO2dDQUFLQyxNQUFNO29DQUFDO29DQUFNO29DQUFHO29DQUFNO2lDQUFFOzRCQUFDO3dCQUFFO3dCQUMzRlgsV0FBVTtrQ0FBb0dLLE1BQU1ELE9BQU9RLE1BQU07Ozs7OztrQ0FDbkksOERBQUNYO3dCQUFlUCxPQUFPOzs7Ozs7a0NBQ3ZCLDhEQUFDTzt3QkFBZVAsT0FBTzs7Ozs7O2tDQUN2Qiw4REFBQ087d0JBQWVQLE9BQU87Ozs7OztrQ0FDdkIsOERBQUNPO3dCQUFlUCxPQUFPOzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDUCxpREFBTUEsQ0FBQ1EsR0FBRztnQkFDVEUsVUFBVVQsaURBQVNBO2dCQUNuQlcsTUFBSztnQkFDTEMsV0FBVTs7a0NBRVYsOERBQUNiLGlEQUFNQSxDQUFDUSxHQUFHO3dCQUNURyxTQUFTOzRCQUFFVSxTQUFTO3dCQUFFO3dCQUN0Qk4sU0FBUzs0QkFBRU0sU0FBUzs0QkFBR0MsWUFBWTtnQ0FBRUMsVUFBVTs0QkFBSTt3QkFBRTt3QkFDckRWLFdBQVU7a0NBQXFHSyxNQUFNRCxPQUFPUSxNQUFNOzs7Ozs7a0NBQ3BJLDhEQUFDbkI7d0JBQW1CQyxPQUFPOzs7Ozs7a0NBQzNCLDhEQUFDRDt3QkFBbUJDLE9BQU87Ozs7OztrQ0FDM0IsOERBQUNEO3dCQUFtQkMsT0FBTzs7Ozs7O2tDQUMzQiw4REFBQ0Q7d0JBQW1CQyxPQUFPOzs7Ozs7Ozs7Ozs7OztBQUluQztHQWpETVM7O1FBQ1dYLGtEQUFTQTs7O01BRHBCVztBQW1ETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RyYW5zaXRpb24uanM/Yjc1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBFeGl0U2xpZGUsIEV4aXRTbGlkZVNlcCwgU2xpZGVJbiwgU2xpZGVOb20gfSBmcm9tIFwiLi90cmFuc2FuaW1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBFeGl0U2xpZGVDb250YWluZXIoeyBpbmRleCB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGN1c3RvbT17aW5kZXh9XG4gICAgICB2YXJpYW50cz17RXhpdFNsaWRlU2VwfVxuICAgICAgaW5pdGlhbD0naW5pdGlhbCdcbiAgICAgIGV4aXQ9J2V4aXQnXG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB0b3AtZnVsbCB6LVs2MF0gdy1bMjUlXSBoLXNjcmVlbiBib3JkZXItcmVkLTgwMCBib3JkZXItWzFweF0gYmctYmxhY2tgfVxuICAgID48L21vdGlvbi5kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNsaWRlQ29udGFpbmVyKHsgaW5kZXggfSkge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjdXN0b209e2luZGV4fVxuICAgICAgdmFyaWFudHM9e1NsaWRlSW59XG4gICAgICBpbml0aWFsPSdpbml0aWFsJ1xuICAgICAgYW5pbWF0ZT0nZW50ZXInXG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAtdG9wLWZ1bGwgei1bNjBdIHctWzI1JV0gaC1zY3JlZW4gYm9yZGVyLXJlZC04MDAgYm9yZGVyLVsxcHhdIGJnLWJsYWNrYH1cbiAgICA+PC9tb3Rpb24uZGl2PlxuICApO1xufVxuY29uc3QgVHJhbnNpdGlvbkVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB0aXRsZSA9IChyKSA9PiB7XG4gICAgc3dpdGNoIChyKSB7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgcmV0dXJuICdIb21lJ1xuICAgICAgY2FzZSAnL2Fib3V0JzpcbiAgICAgICAgcmV0dXJuICdBYm91dCdcbiAgICAgIGNhc2UgJy9wcm9qZWN0cyc6XG4gICAgICAgIHJldHVybiAncHJvamVjdHMnXG4gICAgICBjYXNlICcvY29udGFjdCc6XG4gICAgICAgIHJldHVybiAnY29udGFjdCdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICB2YXJpYW50cz17U2xpZGVOb219XG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgLXRvcC1mdWxsIGgtc2NyZWVuIHctc2NyZWVuIHotWzUwXSBiZy10cmFuc3BhcmVudCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyB5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAnLTEwMCUnLCBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjc2LCAwLCAwLjI0LCAxXSB9IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei1bNzBdIHRleHQtNHhsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1yZWQtNTAwIHRvLWdyYXktODAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+e3RpdGxlKHJvdXRlci5hc1BhdGgpfTwvbW90aW9uLmRpdj5cbiAgICAgICAgPFNsaWRlQ29udGFpbmVyIGluZGV4PXsyfSAvPlxuICAgICAgICA8U2xpZGVDb250YWluZXIgaW5kZXg9ezR9IC8+XG4gICAgICAgIDxTbGlkZUNvbnRhaW5lciBpbmRleD17Nn0gLz5cbiAgICAgICAgPFNsaWRlQ29udGFpbmVyIGluZGV4PXs4fSAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgdmFyaWFudHM9e0V4aXRTbGlkZX1cbiAgICAgICAgZXhpdD0nZXhpdCdcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLWZ1bGwgaC1zY3JlZW4gdy1zY3JlZW4gei1bNDBdIGJnLXRyYW5zcGFyZW50IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuOCB9IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC00eGwgIHotWzcwXSBiZy1ncmFkaWVudC10by1iIGZyb20tcmVkLTUwMCB0by1ncmF5LTgwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPnt0aXRsZShyb3V0ZXIuYXNQYXRoKX08L21vdGlvbi5kaXY+XG4gICAgICAgIDxFeGl0U2xpZGVDb250YWluZXIgaW5kZXg9ezJ9IC8+XG4gICAgICAgIDxFeGl0U2xpZGVDb250YWluZXIgaW5kZXg9ezR9IC8+XG4gICAgICAgIDxFeGl0U2xpZGVDb250YWluZXIgaW5kZXg9ezZ9IC8+XG4gICAgICAgIDxFeGl0U2xpZGVDb250YWluZXIgaW5kZXg9ezh9IC8+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRWZmZWN0O1xuIl0sIm5hbWVzIjpbIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkV4aXRTbGlkZSIsIkV4aXRTbGlkZVNlcCIsIlNsaWRlSW4iLCJTbGlkZU5vbSIsInVzZVJvdXRlciIsIkV4aXRTbGlkZUNvbnRhaW5lciIsImluZGV4IiwiZGl2IiwiY3VzdG9tIiwidmFyaWFudHMiLCJpbml0aWFsIiwiZXhpdCIsImNsYXNzTmFtZSIsIlNsaWRlQ29udGFpbmVyIiwiYW5pbWF0ZSIsIlRyYW5zaXRpb25FZmZlY3QiLCJyb3V0ZXIiLCJ0aXRsZSIsInIiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhc1BhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/transition.js\n"));

/***/ }),

/***/ "./src/pages/about/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/about/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/transition */ \"./src/components/transition.js\");\n\n\nfunction About() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_transition__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/darkrager/project/portfolio/src/pages/about/index.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/home/darkrager/project/portfolio/src/pages/about/index.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBRXhDLFNBQVNDO0lBQ3RCLHFCQUNFOzswQkFDRSw4REFBQ0QsOERBQWdCQTs7Ozs7MEJBQ2pCLDhEQUFDRTtnQkFBSUMsV0FBVTswQkFBVzs7Ozs7Ozs7QUFLaEM7S0FUd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC9pbmRleC5qc3g/Mjk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNpdGlvbkVmZmVjdCBmcm9tIFwiQC9jb21wb25lbnRzL3RyYW5zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUcmFuc2l0aW9uRWZmZWN0IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsXCI+XG4gICAgICAgIEFib3V0XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRyYW5zaXRpb25FZmZlY3QiLCJBYm91dCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about/index.jsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fdarkrager%2Fproject%2Fportfolio%2Fsrc%2Fpages%2Fabout%2Findex.jsx&page=%2Fabout!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);