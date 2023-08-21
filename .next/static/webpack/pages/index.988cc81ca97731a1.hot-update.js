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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Landing() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let xPercent = 0;\n        let direction = -1;\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-500px\"\n        });\n        requestAnimationFrame(animate);\n        const animate = ()=>{\n            if (xPercent < -100) {\n                xPercent = 0;\n            } else if (xPercent > 0) {\n                xPercent = -100;\n            }\n            gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n                xPercent: xPercent\n            });\n            gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n                xPercent: xPercent\n            });\n            requestAnimationFrame(animate);\n            xPercent += 0.1 * direction;\n        };\n    }, []);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({\n        target: wheel.current,\n        smooth: 1\n    });\n    const smooth = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)(scrollYProgress);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(smooth, [\n        0,\n        1\n    ], [\n        0,\n        300\n    ]);\n    const y2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(smooth, [\n        0,\n        1\n    ], [\n        1000,\n        2000\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-[290px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: slider,\n                            className: \"relative whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: firstText,\n                                    className: \"relative m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: secondText,\n                                    className: \"absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"\",\n                        width: 41,\n                        height: 100,\n                        viewBox: \"0 0 247 390\",\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        fillRule: \"evenodd\",\n                        clipRule: \"evenodd\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeMiterlimit: 1.5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.path, {\n                                style: {\n                                    translateY: y\n                                },\n                                transition: {\n                                    duration: 0.8,\n                                    ease: [\n                                        0.76,\n                                        0,\n                                        0.24,\n                                        1\n                                    ]\n                                },\n                                ref: wheel,\n                                id: \"wheels\",\n                                d: \"M123.359,79.775l0,72.843\",\n                                fill: \"none\",\n                                stroke: \"#EF4444\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.path, {\n                                ref: mouse,\n                                style: {\n                                    strokeDasharray: 50,\n                                    strokeDashoffset: y2\n                                },\n                                id: \"mouse\",\n                                d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                                fill: \"none\",\n                                stroke: \"#EF4444\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"iGiwSinFqTx/DIEdPa2fIH9NCSM=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBQ21CO0FBQ3pCO0FBQzRDO0FBRTVELFNBQVNTOztJQUV0QixNQUFNQyxZQUFZVCw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNVSxhQUFhViw2Q0FBTUEsQ0FBQztJQUMxQixNQUFNVyxTQUFTWCw2Q0FBTUEsQ0FBQztJQUN0QixNQUFNWSxRQUFRWiw2Q0FBTUEsQ0FBQztJQUNyQixNQUFNYSxRQUFRYiw2Q0FBTUEsQ0FBQztJQUdyQkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJZSxXQUFXO1FBQ2YsSUFBSUMsWUFBWSxDQUFDO1FBQ2pCZCxnREFBSUEsQ0FBQ2UsY0FBYyxDQUFDZCxrRUFBYUE7UUFDakNELGdEQUFJQSxDQUFDZ0IsRUFBRSxDQUFDTixPQUFPTyxPQUFPLEVBQUU7WUFDdEJDLGVBQWU7Z0JBQ2JDLFNBQVNDLFNBQVNDLGVBQWU7Z0JBQ2pDQyxPQUFPO2dCQUNQQyxPQUFPO2dCQUNQQyxLQUFLQyxPQUFPQyxXQUFXO2dCQUN2QkMsVUFBVUMsQ0FBQUEsSUFBS2QsWUFBWWMsRUFBRWQsU0FBUyxHQUFHLENBQUM7WUFDNUM7WUFDQWUsR0FBRztRQUNMO1FBQ0FDLHNCQUFzQkM7UUFFdEIsTUFBTUEsVUFBVTtZQUNkLElBQUlsQixXQUFXLENBQUMsS0FBSztnQkFDbkJBLFdBQVc7WUFDYixPQUNLLElBQUlBLFdBQVcsR0FBRztnQkFDckJBLFdBQVcsQ0FBQztZQUNkO1lBQ0FiLGdEQUFJQSxDQUFDZ0MsR0FBRyxDQUFDeEIsVUFBVVMsT0FBTyxFQUFFO2dCQUFFSixVQUFVQTtZQUFTO1lBQ2pEYixnREFBSUEsQ0FBQ2dDLEdBQUcsQ0FBQ3ZCLFdBQVdRLE9BQU8sRUFBRTtnQkFBRUosVUFBVUE7WUFBUztZQUNsRGlCLHNCQUFzQkM7WUFDdEJsQixZQUFZLE1BQU1DO1FBQ3BCO0lBR0YsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFFbUIsZUFBZSxFQUFFLEdBQUc3Qix3REFBU0EsQ0FBQztRQUNwQzhCLFFBQVF2QixNQUFNTSxPQUFPO1FBQ3JCa0IsUUFBUTtJQUNWO0lBQ0EsTUFBTUEsU0FBUzlCLHdEQUFTQSxDQUFDNEI7SUFDekIsTUFBTUcsSUFBSTlCLDJEQUFZQSxDQUFDNkIsUUFBUTtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBRztLQUFJO0lBQy9DLE1BQU1FLEtBQUsvQiwyREFBWUEsQ0FBQzZCLFFBQVE7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU07S0FBSztJQU1wRCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFRRCxXQUFVOztrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFOzt3Q0FBRTtzREFBZ0IsOERBQUNDOzRDQUFLSCxXQUFVO3NEQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRWxFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7O3dDQUFFO3NEQUFrQiw4REFBQ0M7NENBQUtILFdBQVU7c0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHL0UsOERBQUNEO2tDQUNDLDRFQUFDcEMsbURBQUtBOzRCQUFDeUMsS0FBSTs0QkFBa0NDLEtBQUk7NEJBQU1DLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvRSw4REFBQ047Z0JBQVFELFdBQVU7O2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJUyxLQUFLckM7NEJBQVE2QixXQUFVOzs4Q0FDMUIsOERBQUNFO29DQUFFTSxLQUFLdkM7b0NBQVcrQixXQUFVOzhDQUErRDs7Ozs7OzhDQUM1Riw4REFBQ0U7b0NBQUVNLEtBQUt0QztvQ0FBWThCLFdBQVU7OENBQStFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJakgsOERBQUNTO3dCQUFJVCxXQUFVO3dCQUFHTSxPQUFPO3dCQUFJQyxRQUFRO3dCQUFLRyxTQUFRO3dCQUFjQyxTQUFRO3dCQUFNQyxPQUFNO3dCQUE2QkMsWUFBVzt3QkFBK0JDLFVBQVM7d0JBQVVDLFVBQVM7d0JBQVVDLGVBQWM7d0JBQVFDLGdCQUFlO3dCQUFRQyxrQkFBa0I7OzBDQUM5UCw4REFBQ3RELGlEQUFNQSxDQUFDdUQsSUFBSTtnQ0FBQ0MsT0FBTztvQ0FBRUMsWUFBWXhCO2dDQUFFO2dDQUFHeUIsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBS0MsTUFBTTt3Q0FBQzt3Q0FBTTt3Q0FBRzt3Q0FBTTtxQ0FBRTtnQ0FBQztnQ0FBR2hCLEtBQUtwQztnQ0FBT3FELElBQUc7Z0NBQVNDLEdBQUU7Z0NBQTJCQyxNQUFLO2dDQUFPQyxRQUFPO2dDQUFVQyxhQUFhOzs7Ozs7MENBQy9MLDhEQUFDakUsaURBQU1BLENBQUN1RCxJQUFJO2dDQUFDWCxLQUFLbkM7Z0NBQU8rQyxPQUFPO29DQUFFVSxpQkFBaUI7b0NBQUlDLGtCQUFrQmpDO2dDQUFHO2dDQUFHMkIsSUFBRztnQ0FBUUMsR0FBRTtnQ0FBbU5DLE1BQUs7Z0NBQU9DLFFBQU87Z0NBQVVDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uVztHQXBGd0I3RDs7UUF5Q01ILG9EQUFTQTtRQUl0QkMsb0RBQVNBO1FBQ2RDLHVEQUFZQTtRQUNYQSx1REFBWUE7OztLQS9DREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZWNvbXBvbmVudHMvbGFuZGluZy5qc3g/ZGM1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAvZGlzdC9nc2FwJ1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlU3ByaW5nLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nKCkge1xuXG4gIGNvbnN0IGZpcnN0VGV4dCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2Vjb25kVGV4dCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2xpZGVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3aGVlbCA9IHVzZVJlZihudWxsKVxuICBjb25zdCBtb3VzZSA9IHVzZVJlZihudWxsKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgeFBlcmNlbnQgPSAwXG4gICAgbGV0IGRpcmVjdGlvbiA9IC0xXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuICAgIGdzYXAudG8oc2xpZGVyLmN1cnJlbnQsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBzY3J1YjogMC41LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9uVXBkYXRlOiBlID0+IGRpcmVjdGlvbiA9IGUuZGlyZWN0aW9uICogLTFcbiAgICAgIH0sXG4gICAgICB4OiAnLTUwMHB4JyxcbiAgICB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh4UGVyY2VudCA8IC0xMDApIHtcbiAgICAgICAgeFBlcmNlbnQgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh4UGVyY2VudCA+IDApIHtcbiAgICAgICAgeFBlcmNlbnQgPSAtMTAwO1xuICAgICAgfVxuICAgICAgZ3NhcC5zZXQoZmlyc3RUZXh0LmN1cnJlbnQsIHsgeFBlcmNlbnQ6IHhQZXJjZW50IH0pXG4gICAgICBnc2FwLnNldChzZWNvbmRUZXh0LmN1cnJlbnQsIHsgeFBlcmNlbnQ6IHhQZXJjZW50IH0pXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgIHhQZXJjZW50ICs9IDAuMSAqIGRpcmVjdGlvblxuICAgIH1cblxuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogd2hlZWwuY3VycmVudCxcbiAgICBzbW9vdGg6IDFcbiAgfSlcbiAgY29uc3Qgc21vb3RoID0gdXNlU3ByaW5nKHNjcm9sbFlQcm9ncmVzcylcbiAgY29uc3QgeSA9IHVzZVRyYW5zZm9ybShzbW9vdGgsIFswLCAxXSwgWzAsIDMwMF0pXG4gIGNvbnN0IHkyID0gdXNlVHJhbnNmb3JtKHNtb290aCwgWzAsIDFdLCBbMTAwMCwgMjAwMF0pXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGgtc2NyZWVuIHB0LTIwIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgIDxwPkhpIFRoZXJlISwgSSdhbSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPkdvd3RoYW08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgPHA+QSBSZXN1bHQncyBkcml2ZW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGRcIj5Gcm9udEVuZCBFbmdpbmVlcjwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWFnZXMvcHJvZ3JhbW1pbmctYW5pbWF0ZS5zdmcnIGFsdD0nc3ZnJyB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gPjwvSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLVsyOTBweF1cIj5cbiAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVyfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgPHAgcmVmPXtmaXJzdFRleHR9IGNsYXNzTmFtZT1cInJlbGF0aXZlIG0tMCB0ZXh0LXJlZC01MDAgdGV4dC1bMjAwcHhdIGZvbnQtbWVkaXVtIHByLVs1MHB4XVwiPkxvdmUgV2hhdCBZb3UgRG8gLTwvcD5cbiAgICAgICAgICAgIDxwIHJlZj17c2Vjb25kVGV4dH0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1mdWxsIHRvcC0wIG0tMCB0ZXh0LXJlZC01MDAgdGV4dC1bMjAwcHhdIGZvbnQtbWVkaXVtIHByLVs1MHB4XVwiPkxvdmUgV2hhdCBZb3UgRG8gLTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJcIiB3aWR0aD17NDF9IGhlaWdodD17MTAwfSB2aWV3Qm94PVwiMCAwIDI0NyAzOTBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9J2V2ZW5vZGQnIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VNaXRlcmxpbWl0PXsxLjV9ID5cbiAgICAgICAgICA8bW90aW9uLnBhdGggc3R5bGU9e3sgdHJhbnNsYXRlWTogeSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjc2LCAwLCAwLjI0LCAxXSB9fSByZWY9e3doZWVsfSBpZD1cIndoZWVsc1wiIGQ9XCJNMTIzLjM1OSw3OS43NzVsMCw3Mi44NDNcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNFRjQ0NDRcIiBzdHJva2VXaWR0aD17MjB9IC8+XG4gICAgICAgICAgPG1vdGlvbi5wYXRoIHJlZj17bW91c2V9IHN0eWxlPXt7IHN0cm9rZURhc2hhcnJheTogNTAsIHN0cm9rZURhc2hvZmZzZXQ6IHkyIH19IGlkPVwibW91c2VcIiBkPVwiTTIzNi43MTcsMTIzLjM1OWMwLC02Mi41NjUgLTUwLjc5NCwtMTEzLjM1OSAtMTEzLjM1OCwtMTEzLjM1OWMtNjIuNTY1LDAgLTExMy4zNTksNTAuNzk0IC0xMTMuMzU5LDExMy4zNTlsMCwxNDMuMjM3YzAsNjIuNTY1IDUwLjc5NCwxMTMuMzU5IDExMy4zNTksMTEzLjM1OWM2Mi41NjQsMCAxMTMuMzU4LC01MC43OTQgMTEzLjM1OCwtMTEzLjM1OWwwLC0xNDMuMjM3WlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0VGNDQ0NFwiIHN0cm9rZVdpZHRoPXsyMH0gLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NlY3Rpb24gPlxuICAgIDwvZGl2ID5cbiAgKVxuXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJJbWFnZSIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRyYW5zZm9ybSIsIkxhbmRpbmciLCJmaXJzdFRleHQiLCJzZWNvbmRUZXh0Iiwic2xpZGVyIiwid2hlZWwiLCJtb3VzZSIsInhQZXJjZW50IiwiZGlyZWN0aW9uIiwicmVnaXN0ZXJQbHVnaW4iLCJ0byIsImN1cnJlbnQiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2NydWIiLCJzdGFydCIsImVuZCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwib25VcGRhdGUiLCJlIiwieCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJzZXQiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJzbW9vdGgiLCJ5IiwieTIiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicCIsInNwYW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInN2ZyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZU1pdGVybGltaXQiLCJwYXRoIiwic3R5bGUiLCJ0cmFuc2xhdGVZIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImlkIiwiZCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});