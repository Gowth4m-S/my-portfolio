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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet xPercent = 0;\nlet direction = -1;\nfunction Landing() {\n    _s();\n    // const firstText = useRef(null);\n    // const secondText = useRef(null);\n    // const slider = useRef(null);\n    const wheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-200px\"\n        });\n        requestAnimationFrame(animate);\n    }, []);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({\n        target: wheel.current,\n        smooth: 1\n    });\n    const smooth = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)(scrollYProgress);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(smooth, [\n        0,\n        1\n    ], [\n        0,\n        300\n    ]);\n    const strokeDashOffset = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(smooth, [\n        0,\n        1\n    ], [\n        1000,\n        2000\n    ]);\n    const animate = ()=>{\n        if (xPercent < -100) {\n            xPercent = 0;\n        } else if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n            xPercent: xPercent\n        });\n        requestAnimationFrame(animate);\n        xPercent += 0.1 * direction;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"md:w-[41px] w-7\",\n                    height: 100,\n                    viewBox: \"0 0 247 390\",\n                    version: \"1.1\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                    fillRule: \"evenodd\",\n                    clipRule: \"evenodd\",\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\",\n                    strokeMiterlimit: 1.5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.path, {\n                            style: {\n                                translateY: y\n                            },\n                            transition: {\n                                duration: 0.8,\n                                ease: [\n                                    0.76,\n                                    0,\n                                    0.24,\n                                    1\n                                ]\n                            },\n                            ref: wheel,\n                            id: \"wheels\",\n                            d: \"M123.359,79.775l0,72.843\",\n                            fill: \"none\",\n                            stroke: \"#EF4444\",\n                            strokeWidth: 20\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.path, {\n                            ref: mouse,\n                            style: {\n                                strokeDasharray: 50,\n                                strokeDashoffset: strokeDashOffset\n                            },\n                            id: \"mouse\",\n                            d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                            fill: \"none\",\n                            stroke: \"#EF4444\",\n                            strokeWidth: 20\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"TSS8vaCyKQ9YqthmTPAF2lkarYc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBQ21CO0FBQ3pCO0FBQzRDO0FBRzNFLElBQUlTLFdBQVc7QUFDZixJQUFJQyxZQUFZLENBQUM7QUFFRixTQUFTQzs7SUFFdEIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsTUFBTUMsUUFBUVgsNkNBQU1BLENBQUM7SUFDckIsTUFBTVksUUFBUVosNkNBQU1BLENBQUM7SUFHckJELGdEQUFTQSxDQUFDO1FBQ1JFLGdEQUFJQSxDQUFDWSxjQUFjLENBQUNYLGtFQUFhQTtRQUNqQ0QsZ0RBQUlBLENBQUNhLEVBQUUsQ0FBQ0MsT0FBT0MsT0FBTyxFQUFFO1lBQ3RCQyxlQUFlO2dCQUNiQyxTQUFTQyxTQUFTQyxlQUFlO2dCQUNqQ0MsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsS0FBS0MsT0FBT0MsV0FBVztnQkFDdkJDLFVBQVVDLENBQUFBLElBQUtsQixZQUFZa0IsRUFBRWxCLFNBQVMsR0FBRyxDQUFDO1lBQzVDO1lBQ0FtQixHQUFHO1FBQ0w7UUFDQUMsc0JBQXNCQztJQUd4QixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHMUIsd0RBQVNBLENBQUM7UUFDcEMyQixRQUFRckIsTUFBTUssT0FBTztRQUNyQmlCLFFBQVE7SUFDVjtJQUNBLE1BQU1BLFNBQVMzQix3REFBU0EsQ0FBQ3lCO0lBQ3pCLE1BQU1HLElBQUkzQiwyREFBWUEsQ0FBQzBCLFFBQVE7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUc7S0FBSTtJQUMvQyxNQUFNRSxtQkFBbUI1QiwyREFBWUEsQ0FBQzBCLFFBQVE7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU07S0FBSztJQUVsRSxNQUFNSCxVQUFVO1FBQ2QsSUFBSXRCLFdBQVcsQ0FBQyxLQUFLO1lBQ25CQSxXQUFXO1FBQ2IsT0FDSyxJQUFJQSxXQUFXLEdBQUc7WUFDckJBLFdBQVcsQ0FBQztRQUNkO1FBQ0FQLGdEQUFJQSxDQUFDbUMsR0FBRyxDQUFDQyxVQUFVckIsT0FBTyxFQUFFO1lBQUVSLFVBQVVBO1FBQVM7UUFDakRQLGdEQUFJQSxDQUFDbUMsR0FBRyxDQUFDRSxXQUFXdEIsT0FBTyxFQUFFO1lBQUVSLFVBQVVBO1FBQVM7UUFDbERxQixzQkFBc0JDO1FBQ3RCdEIsWUFBWSxNQUFNQztJQUNwQjtJQU1BLHFCQUNFLDhEQUFDOEI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFRRCxXQUFVOztrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFOzt3Q0FBRTtzREFBZ0IsOERBQUNDOzRDQUFLSCxXQUFVO3NEQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRWxFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7O3dDQUFFO3NEQUFrQiw4REFBQ0M7NENBQUtILFdBQVU7c0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHL0UsOERBQUNEO2tDQUNDLDRFQUFDcEMsbURBQUtBOzRCQUFDeUMsS0FBSTs0QkFBa0NDLEtBQUk7NEJBQU1DLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvRSw4REFBQ047Z0JBQVFELFdBQVU7MEJBUWpCLDRFQUFDUTtvQkFBSVIsV0FBVTtvQkFBa0JPLFFBQVE7b0JBQUtFLFNBQVE7b0JBQWNDLFNBQVE7b0JBQU1DLE9BQU07b0JBQTZCQyxZQUFXO29CQUErQkMsVUFBUztvQkFBVUMsVUFBUztvQkFBVUMsZUFBYztvQkFBUUMsZ0JBQWU7b0JBQVFDLGtCQUFrQjs7c0NBQ2xRLDhEQUFDckQsaURBQU1BLENBQUNzRCxJQUFJOzRCQUFDQyxPQUFPO2dDQUFFQyxZQUFZMUI7NEJBQUU7NEJBQUcyQixZQUFZO2dDQUFFQyxVQUFVO2dDQUFLQyxNQUFNO29DQUFDO29DQUFNO29DQUFHO29DQUFNO2lDQUFFOzRCQUFDOzRCQUFHQyxLQUFLckQ7NEJBQU9zRCxJQUFHOzRCQUFTQyxHQUFFOzRCQUEyQkMsTUFBSzs0QkFBT0MsUUFBTzs0QkFBVUMsYUFBYTs7Ozs7O3NDQUMvTCw4REFBQ2pFLGlEQUFNQSxDQUFDc0QsSUFBSTs0QkFBQ00sS0FBS3BEOzRCQUFPK0MsT0FBTztnQ0FBRVcsaUJBQWlCO2dDQUFJQyxrQkFBa0JwQzs0QkFBaUI7NEJBQUc4QixJQUFHOzRCQUFRQyxHQUFFOzRCQUFtTkMsTUFBSzs0QkFBT0MsUUFBTzs0QkFBVUMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNalg7R0FsRndCM0Q7O1FBMEJNTCxvREFBU0E7UUFJdEJDLG9EQUFTQTtRQUNkQyx1REFBWUE7UUFDR0EsdURBQVlBOzs7S0FoQ2ZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWVjb21wb25lbnRzL2xhbmRpbmcuanN4P2RjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwL2Rpc3QvZ3NhcCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVNwcmluZywgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuXG5sZXQgeFBlcmNlbnQgPSAwXG5sZXQgZGlyZWN0aW9uID0gLTFcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZygpIHtcblxuICAvLyBjb25zdCBmaXJzdFRleHQgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnN0IHNlY29uZFRleHQgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnN0IHNsaWRlciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgd2hlZWwgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgbW91c2UgPSB1c2VSZWYobnVsbClcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuICAgIGdzYXAudG8oc2xpZGVyLmN1cnJlbnQsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBzY3J1YjogMC41LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9uVXBkYXRlOiBlID0+IGRpcmVjdGlvbiA9IGUuZGlyZWN0aW9uICogLTFcbiAgICAgIH0sXG4gICAgICB4OiAnLTIwMHB4JyxcbiAgICB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG5cbiAgfSwgW10pXG5cbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XG4gICAgdGFyZ2V0OiB3aGVlbC5jdXJyZW50LFxuICAgIHNtb290aDogMVxuICB9KVxuICBjb25zdCBzbW9vdGggPSB1c2VTcHJpbmcoc2Nyb2xsWVByb2dyZXNzKVxuICBjb25zdCB5ID0gdXNlVHJhbnNmb3JtKHNtb290aCwgWzAsIDFdLCBbMCwgMzAwXSlcbiAgY29uc3Qgc3Ryb2tlRGFzaE9mZnNldCA9IHVzZVRyYW5zZm9ybShzbW9vdGgsIFswLCAxXSwgWzEwMDAsIDIwMDBdKVxuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgaWYgKHhQZXJjZW50IDwgLTEwMCkge1xuICAgICAgeFBlcmNlbnQgPSAwXG4gICAgfVxuICAgIGVsc2UgaWYgKHhQZXJjZW50ID4gMCkge1xuICAgICAgeFBlcmNlbnQgPSAtMTAwO1xuICAgIH1cbiAgICBnc2FwLnNldChmaXJzdFRleHQuY3VycmVudCwgeyB4UGVyY2VudDogeFBlcmNlbnQgfSlcbiAgICBnc2FwLnNldChzZWNvbmRUZXh0LmN1cnJlbnQsIHsgeFBlcmNlbnQ6IHhQZXJjZW50IH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgeFBlcmNlbnQgKz0gMC4xICogZGlyZWN0aW9uXG4gIH1cblxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgaC1zY3JlZW4gcHQtMjAgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgPHA+SGkgVGhlcmUhLCBJJ2FtIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkXCI+R293dGhhbTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICA8cD5BIFJlc3VsdCdzIGRyaXZlbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPkZyb250RW5kIEVuZ2luZWVyPC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL2ltYWdlcy9wcm9ncmFtbWluZy1hbmltYXRlLnN2ZycgYWx0PSdzdmcnIHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfSA+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtWzI5MHB4XVwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtzbGlkZXJ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICA8cCByZWY9e2ZpcnN0VGV4dH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgbS0wIHRleHQtcmVkLTUwMCB0ZXh0LVsyMDBweF0gZm9udC1tZWRpdW0gcHItWzUwcHhdXCI+TG92ZSBXaGF0IFlvdSBEbyAtPC9wPlxuICAgICAgICAgICAgPHAgcmVmPXtzZWNvbmRUZXh0fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LWZ1bGwgdG9wLTAgbS0wIHRleHQtcmVkLTUwMCB0ZXh0LVsyMDBweF0gZm9udC1tZWRpdW0gcHItWzUwcHhdXCI+TG92ZSBXaGF0IFlvdSBEbyAtPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiovfVxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIm1kOnctWzQxcHhdIHctN1wiIGhlaWdodD17MTAwfSB2aWV3Qm94PVwiMCAwIDI0NyAzOTBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9J2V2ZW5vZGQnIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VNaXRlcmxpbWl0PXsxLjV9ID5cbiAgICAgICAgICA8bW90aW9uLnBhdGggc3R5bGU9e3sgdHJhbnNsYXRlWTogeSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjc2LCAwLCAwLjI0LCAxXSB9fSByZWY9e3doZWVsfSBpZD1cIndoZWVsc1wiIGQ9XCJNMTIzLjM1OSw3OS43NzVsMCw3Mi44NDNcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNFRjQ0NDRcIiBzdHJva2VXaWR0aD17MjB9IC8+XG4gICAgICAgICAgPG1vdGlvbi5wYXRoIHJlZj17bW91c2V9IHN0eWxlPXt7IHN0cm9rZURhc2hhcnJheTogNTAsIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZURhc2hPZmZzZXQgfX0gaWQ9XCJtb3VzZVwiIGQ9XCJNMjM2LjcxNywxMjMuMzU5YzAsLTYyLjU2NSAtNTAuNzk0LC0xMTMuMzU5IC0xMTMuMzU4LC0xMTMuMzU5Yy02Mi41NjUsMCAtMTEzLjM1OSw1MC43OTQgLTExMy4zNTksMTEzLjM1OWwwLDE0My4yMzdjMCw2Mi41NjUgNTAuNzk0LDExMy4zNTkgMTEzLjM1OSwxMTMuMzU5YzYyLjU2NCwwIDExMy4zNTgsLTUwLjc5NCAxMTMuMzU4LC0xMTMuMzU5bDAsLTE0My4yMzdaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRUY0NDQ0XCIgc3Ryb2tlV2lkdGg9ezIwfSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc2VjdGlvbiA+XG4gICAgPC9kaXYgPlxuICApXG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkltYWdlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwidXNlVHJhbnNmb3JtIiwieFBlcmNlbnQiLCJkaXJlY3Rpb24iLCJMYW5kaW5nIiwid2hlZWwiLCJtb3VzZSIsInJlZ2lzdGVyUGx1Z2luIiwidG8iLCJzbGlkZXIiLCJjdXJyZW50Iiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcnViIiwic3RhcnQiLCJlbmQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm9uVXBkYXRlIiwiZSIsIngiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwic21vb3RoIiwieSIsInN0cm9rZURhc2hPZmZzZXQiLCJzZXQiLCJmaXJzdFRleHQiLCJzZWNvbmRUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInAiLCJzcGFuIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJ2aWV3Qm94IiwidmVyc2lvbiIsInhtbG5zIiwieG1sbnNYbGluayIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VNaXRlcmxpbWl0IiwicGF0aCIsInN0eWxlIiwidHJhbnNsYXRlWSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJyZWYiLCJpZCIsImQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});