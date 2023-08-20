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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Landing() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let xPercent = 0;\n    let direction = -1;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-500px\"\n        });\n        requestAnimationFrame(animate);\n    }, []);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({\n        target: wheel.current\n    });\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        100\n    ]);\n    const animate = ()=>{\n        if (xPercent < -100) {\n            xPercent = 0;\n        } else if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n            xPercent: xPercent\n        });\n        requestAnimationFrame(animate);\n        xPercent += 0.1 * direction;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-[290px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: slider,\n                            className: \"relative whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: firstText,\n                                    className: \"relative m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: secondText,\n                                    className: \"absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"\",\n                        width: 41,\n                        height: 100,\n                        viewBox: \"0 0 247 390\",\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        fillRule: \"evenodd\",\n                        clipRule: \"evenodd\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeMiterlimit: 1.5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                ref: wheel,\n                                id: \"wheels\",\n                                d: \"M123.359,79.775l0,72.843\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                id: \"mouse\",\n                                d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"V1HKuaEHCPOL2ymfMZOdGZKs7j4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBQ21CO0FBQ3pCO0FBQ2lDO0FBRWpELFNBQVNROztJQUV0QixNQUFNQyxZQUFZUiw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNUyxhQUFhVCw2Q0FBTUEsQ0FBQztJQUMxQixNQUFNVSxTQUFTViw2Q0FBTUEsQ0FBQztJQUN0QixNQUFNVyxRQUFRWCw2Q0FBTUEsQ0FBQztJQUVyQixJQUFJWSxXQUFXO0lBQ2YsSUFBSUMsWUFBWSxDQUFDO0lBRWpCZCxnREFBU0EsQ0FBQztRQUNSRSxnREFBSUEsQ0FBQ2EsY0FBYyxDQUFDWixrRUFBYUE7UUFDakNELGdEQUFJQSxDQUFDYyxFQUFFLENBQUNMLE9BQU9NLE9BQU8sRUFBRTtZQUN0QkMsZUFBZTtnQkFDYkMsU0FBU0MsU0FBU0MsZUFBZTtnQkFDakNDLE9BQU87Z0JBQ1BDLE9BQU87Z0JBQ1BDLEtBQUtDLE9BQU9DLFdBQVc7Z0JBQ3ZCQyxVQUFVQyxDQUFBQSxJQUFLZCxZQUFZYyxFQUFFZCxTQUFTLEdBQUcsQ0FBQztZQUM1QztZQUNBZSxHQUFHO1FBQ0w7UUFDQUMsc0JBQXNCQztJQUd4QixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHMUIsd0RBQVNBLENBQUM7UUFDcEMyQixRQUFRckIsTUFBTUssT0FBTztJQUN2QjtJQUNBLE1BQU1pQixJQUFJM0IsMkRBQVlBLENBQUN5QixpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUc7S0FBSTtJQUV4RCxNQUFNRCxVQUFVO1FBQ2QsSUFBSWxCLFdBQVcsQ0FBQyxLQUFLO1lBQ25CQSxXQUFXO1FBQ2IsT0FDSyxJQUFJQSxXQUFXLEdBQUc7WUFDckJBLFdBQVcsQ0FBQztRQUNkO1FBQ0FYLGdEQUFJQSxDQUFDaUMsR0FBRyxDQUFDMUIsVUFBVVEsT0FBTyxFQUFFO1lBQUVKLFVBQVVBO1FBQVM7UUFDakRYLGdEQUFJQSxDQUFDaUMsR0FBRyxDQUFDekIsV0FBV08sT0FBTyxFQUFFO1lBQUVKLFVBQVVBO1FBQVM7UUFDbERpQixzQkFBc0JDO1FBQ3RCbEIsWUFBWSxNQUFNQztJQUNwQjtJQUtBLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFRRCxXQUFVOztrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFOzt3Q0FBRTtzREFBZ0IsOERBQUNDOzRDQUFLSCxXQUFVO3NEQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRWxFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7O3dDQUFFO3NEQUFrQiw4REFBQ0M7NENBQUtILFdBQVU7c0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHL0UsOERBQUNEO2tDQUNDLDRFQUFDaEMsbURBQUtBOzRCQUFDcUMsS0FBSTs0QkFBa0NDLEtBQUk7NEJBQU1DLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvRSw4REFBQ047Z0JBQVFELFdBQVU7O2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJUyxLQUFLbEM7NEJBQVEwQixXQUFVOzs4Q0FDMUIsOERBQUNFO29DQUFFTSxLQUFLcEM7b0NBQVc0QixXQUFVOzhDQUErRDs7Ozs7OzhDQUM1Riw4REFBQ0U7b0NBQUVNLEtBQUtuQztvQ0FBWTJCLFdBQVU7OENBQStFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJakgsOERBQUNTO3dCQUFJVCxXQUFVO3dCQUFHTSxPQUFPO3dCQUFJQyxRQUFRO3dCQUFLRyxTQUFRO3dCQUFjQyxTQUFRO3dCQUFNQyxPQUFNO3dCQUE2QkMsWUFBVzt3QkFBK0JDLFVBQVM7d0JBQVVDLFVBQVM7d0JBQVVDLGVBQWM7d0JBQVFDLGdCQUFlO3dCQUFRQyxrQkFBa0I7OzBDQUM5UCw4REFBQ0M7Z0NBQUtYLEtBQUtqQztnQ0FBTzZDLElBQUc7Z0NBQVNDLEdBQUU7Z0NBQTJCQyxNQUFLO2dDQUFPQyxRQUFPO2dDQUFNQyxhQUFhOzs7Ozs7MENBQ2pHLDhEQUFDTDtnQ0FBS0MsSUFBRztnQ0FBUUMsR0FBRTtnQ0FBbU5DLE1BQUs7Z0NBQU9DLFFBQU87Z0NBQU1DLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10UjtHQS9Fd0JyRDs7UUEyQk1GLG9EQUFTQTtRQUczQkMsdURBQVlBOzs7S0E5QkFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWVjb21wb25lbnRzL2xhbmRpbmcuanN4P2RjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwL2Rpc3QvZ3NhcCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XG5cbiAgY29uc3QgZmlyc3RUZXh0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzZWNvbmRUZXh0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdoZWVsID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHhQZXJjZW50ID0gMFxuICBsZXQgZGlyZWN0aW9uID0gLTFcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcbiAgICBnc2FwLnRvKHNsaWRlci5jdXJyZW50LCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgc2NydWI6IDAuNSxcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBvblVwZGF0ZTogZSA9PiBkaXJlY3Rpb24gPSBlLmRpcmVjdGlvbiAqIC0xXG4gICAgICB9LFxuICAgICAgeDogJy01MDBweCcsXG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcblxuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogd2hlZWwuY3VycmVudFxuICB9KVxuICBjb25zdCB5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgMTAwXSlcblxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIGlmICh4UGVyY2VudCA8IC0xMDApIHtcbiAgICAgIHhQZXJjZW50ID0gMFxuICAgIH1cbiAgICBlbHNlIGlmICh4UGVyY2VudCA+IDApIHtcbiAgICAgIHhQZXJjZW50ID0gLTEwMDtcbiAgICB9XG4gICAgZ3NhcC5zZXQoZmlyc3RUZXh0LmN1cnJlbnQsIHsgeFBlcmNlbnQ6IHhQZXJjZW50IH0pXG4gICAgZ3NhcC5zZXQoc2Vjb25kVGV4dC5jdXJyZW50LCB7IHhQZXJjZW50OiB4UGVyY2VudCB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgIHhQZXJjZW50ICs9IDAuMSAqIGRpcmVjdGlvblxuICB9XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBoLXNjcmVlbiBwdC0yMCBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOmZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICA8cD5IaSBUaGVyZSEsIEknYW0gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGRcIj5Hb3d0aGFtPC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgIDxwPkEgUmVzdWx0J3MgZHJpdmVuIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkXCI+RnJvbnRFbmQgRW5naW5lZXI8L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1hZ2VzL3Byb2dyYW1taW5nLWFuaW1hdGUuc3ZnJyBhbHQ9J3N2Zycgd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9ID48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1bMjkwcHhdXCI+XG4gICAgICAgICAgPGRpdiByZWY9e3NsaWRlcn0gY2xhc3NOYW1lPVwicmVsYXRpdmUgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgIDxwIHJlZj17Zmlyc3RUZXh0fSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtLTAgdGV4dC1yZWQtNTAwIHRleHQtWzIwMHB4XSBmb250LW1lZGl1bSBwci1bNTBweF1cIj5Mb3ZlIFdoYXQgWW91IERvIC08L3A+XG4gICAgICAgICAgICA8cCByZWY9e3NlY29uZFRleHR9IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtZnVsbCB0b3AtMCBtLTAgdGV4dC1yZWQtNTAwIHRleHQtWzIwMHB4XSBmb250LW1lZGl1bSBwci1bNTBweF1cIj5Mb3ZlIFdoYXQgWW91IERvIC08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiXCIgd2lkdGg9ezQxfSBoZWlnaHQ9ezEwMH0gdmlld0JveD1cIjAgMCAyNDcgMzkwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPSdldmVub2RkJyBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlTWl0ZXJsaW1pdD17MS41fSA+XG4gICAgICAgICAgPHBhdGggcmVmPXt3aGVlbH0gaWQ9XCJ3aGVlbHNcIiBkPVwiTTEyMy4zNTksNzkuNzc1bDAsNzIuODQzXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJyZWRcIiBzdHJva2VXaWR0aD17MjB9IC8+XG4gICAgICAgICAgPHBhdGggaWQ9XCJtb3VzZVwiIGQ9XCJNMjM2LjcxNywxMjMuMzU5YzAsLTYyLjU2NSAtNTAuNzk0LC0xMTMuMzU5IC0xMTMuMzU4LC0xMTMuMzU5Yy02Mi41NjUsMCAtMTEzLjM1OSw1MC43OTQgLTExMy4zNTksMTEzLjM1OWwwLDE0My4yMzdjMCw2Mi41NjUgNTAuNzk0LDExMy4zNTkgMTEzLjM1OSwxMTMuMzU5YzYyLjU2NCwwIDExMy4zNTgsLTUwLjc5NCAxMTMuMzU4LC0xMTMuMzU5bDAsLTE0My4yMzdaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJyZWRcIiBzdHJva2VXaWR0aD17MjB9IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zZWN0aW9uID5cbiAgICA8L2RpdiA+XG4gIClcblxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiSW1hZ2UiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJMYW5kaW5nIiwiZmlyc3RUZXh0Iiwic2Vjb25kVGV4dCIsInNsaWRlciIsIndoZWVsIiwieFBlcmNlbnQiLCJkaXJlY3Rpb24iLCJyZWdpc3RlclBsdWdpbiIsInRvIiwiY3VycmVudCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3J1YiIsInN0YXJ0IiwiZW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJvblVwZGF0ZSIsImUiLCJ4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZSIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsInkiLCJzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicCIsInNwYW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInN2ZyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZU1pdGVybGltaXQiLCJwYXRoIiwiaWQiLCJkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});