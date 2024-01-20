/*!
 *  build: shark-admin 
 *  shark-admin.com 
 *  https://gitee.com/elwin0204/shark-admin 
 *  time: 2024-1-21 00:17:28
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/utils/clipboard.js":
/*!********************************!*\
  !*** ./src/utils/clipboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleClipboard; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);


function clipboardSuccess() {
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$baseMessage('复制成功', 'success');
}
function clipboardError() {
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$baseMessage('复制失败', 'error');
}

/**
 * @author Elwin
 * @description 复制数据
 * @param text
 * @param event
 */
function handleClipboard(text, event) {
  const clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(event.target, {
    text: () => text
  });
  clipboard.on('success', () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}

/***/ })

}]);