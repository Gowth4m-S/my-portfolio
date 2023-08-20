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

/***/ "./src/components/homecomponents/landing.jsx":
/*!***************************************************!*\
  !*** ./src/components/homecomponents/landing.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Landing() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let xPercent = 0;\n    let direction = -1;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-500px\"\n        });\n        requestAnimationFrame(animate);\n    }, []);\n    const animate = ()=>{\n        if (xPercent < -100) {\n            xPercent = 0;\n        } else if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n            xPercent: xPercent\n        });\n        requestAnimationFrame(animate);\n        xPercent += 0.1 * direction;\n    };\n    const wheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-[300px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: slider,\n                            className: \"relative whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: firstText,\n                                    className: \"relative m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: secondText,\n                                    className: \"absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"\",\n                        width: 41,\n                        height: 100,\n                        viewBox: \"0 0 247 390\",\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        fillRule: \"evenodd\",\n                        clipRule: \"evenodd\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeMiterlimit: 1.5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                ref: wheel,\n                                id: \"wheels\",\n                                d: \"M123.359,79.775l0,72.843\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                id: \"mouse\",\n                                d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"9k0/9P+1WRW5L8+sQNsXDaA3Zg8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBQ21CO0FBQ3pCO0FBQ21CO0FBRW5DLFNBQVNPOztJQUV0QixNQUFNQyxZQUFZUCw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNUSxhQUFhUiw2Q0FBTUEsQ0FBQztJQUMxQixNQUFNUyxTQUFTVCw2Q0FBTUEsQ0FBQztJQUV0QixJQUFJVSxXQUFXO0lBQ2YsSUFBSUMsWUFBWSxDQUFDO0lBRWpCWixnREFBU0EsQ0FBQztRQUNSRSxnREFBSUEsQ0FBQ1csY0FBYyxDQUFDVixrRUFBYUE7UUFDakNELGdEQUFJQSxDQUFDWSxFQUFFLENBQUNKLE9BQU9LLE9BQU8sRUFBRTtZQUN0QkMsZUFBZTtnQkFDYkMsU0FBU0MsU0FBU0MsZUFBZTtnQkFDakNDLE9BQU87Z0JBQ1BDLE9BQU87Z0JBQ1BDLEtBQUtDLE9BQU9DLFdBQVc7Z0JBQ3ZCQyxVQUFVQyxDQUFBQSxJQUFLZCxZQUFZYyxFQUFFZCxTQUFTLEdBQUcsQ0FBQztZQUM1QztZQUNBZSxHQUFHO1FBQ0w7UUFDQUMsc0JBQXNCQztJQUV4QixHQUFHLEVBQUU7SUFFTCxNQUFNQSxVQUFVO1FBQ2QsSUFBSWxCLFdBQVcsQ0FBQyxLQUFLO1lBQ25CQSxXQUFXO1FBQ2IsT0FDSyxJQUFJQSxXQUFXLEdBQUc7WUFDckJBLFdBQVcsQ0FBQztRQUNkO1FBQ0FULGdEQUFJQSxDQUFDNEIsR0FBRyxDQUFDdEIsVUFBVU8sT0FBTyxFQUFFO1lBQUVKLFVBQVVBO1FBQVM7UUFDakRULGdEQUFJQSxDQUFDNEIsR0FBRyxDQUFDckIsV0FBV00sT0FBTyxFQUFFO1lBQUVKLFVBQVVBO1FBQVM7UUFDbERpQixzQkFBc0JDO1FBQ3RCbEIsWUFBWSxNQUFNQztJQUNwQjtJQUVBLE1BQU1tQixRQUFROUIsNkNBQU1BLENBQUM7SUFFckIsTUFBTSxFQUFFK0IsZUFBZSxFQUFFLEdBQUcxQix3REFBU0EsQ0FBQyxDQUN0QztJQUlBLHFCQUNFLDhEQUFDMkI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFRRCxXQUFVOztrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFOzt3Q0FBRTtzREFBZ0IsOERBQUNDOzRDQUFLSCxXQUFVO3NEQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRWxFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7O3dDQUFFO3NEQUFrQiw4REFBQ0M7NENBQUtILFdBQVU7c0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHL0UsOERBQUNEO2tDQUNDLDRFQUFDN0IsbURBQUtBOzRCQUFDa0MsS0FBSTs0QkFBa0NDLEtBQUk7NEJBQU1DLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvRSw4REFBQ047Z0JBQVFELFdBQVU7O2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJUyxLQUFLaEM7NEJBQVF3QixXQUFVOzs4Q0FDMUIsOERBQUNFO29DQUFFTSxLQUFLbEM7b0NBQVcwQixXQUFVOzhDQUErRDs7Ozs7OzhDQUM1Riw4REFBQ0U7b0NBQUVNLEtBQUtqQztvQ0FBWXlCLFdBQVU7OENBQStFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJakgsOERBQUNTO3dCQUFJVCxXQUFVO3dCQUFHTSxPQUFPO3dCQUFJQyxRQUFRO3dCQUFLRyxTQUFRO3dCQUFjQyxTQUFRO3dCQUFNQyxPQUFNO3dCQUE2QkMsWUFBVzt3QkFBK0JDLFVBQVM7d0JBQVVDLFVBQVM7d0JBQVVDLGVBQWM7d0JBQVFDLGdCQUFlO3dCQUFRQyxrQkFBa0I7OzBDQUM5UCw4REFBQ0M7Z0NBQUtYLEtBQUtYO2dDQUFPdUIsSUFBRztnQ0FBU0MsR0FBRTtnQ0FBMkJDLE1BQUs7Z0NBQU9DLFFBQU87Z0NBQU1DLGFBQWE7Ozs7OzswQ0FDakcsOERBQUNMO2dDQUFLQyxJQUFHO2dDQUFRQyxHQUFFO2dDQUFtTkMsTUFBSztnQ0FBT0MsUUFBTztnQ0FBTUMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRSO0dBNUV3Qm5EOztRQXdDTUQsb0RBQVNBOzs7S0F4Q2ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWVjb21wb25lbnRzL2xhbmRpbmcuanN4P2RjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwL2Rpc3QvZ3NhcCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nKCkge1xuXG4gIGNvbnN0IGZpcnN0VGV4dCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2Vjb25kVGV4dCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2xpZGVyID0gdXNlUmVmKG51bGwpO1xuXG4gIGxldCB4UGVyY2VudCA9IDBcbiAgbGV0IGRpcmVjdGlvbiA9IC0xXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG4gICAgZ3NhcC50byhzbGlkZXIuY3VycmVudCwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIHNjcnViOiAwLjUsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgb25VcGRhdGU6IGUgPT4gZGlyZWN0aW9uID0gZS5kaXJlY3Rpb24gKiAtMVxuICAgICAgfSxcbiAgICAgIHg6ICctNTAwcHgnLFxuICAgIH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgfSwgW10pXG5cbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICBpZiAoeFBlcmNlbnQgPCAtMTAwKSB7XG4gICAgICB4UGVyY2VudCA9IDBcbiAgICB9XG4gICAgZWxzZSBpZiAoeFBlcmNlbnQgPiAwKSB7XG4gICAgICB4UGVyY2VudCA9IC0xMDA7XG4gICAgfVxuICAgIGdzYXAuc2V0KGZpcnN0VGV4dC5jdXJyZW50LCB7IHhQZXJjZW50OiB4UGVyY2VudCB9KVxuICAgIGdzYXAuc2V0KHNlY29uZFRleHQuY3VycmVudCwgeyB4UGVyY2VudDogeFBlcmNlbnQgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICB4UGVyY2VudCArPSAwLjEgKiBkaXJlY3Rpb25cbiAgfVxuXG4gIGNvbnN0IHdoZWVsID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XG4gIH0pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgaC1zY3JlZW4gcHQtMjAgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgPHA+SGkgVGhlcmUhLCBJJ2FtIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkXCI+R293dGhhbTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICA8cD5BIFJlc3VsdCdzIGRyaXZlbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPkZyb250RW5kIEVuZ2luZWVyPC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL2ltYWdlcy9wcm9ncmFtbWluZy1hbmltYXRlLnN2ZycgYWx0PSdzdmcnIHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfSA+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtWzMwMHB4XVwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtzbGlkZXJ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICA8cCByZWY9e2ZpcnN0VGV4dH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgbS0wIHRleHQtcmVkLTUwMCB0ZXh0LVsyMDBweF0gZm9udC1tZWRpdW0gcHItWzUwcHhdXCI+TG92ZSBXaGF0IFlvdSBEbyAtPC9wPlxuICAgICAgICAgICAgPHAgcmVmPXtzZWNvbmRUZXh0fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LWZ1bGwgdG9wLTAgbS0wIHRleHQtcmVkLTUwMCB0ZXh0LVsyMDBweF0gZm9udC1tZWRpdW0gcHItWzUwcHhdXCI+TG92ZSBXaGF0IFlvdSBEbyAtPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIlwiIHdpZHRoPXs0MX0gaGVpZ2h0PXsxMDB9IHZpZXdCb3g9XCIwIDAgMjQ3IDM5MFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT0nZXZlbm9kZCcgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZU1pdGVybGltaXQ9ezEuNX0gPlxuICAgICAgICAgIDxwYXRoIHJlZj17d2hlZWx9IGlkPVwid2hlZWxzXCIgZD1cIk0xMjMuMzU5LDc5Ljc3NWwwLDcyLjg0M1wiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlV2lkdGg9ezIwfSAvPlxuICAgICAgICAgIDxwYXRoIGlkPVwibW91c2VcIiBkPVwiTTIzNi43MTcsMTIzLjM1OWMwLC02Mi41NjUgLTUwLjc5NCwtMTEzLjM1OSAtMTEzLjM1OCwtMTEzLjM1OWMtNjIuNTY1LDAgLTExMy4zNTksNTAuNzk0IC0xMTMuMzU5LDExMy4zNTlsMCwxNDMuMjM3YzAsNjIuNTY1IDUwLjc5NCwxMTMuMzU5IDExMy4zNTksMTEzLjM1OWM2Mi41NjQsMCAxMTMuMzU4LC01MC43OTQgMTEzLjM1OCwtMTEzLjM1OWwwLC0xNDMuMjM3WlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlV2lkdGg9ezIwfSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc2VjdGlvbiA+XG4gICAgPC9kaXYgPlxuICApXG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkltYWdlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwiTGFuZGluZyIsImZpcnN0VGV4dCIsInNlY29uZFRleHQiLCJzbGlkZXIiLCJ4UGVyY2VudCIsImRpcmVjdGlvbiIsInJlZ2lzdGVyUGx1Z2luIiwidG8iLCJjdXJyZW50Iiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcnViIiwic3RhcnQiLCJlbmQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm9uVXBkYXRlIiwiZSIsIngiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwic2V0Iiwid2hlZWwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicCIsInNwYW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInN2ZyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZU1pdGVybGltaXQiLCJwYXRoIiwiaWQiLCJkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});