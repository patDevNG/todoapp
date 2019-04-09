webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.js");
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Todo */ "./pages/components/Todo.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);








var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead",
    style: paragraph
  }, "Add your chores, tick if its completed and delete if you are finished"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Todo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    props: props
  })))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("http://localhost:3500/todo");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            todos: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
var paragraph = {
  fontSize: "16px",
  padding: "8px",
  textAlign: 'center'
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2202d4a7f6065f7abd23.hot-update.js.map