/*!
 *  build: shark-admin
 *  shark-admin.com
 *  https://gitee.com/elwin0204/shark-admin
 *  time: 2024-1-19 22:31:01
 */
;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21],
  {
    /***/ './node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/webSocket/index.vue?vue&type=script&lang=js&':
      /*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/webSocket/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.push.js */ './node_modules/core-js/modules/es.array.push.js'
          )
        /* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__
          )

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

        /* harmony default export */ __webpack_exports__['default'] = {
          name: 'WebSocket',
          components: {},
          data() {
            return {
              url: 'ws://123.207.136.134:9010/ajaxchattest',
              webSocket: null,
              data: [],
              status: '',
              form: {
                message: null,
              },
              rules: {
                message: [
                  {
                    required: true,
                    message: '请输入消息',
                    trigger: 'blur',
                  },
                ],
              },
            }
          },
          created() {
            this.init()
          },
          destroyed() {
            this.webSocket.close()
          },
          methods: {
            submit() {
              this.$refs['form'].validate((valid) => {
                if (valid) {
                  this.send(this.form.message)
                } else {
                  return false
                }
              })
            },
            init() {
              const wsuri = this.url
              this.webSocket = new WebSocket(wsuri)
              this.webSocket.onmessage = this.onmessage
              this.webSocket.onopen = this.onopen
              this.webSocket.onerror = this.onerror
              this.webSocket.onclose = this.onclose
            },
            onopen() {
              this.status = '成功'
            },
            onerror() {
              this.status = '失败'
              this.initWebSocket()
            },
            onmessage({ data }) {
              //截掉测试webSocket地址广告
              this.data.push(data.substring(0, data.length - 66))
            },
            send(Data) {
              this.webSocket.send(Data)
            },
            onclose(e) {
              this.status = '断开'
            },
          },
        }

        /***/
      },

    /***/ './node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/webSocket/index.vue?vue&type=template&id=296160cb&':
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components/webSocket/index.vue?vue&type=template&id=296160cb& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'render',
          function () {
            return render
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'staticRenderFns',
          function () {
            return staticRenderFns
          }
        )
        var render = function () {
          var _vm = this
          var _h = _vm.$createElement
          var _c = _vm._self._c || _h
          return _c(
            'div',
            { staticClass: 'webSocket-container' },
            [
              _c(
                'el-row',
                { attrs: { gutter: 20 } },
                [
                  _c(
                    'el-col',
                    { attrs: { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 } },
                    [
                      _c(
                        'el-alert',
                        { attrs: { type: 'success', closable: false } },
                        [_vm._v(' webSocket连接' + _vm._s(_vm.status) + '！ ')]
                      ),
                      _c('br'),
                      _c(
                        'el-form',
                        {
                          ref: 'form',
                          attrs: {
                            model: _vm.form,
                            rules: _vm.rules,
                            'label-width': '100px',
                          },
                        },
                        [
                          _c(
                            'el-form-item',
                            { attrs: { label: '地址' } },
                            [
                              _c('el-input', {
                                attrs: { disabled: '' },
                                model: {
                                  value: _vm.url,
                                  callback: function ($$v) {
                                    _vm.url = $$v
                                  },
                                  expression: 'url',
                                },
                              }),
                            ],
                            1
                          ),
                          _c(
                            'el-form-item',
                            { attrs: { label: '消息', prop: 'message' } },
                            [
                              _c('el-input', {
                                model: {
                                  value: _vm.form.message,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, 'message', $$v)
                                  },
                                  expression: 'form.message',
                                },
                              }),
                            ],
                            1
                          ),
                          _c(
                            'el-form-item',
                            [
                              _c(
                                'el-button',
                                {
                                  attrs: { type: 'primary' },
                                  on: { click: _vm.submit },
                                },
                                [_vm._v('发送消息')]
                              ),
                            ],
                            1
                          ),
                          _c(
                            'el-form-item',
                            { attrs: { label: '返回信息汇总' } },
                            [_vm._v(' ' + _vm._s(_vm.data) + ' ')]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }
        var staticRenderFns = []
        render._withStripped = true

        /***/
      },

    /***/ './src/views/components/webSocket/index.vue':
      /*!**************************************************!*\
  !*** ./src/views/components/webSocket/index.vue ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _index_vue_vue_type_template_id_296160cb___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./index.vue?vue&type=template&id=296160cb& */ './src/views/components/webSocket/index.vue?vue&type=template&id=296160cb&'
          )
        /* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./index.vue?vue&type=script&lang=js& */ './src/views/components/webSocket/index.vue?vue&type=script&lang=js&'
          )
        /* empty/unused harmony star reexport */ /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ './node_modules/vue-loader/lib/runtime/componentNormalizer.js'
          )

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[
            'default'
          ]
        )(
          _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            'default'
          ],
          _index_vue_vue_type_template_id_296160cb___WEBPACK_IMPORTED_MODULE_0__[
            'render'
          ],
          _index_vue_vue_type_template_id_296160cb___WEBPACK_IMPORTED_MODULE_0__[
            'staticRenderFns'
          ],
          false,
          null,
          null,
          null
        )

        /* hot reload */
        if (false) {
          var api
        }
        component.options.__file = 'src/views/components/webSocket/index.vue'
        /* harmony default export */ __webpack_exports__['default'] =
          component.exports

        /***/
      },

    /***/ './src/views/components/webSocket/index.vue?vue&type=script&lang=js&':
      /*!***************************************************************************!*\
  !*** ./src/views/components/webSocket/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ './node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/webSocket/index.vue?vue&type=script&lang=js&'
          )
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          'default'
        ] =
          _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            'default'
          ]

        /***/
      },

    /***/ './src/views/components/webSocket/index.vue?vue&type=template&id=296160cb&':
      /*!*********************************************************************************!*\
  !*** ./src/views/components/webSocket/index.vue?vue&type=template&id=296160cb& ***!
  \*********************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_296160cb___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=296160cb& */ './node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components/webSocket/index.vue?vue&type=template&id=296160cb&'
          )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'render',
          function () {
            return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_296160cb___WEBPACK_IMPORTED_MODULE_0__[
              'render'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'staticRenderFns',
          function () {
            return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_296160cb___WEBPACK_IMPORTED_MODULE_0__[
              'staticRenderFns'
            ]
          }
        )

        /***/
      },
  },
])
