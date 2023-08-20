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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Landing() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let xPercent = 0;\n    let direction = -1;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-500px\"\n        });\n        requestAnimationFrame(animate);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wheel.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: ()=>{\n                    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wheel.current, {\n                        translateY: \"100px\",\n                        duration: 1\n                    });\n                }\n            }\n        });\n    }, []);\n    const animate = ()=>{\n        if (xPercent < -100) {\n            xPercent = 0;\n        } else if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n            xPercent: xPercent\n        });\n        requestAnimationFrame(animate);\n        xPercent += 0.1 * direction;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-[290px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: slider,\n                            className: \"relative whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: firstText,\n                                    className: \"relative m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: secondText,\n                                    className: \"absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"\",\n                        width: 41,\n                        height: 100,\n                        viewBox: \"0 0 247 390\",\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        fillRule: \"evenodd\",\n                        clipRule: \"evenodd\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeMiterlimit: 1.5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                ref: wheel,\n                                id: \"wheels\",\n                                d: \"M123.359,79.775l0,72.843\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                id: \"mouse\",\n                                d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"ZslKs4rV3TPM4Eykkg5xlfhMQJ0=\");\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDbUI7QUFDekI7QUFDbUI7QUFFbkMsU0FBU087O0lBRXRCLE1BQU1DLFlBQVlQLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1TLFNBQVNULDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU1VLFFBQVFWLDZDQUFNQSxDQUFDO0lBRXJCLElBQUlXLFdBQVc7SUFDZixJQUFJQyxZQUFZLENBQUM7SUFFakJiLGdEQUFTQSxDQUFDO1FBQ1JFLGdEQUFJQSxDQUFDWSxjQUFjLENBQUNYLGtFQUFhQTtRQUNqQ0QsZ0RBQUlBLENBQUNhLEVBQUUsQ0FBQ0wsT0FBT00sT0FBTyxFQUFFO1lBQ3RCQyxlQUFlO2dCQUNiQyxTQUFTQyxTQUFTQyxlQUFlO2dCQUNqQ0MsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsS0FBS0MsT0FBT0MsV0FBVztnQkFDdkJDLFVBQVVDLENBQUFBLElBQUtkLFlBQVljLEVBQUVkLFNBQVMsR0FBRyxDQUFDO1lBQzVDO1lBQ0FlLEdBQUc7UUFDTDtRQUNBQyxzQkFBc0JDO1FBRXRCNUIsZ0RBQUlBLENBQUNhLEVBQUUsQ0FBQ0osTUFBTUssT0FBTyxFQUFFO1lBQ3JCQyxlQUFlO2dCQUNiQyxTQUFTQyxTQUFTQyxlQUFlO2dCQUNqQ0UsT0FBTztnQkFDUEMsS0FBS0MsT0FBT0MsV0FBVztnQkFDdkJDLFVBQVU7b0JBQVF4QixnREFBSUEsQ0FBQ2EsRUFBRSxDQUFDSixNQUFNSyxPQUFPLEVBQUU7d0JBQUVlLFlBQVk7d0JBQVNDLFVBQVU7b0JBQUU7Z0JBQUc7WUFFakY7UUFFRjtJQUVGLEdBQUcsRUFBRTtJQUVMLE1BQU1GLFVBQVU7UUFDZCxJQUFJbEIsV0FBVyxDQUFDLEtBQUs7WUFDbkJBLFdBQVc7UUFDYixPQUNLLElBQUlBLFdBQVcsR0FBRztZQUNyQkEsV0FBVyxDQUFDO1FBQ2Q7UUFDQVYsZ0RBQUlBLENBQUMrQixHQUFHLENBQUN6QixVQUFVUSxPQUFPLEVBQUU7WUFBRUosVUFBVUE7UUFBUztRQUNqRFYsZ0RBQUlBLENBQUMrQixHQUFHLENBQUN4QixXQUFXTyxPQUFPLEVBQUU7WUFBRUosVUFBVUE7UUFBUztRQUNsRGlCLHNCQUFzQkM7UUFDdEJsQixZQUFZLE1BQU1DO0lBQ3BCO0lBS0EscUJBQ0UsOERBQUNxQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQVFELFdBQVU7O2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7O3dDQUFFO3NEQUFnQiw4REFBQ0M7NENBQUtILFdBQVU7c0RBQTZCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFbEUsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRTs7d0NBQUU7c0RBQWtCLDhEQUFDQzs0Q0FBS0gsV0FBVTtzREFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcvRSw4REFBQ0Q7a0NBQ0MsNEVBQUM5QixtREFBS0E7NEJBQUNtQyxLQUFJOzRCQUFrQ0MsS0FBSTs0QkFBTUMsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9FLDhEQUFDTjtnQkFBUUQsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlTLEtBQUtqQzs0QkFBUXlCLFdBQVU7OzhDQUMxQiw4REFBQ0U7b0NBQUVNLEtBQUtuQztvQ0FBVzJCLFdBQVU7OENBQStEOzs7Ozs7OENBQzVGLDhEQUFDRTtvQ0FBRU0sS0FBS2xDO29DQUFZMEIsV0FBVTs4Q0FBK0U7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlqSCw4REFBQ1M7d0JBQUlULFdBQVU7d0JBQUdNLE9BQU87d0JBQUlDLFFBQVE7d0JBQUtHLFNBQVE7d0JBQWNDLFNBQVE7d0JBQU1DLE9BQU07d0JBQTZCQyxZQUFXO3dCQUErQkMsVUFBUzt3QkFBVUMsVUFBUzt3QkFBVUMsZUFBYzt3QkFBUUMsZ0JBQWU7d0JBQVFDLGtCQUFrQjs7MENBQzlQLDhEQUFDQztnQ0FBS1gsS0FBS2hDO2dDQUFPNEMsSUFBRztnQ0FBU0MsR0FBRTtnQ0FBMkJDLE1BQUs7Z0NBQU9DLFFBQU87Z0NBQU1DLGFBQWE7Ozs7OzswQ0FDakcsOERBQUNMO2dDQUFLQyxJQUFHO2dDQUFRQyxHQUFFO2dDQUFtTkMsTUFBSztnQ0FBT0MsUUFBTztnQ0FBTUMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRSO0dBcEZ3QnBEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWVjb21wb25lbnRzL2xhbmRpbmcuanN4P2RjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwL2Rpc3QvZ3NhcCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nKCkge1xuXG4gIGNvbnN0IGZpcnN0VGV4dCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2Vjb25kVGV4dCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2xpZGVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3aGVlbCA9IHVzZVJlZihudWxsKVxuXG4gIGxldCB4UGVyY2VudCA9IDBcbiAgbGV0IGRpcmVjdGlvbiA9IC0xXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG4gICAgZ3NhcC50byhzbGlkZXIuY3VycmVudCwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIHNjcnViOiAwLjUsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgb25VcGRhdGU6IGUgPT4gZGlyZWN0aW9uID0gZS5kaXJlY3Rpb24gKiAtMVxuICAgICAgfSxcbiAgICAgIHg6ICctNTAwcHgnLFxuICAgIH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICBnc2FwLnRvKHdoZWVsLmN1cnJlbnQsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7IGdzYXAudG8od2hlZWwuY3VycmVudCwgeyB0cmFuc2xhdGVZOiAnMTAwcHgnLCBkdXJhdGlvbjogMSB9KSB9XG5cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfSwgW10pXG5cbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICBpZiAoeFBlcmNlbnQgPCAtMTAwKSB7XG4gICAgICB4UGVyY2VudCA9IDBcbiAgICB9XG4gICAgZWxzZSBpZiAoeFBlcmNlbnQgPiAwKSB7XG4gICAgICB4UGVyY2VudCA9IC0xMDA7XG4gICAgfVxuICAgIGdzYXAuc2V0KGZpcnN0VGV4dC5jdXJyZW50LCB7IHhQZXJjZW50OiB4UGVyY2VudCB9KVxuICAgIGdzYXAuc2V0KHNlY29uZFRleHQuY3VycmVudCwgeyB4UGVyY2VudDogeFBlcmNlbnQgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICB4UGVyY2VudCArPSAwLjEgKiBkaXJlY3Rpb25cbiAgfVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgaC1zY3JlZW4gcHQtMjAgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgPHA+SGkgVGhlcmUhLCBJJ2FtIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkXCI+R293dGhhbTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICA8cD5BIFJlc3VsdCdzIGRyaXZlbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPkZyb250RW5kIEVuZ2luZWVyPC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL2ltYWdlcy9wcm9ncmFtbWluZy1hbmltYXRlLnN2ZycgYWx0PSdzdmcnIHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfSA+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtWzI5MHB4XVwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtzbGlkZXJ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICA8cCByZWY9e2ZpcnN0VGV4dH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgbS0wIHRleHQtcmVkLTUwMCB0ZXh0LVsyMDBweF0gZm9udC1tZWRpdW0gcHItWzUwcHhdXCI+TG92ZSBXaGF0IFlvdSBEbyAtPC9wPlxuICAgICAgICAgICAgPHAgcmVmPXtzZWNvbmRUZXh0fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LWZ1bGwgdG9wLTAgbS0wIHRleHQtcmVkLTUwMCB0ZXh0LVsyMDBweF0gZm9udC1tZWRpdW0gcHItWzUwcHhdXCI+TG92ZSBXaGF0IFlvdSBEbyAtPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIlwiIHdpZHRoPXs0MX0gaGVpZ2h0PXsxMDB9IHZpZXdCb3g9XCIwIDAgMjQ3IDM5MFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT0nZXZlbm9kZCcgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZU1pdGVybGltaXQ9ezEuNX0gPlxuICAgICAgICAgIDxwYXRoIHJlZj17d2hlZWx9IGlkPVwid2hlZWxzXCIgZD1cIk0xMjMuMzU5LDc5Ljc3NWwwLDcyLjg0M1wiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlV2lkdGg9ezIwfSAvPlxuICAgICAgICAgIDxwYXRoIGlkPVwibW91c2VcIiBkPVwiTTIzNi43MTcsMTIzLjM1OWMwLC02Mi41NjUgLTUwLjc5NCwtMTEzLjM1OSAtMTEzLjM1OCwtMTEzLjM1OWMtNjIuNTY1LDAgLTExMy4zNTksNTAuNzk0IC0xMTMuMzU5LDExMy4zNTlsMCwxNDMuMjM3YzAsNjIuNTY1IDUwLjc5NCwxMTMuMzU5IDExMy4zNTksMTEzLjM1OWM2Mi41NjQsMCAxMTMuMzU4LC01MC43OTQgMTEzLjM1OCwtMTEzLjM1OWwwLC0xNDMuMjM3WlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlV2lkdGg9ezIwfSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc2VjdGlvbiA+XG4gICAgPC9kaXYgPlxuICApXG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkltYWdlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwiTGFuZGluZyIsImZpcnN0VGV4dCIsInNlY29uZFRleHQiLCJzbGlkZXIiLCJ3aGVlbCIsInhQZXJjZW50IiwiZGlyZWN0aW9uIiwicmVnaXN0ZXJQbHVnaW4iLCJ0byIsImN1cnJlbnQiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2NydWIiLCJzdGFydCIsImVuZCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwib25VcGRhdGUiLCJlIiwieCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJ0cmFuc2xhdGVZIiwiZHVyYXRpb24iLCJzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicCIsInNwYW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInN2ZyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZU1pdGVybGltaXQiLCJwYXRoIiwiaWQiLCJkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});