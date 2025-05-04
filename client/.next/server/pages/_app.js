/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Layout({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        const role = localStorage.getItem(\"role\");\n        if (token && role) {\n            setUser({\n                role\n            });\n        } else if (![\n            \"/login\",\n            \"/signup\",\n            \"/\"\n        ].includes(router.pathname)) {\n            router.push(\"/login\");\n        }\n    }, [\n        router\n    ]);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"role\");\n        setUser(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Job Portal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Job Portal Application\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"dashboard-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"dashboard-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Job Portal\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dashboard-nav-links\",\n                                children: [\n                                    user.role === \"student\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/student/dashboard\",\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/student/profile\",\n                                                children: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true),\n                                    user.role === \"recruiter\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/recruiter/dashboard\",\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/recruiter/jobs\",\n                                                children: \"Jobs\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true),\n                                    user.role === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/admin/dashboard\",\n                                        children: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLogout,\n                                        className: \"btn btn-danger\",\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\components\\\\Layout.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDZjtBQUVkLFNBQVNJLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLE1BQU1DLE9BQU9GLGFBQWFDLE9BQU8sQ0FBQztRQUVsQyxJQUFJRixTQUFTRyxNQUFNO1lBQ2pCSixRQUFRO2dCQUFFSTtZQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO1lBQUM7WUFBVTtZQUFXO1NBQUksQ0FBQ0MsUUFBUSxDQUFDUCxPQUFPUSxRQUFRLEdBQUc7WUFDaEVSLE9BQU9TLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDVDtLQUFPO0lBRVgsTUFBTVUsZUFBZTtRQUNuQk4sYUFBYU8sVUFBVSxDQUFDO1FBQ3hCUCxhQUFhTyxVQUFVLENBQUM7UUFDeEJULFFBQVE7UUFDUkYsT0FBT1MsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNaLGtEQUFJQTs7a0NBQ0gsOERBQUNlO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7WUFHbENkLHNCQUNDLDhEQUFDZTtnQkFBT0MsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDRTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUNDLDRFQUFDRTs4Q0FBRzs7Ozs7Ozs7Ozs7MENBRU4sOERBQUNGO2dDQUFJRCxXQUFVOztvQ0FDWmhCLEtBQUtLLElBQUksS0FBSywyQkFDYjs7MERBQ0UsOERBQUNlO2dEQUFFQyxNQUFLOzBEQUFxQjs7Ozs7OzBEQUM3Qiw4REFBQ0Q7Z0RBQUVDLE1BQUs7MERBQW1COzs7Ozs7OztvQ0FHOUJyQixLQUFLSyxJQUFJLEtBQUssNkJBQ2I7OzBEQUNFLDhEQUFDZTtnREFBRUMsTUFBSzswREFBdUI7Ozs7OzswREFDL0IsOERBQUNEO2dEQUFFQyxNQUFLOzBEQUFrQjs7Ozs7Ozs7b0NBRzdCckIsS0FBS0ssSUFBSSxLQUFLLHlCQUNiLDhEQUFDZTt3Q0FBRUMsTUFBSztrREFBbUI7Ozs7OztrREFFN0IsOERBQUNDO3dDQUFPQyxTQUFTZDt3Q0FBY08sV0FBVTtrREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3BFLDhEQUFDUTtnQkFBS1IsV0FBVTswQkFDYmxCOzs7Ozs7OztBQUlUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXBvcnRhbC1jbGllbnQvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCByb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnKTtcclxuICAgIFxyXG4gICAgaWYgKHRva2VuICYmIHJvbGUpIHtcclxuICAgICAgc2V0VXNlcih7IHJvbGUgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFbJy9sb2dpbicsICcvc2lnbnVwJywgJy8nXS5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JvbGUnKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Kb2IgUG9ydGFsPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSm9iIFBvcnRhbCBBcHBsaWNhdGlvblwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgXHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImRhc2hib2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+Sm9iIFBvcnRhbDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtbmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5yb2xlID09PSAnc3R1ZGVudCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc3R1ZGVudC9kYXNoYm9hcmRcIj5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkZW50L3Byb2ZpbGVcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7dXNlci5yb2xlID09PSAncmVjcnVpdGVyJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWNydWl0ZXIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVjcnVpdGVyL2pvYnNcIj5Kb2JzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7dXNlci5yb2xlID09PSAnYWRtaW4nICYmIChcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIj5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICl9XHJcbiAgICAgIFxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvbGUiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwicHVzaCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm5hdiIsImgxIiwiYSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/dashboard.css */ \"./styles/dashboard.css\");\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n // Global CSS (this should already be here)\n // Add the import of your dashboard.css here\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mvy48\\\\OneDrive\\\\Documents\\\\new\\\\projects\\\\job-portal\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQixDQUFRLDJDQUEyQztBQUNqRCxDQUFNLDRDQUE0QztBQUN6QztBQUUxQyxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0wsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYi1wb3J0YWwtY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJzsgICAgICAgIC8vIEdsb2JhbCBDU1MgKHRoaXMgc2hvdWxkIGFscmVhZHkgYmUgaGVyZSlcclxuaW1wb3J0ICcuLi9zdHlsZXMvZGFzaGJvYXJkLmNzcyc7ICAgICAgLy8gQWRkIHRoZSBpbXBvcnQgb2YgeW91ciBkYXNoYm9hcmQuY3NzIGhlcmVcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/dashboard.css":
/*!******************************!*\
  !*** ./styles/dashboard.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();