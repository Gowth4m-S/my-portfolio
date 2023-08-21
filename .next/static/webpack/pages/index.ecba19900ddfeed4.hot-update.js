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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet xPercent = 0;\nlet direction = -1;\nfunction Landing() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-200px\"\n        });\n        requestAnimationFrame(animate);\n    }, []);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({\n        target: wheel.current,\n        smooth: 1\n    });\n    const smooth = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)(scrollYProgress);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(smooth, [\n        0,\n        1\n    ], [\n        0,\n        300\n    ]);\n    const strokeDashOffset = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(smooth, [\n        0,\n        1\n    ], [\n        1000,\n        2000\n    ]);\n    const animate = ()=>{\n        if (xPercent < -100) {\n            xPercent = 0;\n        } else if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n            xPercent: xPercent\n        });\n        requestAnimationFrame(animate);\n        xPercent += 0.1 * direction;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-[290px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: slider,\n                            className: \"relative whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: firstText,\n                                    className: \"relative m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: secondText,\n                                    className: \"absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-[41px]\",\n                        width: 41,\n                        height: 100,\n                        viewBox: \"0 0 247 390\",\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        fillRule: \"evenodd\",\n                        clipRule: \"evenodd\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeMiterlimit: 1.5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.path, {\n                                style: {\n                                    translateY: y\n                                },\n                                transition: {\n                                    duration: 0.8,\n                                    ease: [\n                                        0.76,\n                                        0,\n                                        0.24,\n                                        1\n                                    ]\n                                },\n                                ref: wheel,\n                                id: \"wheels\",\n                                d: \"M123.359,79.775l0,72.843\",\n                                fill: \"none\",\n                                stroke: \"#EF4444\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.path, {\n                                ref: mouse,\n                                style: {\n                                    strokeDasharray: 50,\n                                    strokeDashoffset: strokeDashOffset\n                                },\n                                id: \"mouse\",\n                                d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                                fill: \"none\",\n                                stroke: \"#EF4444\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"nF39BdefBAMTcOpOy5GdHcSO+ek=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBQ21CO0FBQ3pCO0FBQzRDO0FBRzNFLElBQUlTLFdBQVc7QUFDZixJQUFJQyxZQUFZLENBQUM7QUFFRixTQUFTQzs7SUFFdEIsTUFBTUMsWUFBWVgsNkNBQU1BLENBQUM7SUFDekIsTUFBTVksYUFBYVosNkNBQU1BLENBQUM7SUFDMUIsTUFBTWEsU0FBU2IsNkNBQU1BLENBQUM7SUFDdEIsTUFBTWMsUUFBUWQsNkNBQU1BLENBQUM7SUFDckIsTUFBTWUsUUFBUWYsNkNBQU1BLENBQUM7SUFHckJELGdEQUFTQSxDQUFDO1FBQ1JFLGdEQUFJQSxDQUFDZSxjQUFjLENBQUNkLGtFQUFhQTtRQUNqQ0QsZ0RBQUlBLENBQUNnQixFQUFFLENBQUNKLE9BQU9LLE9BQU8sRUFBRTtZQUN0QkMsZUFBZTtnQkFDYkMsU0FBU0MsU0FBU0MsZUFBZTtnQkFDakNDLE9BQU87Z0JBQ1BDLE9BQU87Z0JBQ1BDLEtBQUtDLE9BQU9DLFdBQVc7Z0JBQ3ZCQyxVQUFVQyxDQUFBQSxJQUFLcEIsWUFBWW9CLEVBQUVwQixTQUFTLEdBQUcsQ0FBQztZQUM1QztZQUNBcUIsR0FBRztRQUNMO1FBQ0FDLHNCQUFzQkM7SUFHeEIsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBRzVCLHdEQUFTQSxDQUFDO1FBQ3BDNkIsUUFBUXBCLE1BQU1JLE9BQU87UUFDckJpQixRQUFRO0lBQ1Y7SUFDQSxNQUFNQSxTQUFTN0Isd0RBQVNBLENBQUMyQjtJQUN6QixNQUFNRyxJQUFJN0IsMkRBQVlBLENBQUM0QixRQUFRO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHO0tBQUk7SUFDL0MsTUFBTUUsbUJBQW1COUIsMkRBQVlBLENBQUM0QixRQUFRO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFNO0tBQUs7SUFFbEUsTUFBTUgsVUFBVTtRQUNkLElBQUl4QixXQUFXLENBQUMsS0FBSztZQUNuQkEsV0FBVztRQUNiLE9BQ0ssSUFBSUEsV0FBVyxHQUFHO1lBQ3JCQSxXQUFXLENBQUM7UUFDZDtRQUNBUCxnREFBSUEsQ0FBQ3FDLEdBQUcsQ0FBQzNCLFVBQVVPLE9BQU8sRUFBRTtZQUFFVixVQUFVQTtRQUFTO1FBQ2pEUCxnREFBSUEsQ0FBQ3FDLEdBQUcsQ0FBQzFCLFdBQVdNLE9BQU8sRUFBRTtZQUFFVixVQUFVQTtRQUFTO1FBQ2xEdUIsc0JBQXNCQztRQUN0QnhCLFlBQVksTUFBTUM7SUFDcEI7SUFNQSxxQkFDRSw4REFBQzhCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBUUQsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRTs7d0NBQUU7c0RBQWdCLDhEQUFDQzs0Q0FBS0gsV0FBVTtzREFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUVsRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFOzt3Q0FBRTtzREFBa0IsOERBQUNDOzRDQUFLSCxXQUFVO3NEQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRy9FLDhEQUFDRDtrQ0FDQyw0RUFBQ3BDLG1EQUFLQTs0QkFBQ3lDLEtBQUk7NEJBQWtDQyxLQUFJOzRCQUFNQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHL0UsOERBQUNOO2dCQUFRRCxXQUFVOztrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSVMsS0FBS25DOzRCQUFRMkIsV0FBVTs7OENBQzFCLDhEQUFDRTtvQ0FBRU0sS0FBS3JDO29DQUFXNkIsV0FBVTs4Q0FBK0Q7Ozs7Ozs4Q0FDNUYsOERBQUNFO29DQUFFTSxLQUFLcEM7b0NBQVk0QixXQUFVOzhDQUErRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWpILDhEQUFDUzt3QkFBSVQsV0FBVTt3QkFBV00sT0FBTzt3QkFBSUMsUUFBUTt3QkFBS0csU0FBUTt3QkFBY0MsU0FBUTt3QkFBTUMsT0FBTTt3QkFBNkJDLFlBQVc7d0JBQStCQyxVQUFTO3dCQUFVQyxVQUFTO3dCQUFVQyxlQUFjO3dCQUFRQyxnQkFBZTt3QkFBUUMsa0JBQWtCOzswQ0FDdFEsOERBQUN0RCxpREFBTUEsQ0FBQ3VELElBQUk7Z0NBQUNDLE9BQU87b0NBQUVDLFlBQVl6QjtnQ0FBRTtnQ0FBRzBCLFlBQVk7b0NBQUVDLFVBQVU7b0NBQUtDLE1BQU07d0NBQUM7d0NBQU07d0NBQUc7d0NBQU07cUNBQUU7Z0NBQUM7Z0NBQUdoQixLQUFLbEM7Z0NBQU9tRCxJQUFHO2dDQUFTQyxHQUFFO2dDQUEyQkMsTUFBSztnQ0FBT0MsUUFBTztnQ0FBVUMsYUFBYTs7Ozs7OzBDQUMvTCw4REFBQ2pFLGlEQUFNQSxDQUFDdUQsSUFBSTtnQ0FBQ1gsS0FBS2pDO2dDQUFPNkMsT0FBTztvQ0FBRVUsaUJBQWlCO29DQUFJQyxrQkFBa0JsQztnQ0FBaUI7Z0NBQUc0QixJQUFHO2dDQUFRQyxHQUFFO2dDQUFtTkMsTUFBSztnQ0FBT0MsUUFBTztnQ0FBVUMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpYO0dBbEZ3QjNEOztRQTBCTUwsb0RBQVNBO1FBSXRCQyxvREFBU0E7UUFDZEMsdURBQVlBO1FBQ0dBLHVEQUFZQTs7O0tBaENmRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeD9kYzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcC9kaXN0L2dzYXAnXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VTcHJpbmcsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cblxubGV0IHhQZXJjZW50ID0gMFxubGV0IGRpcmVjdGlvbiA9IC0xXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XG5cbiAgY29uc3QgZmlyc3RUZXh0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzZWNvbmRUZXh0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdoZWVsID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IG1vdXNlID0gdXNlUmVmKG51bGwpXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcbiAgICBnc2FwLnRvKHNsaWRlci5jdXJyZW50LCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgc2NydWI6IDAuNSxcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBvblVwZGF0ZTogZSA9PiBkaXJlY3Rpb24gPSBlLmRpcmVjdGlvbiAqIC0xXG4gICAgICB9LFxuICAgICAgeDogJy0yMDBweCcsXG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcblxuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogd2hlZWwuY3VycmVudCxcbiAgICBzbW9vdGg6IDFcbiAgfSlcbiAgY29uc3Qgc21vb3RoID0gdXNlU3ByaW5nKHNjcm9sbFlQcm9ncmVzcylcbiAgY29uc3QgeSA9IHVzZVRyYW5zZm9ybShzbW9vdGgsIFswLCAxXSwgWzAsIDMwMF0pXG4gIGNvbnN0IHN0cm9rZURhc2hPZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc21vb3RoLCBbMCwgMV0sIFsxMDAwLCAyMDAwXSlcblxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIGlmICh4UGVyY2VudCA8IC0xMDApIHtcbiAgICAgIHhQZXJjZW50ID0gMFxuICAgIH1cbiAgICBlbHNlIGlmICh4UGVyY2VudCA+IDApIHtcbiAgICAgIHhQZXJjZW50ID0gLTEwMDtcbiAgICB9XG4gICAgZ3NhcC5zZXQoZmlyc3RUZXh0LmN1cnJlbnQsIHsgeFBlcmNlbnQ6IHhQZXJjZW50IH0pXG4gICAgZ3NhcC5zZXQoc2Vjb25kVGV4dC5jdXJyZW50LCB7IHhQZXJjZW50OiB4UGVyY2VudCB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgIHhQZXJjZW50ICs9IDAuMSAqIGRpcmVjdGlvblxuICB9XG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGgtc2NyZWVuIHB0LTIwIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgIDxwPkhpIFRoZXJlISwgSSdhbSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPkdvd3RoYW08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgPHA+QSBSZXN1bHQncyBkcml2ZW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGRcIj5Gcm9udEVuZCBFbmdpbmVlcjwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWFnZXMvcHJvZ3JhbW1pbmctYW5pbWF0ZS5zdmcnIGFsdD0nc3ZnJyB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gPjwvSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLVsyOTBweF1cIj5cbiAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVyfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgPHAgcmVmPXtmaXJzdFRleHR9IGNsYXNzTmFtZT1cInJlbGF0aXZlIG0tMCB0ZXh0LXJlZC01MDAgdGV4dC1bMjAwcHhdIGZvbnQtbWVkaXVtIHByLVs1MHB4XVwiPkxvdmUgV2hhdCBZb3UgRG8gLTwvcD5cbiAgICAgICAgICAgIDxwIHJlZj17c2Vjb25kVGV4dH0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1mdWxsIHRvcC0wIG0tMCB0ZXh0LXJlZC01MDAgdGV4dC1bMjAwcHhdIGZvbnQtbWVkaXVtIHByLVs1MHB4XVwiPkxvdmUgV2hhdCBZb3UgRG8gLTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LVs0MXB4XVwiIHdpZHRoPXs0MX0gaGVpZ2h0PXsxMDB9IHZpZXdCb3g9XCIwIDAgMjQ3IDM5MFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT0nZXZlbm9kZCcgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZU1pdGVybGltaXQ9ezEuNX0gPlxuICAgICAgICAgIDxtb3Rpb24ucGF0aCBzdHlsZT17eyB0cmFuc2xhdGVZOiB5IH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZWFzZTogWzAuNzYsIDAsIDAuMjQsIDFdIH19IHJlZj17d2hlZWx9IGlkPVwid2hlZWxzXCIgZD1cIk0xMjMuMzU5LDc5Ljc3NWwwLDcyLjg0M1wiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0VGNDQ0NFwiIHN0cm9rZVdpZHRoPXsyMH0gLz5cbiAgICAgICAgICA8bW90aW9uLnBhdGggcmVmPXttb3VzZX0gc3R5bGU9e3sgc3Ryb2tlRGFzaGFycmF5OiA1MCwgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlRGFzaE9mZnNldCB9fSBpZD1cIm1vdXNlXCIgZD1cIk0yMzYuNzE3LDEyMy4zNTljMCwtNjIuNTY1IC01MC43OTQsLTExMy4zNTkgLTExMy4zNTgsLTExMy4zNTljLTYyLjU2NSwwIC0xMTMuMzU5LDUwLjc5NCAtMTEzLjM1OSwxMTMuMzU5bDAsMTQzLjIzN2MwLDYyLjU2NSA1MC43OTQsMTEzLjM1OSAxMTMuMzU5LDExMy4zNTljNjIuNTY0LDAgMTEzLjM1OCwtNTAuNzk0IDExMy4zNTgsLTExMy4zNTlsMCwtMTQzLjIzN1pcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNFRjQ0NDRcIiBzdHJva2VXaWR0aD17MjB9IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zZWN0aW9uID5cbiAgICA8L2RpdiA+XG4gIClcblxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiSW1hZ2UiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJ1c2VUcmFuc2Zvcm0iLCJ4UGVyY2VudCIsImRpcmVjdGlvbiIsIkxhbmRpbmciLCJmaXJzdFRleHQiLCJzZWNvbmRUZXh0Iiwic2xpZGVyIiwid2hlZWwiLCJtb3VzZSIsInJlZ2lzdGVyUGx1Z2luIiwidG8iLCJjdXJyZW50Iiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcnViIiwic3RhcnQiLCJlbmQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm9uVXBkYXRlIiwiZSIsIngiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwic21vb3RoIiwieSIsInN0cm9rZURhc2hPZmZzZXQiLCJzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicCIsInNwYW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInN2ZyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZU1pdGVybGltaXQiLCJwYXRoIiwic3R5bGUiLCJ0cmFuc2xhdGVZIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImlkIiwiZCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});