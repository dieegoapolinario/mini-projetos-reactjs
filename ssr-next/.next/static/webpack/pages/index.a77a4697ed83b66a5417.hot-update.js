self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Diego Apolin\xE1rio\\Desktop\\GitHub\\mini-projetos-reactjs\\ssr-next\\pages\\index.js",
    _this = undefined;




var Home = function Home(_ref) {
  var repositories = _ref.repositories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: repositories.map(function (repo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: repo.name
      }, repo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 34
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Home;
Home.getInitialProps = /*#__PURE__*/(0,C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  var response, repositories;
  return C_Users_Diego_Apolin_rio_Desktop_GitHub_mini_projetos_reactjs_ssr_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.github.com/orgs/rocketseat/repos');

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          repositories = _context.sent;
          return _context.abrupt("return", {
            repositories: repositories
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJlcG9zaXRvcmllcyIsIm1hcCIsInJlcG8iLCJuYW1lIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLHNCQUNYO0FBQUEsY0FBTUEsWUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUFDLElBQUk7QUFBQSwwQkFBSTtBQUFBLGtCQUFtQkEsSUFBSSxDQUFDQztBQUF4QixTQUFTRCxJQUFJLENBQUNFLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBckI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFc7QUFBQSxDQUFiOztLQUFNTCxJO0FBSU5BLElBQUksQ0FBQ00sZUFBTCxnV0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDRUMsS0FBSyxDQUFDLDhDQUFELENBRFA7O0FBQUE7QUFDZkMsa0JBRGU7QUFBQTtBQUFBLGlCQUVNQSxRQUFRLENBQUNDLElBQVQsRUFGTjs7QUFBQTtBQUVmUixzQkFGZTtBQUFBLDJDQUtkO0FBQUVBLHdCQUFZLEVBQVpBO0FBQUYsV0FMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQVFBLCtEQUFlRCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3N2E0Njk3ZWQ4M2I2NmE1NDE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IHJlcG9zaXRvcmllcyB9KSA9PiAoXHJcbiAgPGRpdj57cmVwb3NpdG9yaWVzLm1hcChyZXBvID0+IDxoMSBrZXk9e3JlcG8uaWR9PntyZXBvLm5hbWV9PC9oMT4pfTwvZGl2PlxyXG4pO1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3MnKVxyXG4gIGNvbnN0IHJlcG9zaXRvcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcblxyXG4gIHJldHVybiB7IHJlcG9zaXRvcmllcyB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=