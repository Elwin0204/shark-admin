/*!
 *  build: shark-admin 
 *  shark-admin.com 
 *  https://gitee.com/elwin0204/shark-admin 
 *  time: 2024-1-21 00:17:28
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/authority/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/authority/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ "./src/config/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/router */ "./src/api/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Authority',
  data() {
    return {
      account: '',
      tableData: [],
      res: []
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
      username: 'user/username',
      permissions: 'user/permissions'
    })
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.account = this.username;
  },
  methods: {
    handleChangePermission() {
      localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_1__["tokenTableName"], `${this.account}-accessToken`);
      location.reload();
    },
    handleChangeAuthority() {
      localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_1__["tokenTableName"], `${this.account}-accessToken`);
      location.reload();
    },
    async fetchData() {
      const res = await Object(_api_router__WEBPACK_IMPORTED_MODULE_2__["getRouterList"])();
      this.tableData = res.data;
      this.res = res;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fdfd1f56-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/authority/index.vue?vue&type=template&id=a4c645b2&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/authority/index.vue?vue&type=template&id=a4c645b2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "authority-container" },
    [
      _c("el-card", [
        _c(
          "div",
          {
            staticClass: "clearfix",
            attrs: { slot: "header" },
            slot: "header",
          },
          [
            _c("span", [
              _vm._v(
                " intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案) "
              ),
            ]),
          ]
        ),
        _c(
          "div",
          [
            _c(
              "el-form",
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "切换账号" } },
                  [
                    _c(
                      "el-radio-group",
                      {
                        on: { input: _vm.handleChangeAuthority },
                        model: {
                          value: _vm.account,
                          callback: function ($$v) {
                            _vm.account = $$v
                          },
                          expression: "account",
                        },
                      },
                      [
                        _c("el-radio-button", { attrs: { label: "admin" } }),
                        _c("el-radio-button", { attrs: { label: "editor" } }),
                        _c("el-radio-button", { attrs: { label: "test" } }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _c("el-form-item", { attrs: { label: "当前权限" } }, [
                  _vm._v(" " + _vm._s(JSON.stringify(_vm.permissions)) + " "),
                ]),
              ],
              1
            ),
          ],
          1
        ),
      ]),
      _c("el-card", [
        _c(
          "div",
          {
            staticClass: "clearfix",
            attrs: { slot: "header" },
            slot: "header",
          },
          [_c("span", [_vm._v("按钮级权限演示")])]
        ),
        _c(
          "div",
          [
            _c(
              "el-button",
              {
                directives: [
                  {
                    name: "has",
                    rawName: "v-has",
                    value: ["admin"],
                    expression: "['admin']",
                  },
                ],
                attrs: { type: "primary" },
              },
              [_vm._v(' 我是拥有["admin"]权限的按钮 ')]
            ),
            _c(
              "el-button",
              {
                directives: [
                  {
                    name: "has",
                    rawName: "v-has",
                    value: ["editor"],
                    expression: "['editor']",
                  },
                ],
                attrs: { type: "primary" },
              },
              [_vm._v(' 我是拥有["editor"]权限的按钮 ')]
            ),
            _c(
              "el-button",
              {
                directives: [
                  {
                    name: "has",
                    rawName: "v-has",
                    value: ["test"],
                    expression: "['test']",
                  },
                ],
                attrs: { type: "primary" },
              },
              [_vm._v(' 我是拥有["test"]权限的按钮 ')]
            ),
          ],
          1
        ),
      ]),
      _c("el-card", [
        _c(
          "div",
          {
            staticClass: "clearfix",
            attrs: { slot: "header" },
            slot: "header",
          },
          [
            _c("span", [
              _vm._v(
                " all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案) "
              ),
            ]),
          ]
        ),
        _c("div", [
          _vm._v(
            " settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种, 由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解 "
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/components/authority/index.vue":
/*!**************************************************!*\
  !*** ./src/views/components/authority/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a4c645b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a4c645b2& */ "./src/views/components/authority/index.vue?vue&type=template&id=a4c645b2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/components/authority/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a4c645b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a4c645b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/components/authority/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/components/authority/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/components/authority/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/authority/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/components/authority/index.vue?vue&type=template&id=a4c645b2&":
/*!*********************************************************************************!*\
  !*** ./src/views/components/authority/index.vue?vue&type=template&id=a4c645b2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a4c645b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a4c645b2& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fdfd1f56-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/authority/index.vue?vue&type=template&id=a4c645b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a4c645b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a4c645b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);