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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Diego Apolin\xE1rio\\Desktop\\GitHub\\mini-projetos-reactjs\\ssr-next\\pages\\index.js",
    _this = undefined;





var Home = function Home(_ref) {
  var repositories = _ref.repositories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/blog",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this), repositories.map(function (repo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: repo.name
      }, repo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 31
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJlcG9zaXRvcmllcyIsIm1hcCIsInJlcG8iLCJuYW1lIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxZQUFILFFBQUdBLFlBQUg7QUFBQSxzQkFDWDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlHQSxZQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBQUMsSUFBSTtBQUFBLDBCQUFJO0FBQUEsa0JBQW1CQSxJQUFJLENBQUNDO0FBQXhCLFNBQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFyQixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURXO0FBQUEsQ0FBYjs7S0FBTUwsSTtBQVNOQSxJQUFJLENBQUNNLGVBQUwsZ1dBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0VDLEtBQUssQ0FBQyw4Q0FBRCxDQURQOztBQUFBO0FBQ2ZDLGtCQURlO0FBQUE7QUFBQSxpQkFFTUEsUUFBUSxDQUFDQyxJQUFULEVBRk47O0FBQUE7QUFFZlIsc0JBRmU7QUFBQSwyQ0FJZDtBQUFFQSx3QkFBWSxFQUFaQTtBQUFGLFdBSmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFPQSwrREFBZUQsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MmVjMzYyMTc0ZTc3N2FhMDhlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyByZXBvc2l0b3JpZXMgfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgPGE+QmxvZzwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIHtyZXBvc2l0b3JpZXMubWFwKHJlcG8gPT4gPGgxIGtleT17cmVwby5pZH0+e3JlcG8ubmFtZX08L2gxPil9XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL29yZ3Mvcm9ja2V0c2VhdC9yZXBvcycpXHJcbiAgY29uc3QgcmVwb3NpdG9yaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4geyByZXBvc2l0b3JpZXMgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9