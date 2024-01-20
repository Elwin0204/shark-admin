/*!
 *  build: shark-admin 
 *  shark-admin.com 
 *  https://gitee.com/elwin0204/shark-admin 
 *  time: 2024-1-21 00:17:28
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./src/api/logs.js":
/*!*************************!*\
  !*** ./src/api/logs.js ***!
  \*************************/
/*! exports provided: getOperateLogs, getLoginLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperateLogs", function() { return getOperateLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginLogs", function() { return getLoginLogs; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function getOperateLogs(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/logs/operateLogs',
    method: 'get',
    params
  });
}
function getLoginLogs(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    baseURL: 'http://10.67.216.189:9098',
    url: '/logs/loginLogs',
    method: 'get',
    params
  });
}

/***/ })

}]);