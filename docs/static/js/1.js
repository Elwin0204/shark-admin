/*!
 *  build: shark-admin 
 *  shark-admin.com 
 *  https://gitee.com/elwin0204/shark-admin 
 *  time: 2024-1-21 00:17:28
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

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
  name: 'Page404',
  data() {
    return {
      jumpTime: 5,
      oops: '抱歉!',
      headline: '当前页面不存在...',
      info: '请检查您输入的网址是否正确，或点击下面的按钮返回首页。',
      btn: '返回首页',
      timer: 0
    };
  },
  mounted() {
    this.timeChange();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    timeChange() {
      this.timer = setInterval(() => {
        if (this.jumpTime) {
          this.jumpTime--;
        } else {
          this.$router.push({
            path: '/'
          });
          this.$store.dispatch('tabsBar/delOthersRoutes', {
            path: '/'
          });
          clearInterval(this.timer);
        }
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fdfd1f56-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=template&id=6b3aeb0e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=template&id=6b3aeb0e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "error-container" }, [
    _c(
      "div",
      { staticClass: "error-content" },
      [
        _c(
          "el-row",
          { attrs: { gutter: 20 } },
          [
            _c(
              "el-col",
              { attrs: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
              [
                _c("div", { staticClass: "pic-error" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/page_404.jpg */ "./src/assets/images/page_404.jpg"),
                      alt: "404",
                    },
                  }),
                ]),
              ]
            ),
            _c(
              "el-col",
              { attrs: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
              [
                _c("div", { staticClass: "bullshit" }, [
                  _c("div", { staticClass: "bullshit-oops" }, [
                    _vm._v(_vm._s(_vm.oops)),
                  ]),
                  _c("div", { staticClass: "bullshit-headline" }, [
                    _vm._v(_vm._s(_vm.headline)),
                  ]),
                  _c("div", { staticClass: "bullshit-info" }, [
                    _vm._v(_vm._s(_vm.info)),
                  ]),
                  _c(
                    "a",
                    {
                      staticClass: "bullshit-return-home",
                      attrs: { href: "#/index" },
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(_vm.jumpTime) +
                          "s " +
                          _vm._s(_vm.btn) +
                          " "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * @author Elwin\n * @description 全局主题变量配置\n */\n/* stylelint-disable */\n[data-v-6b3aeb0e]:export {\n  menu-color: #575d6c;\n  menu-color-active: #96ADFA;\n  menu-background: #fff;\n}\n.error-container[data-v-6b3aeb0e] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.error-container .error-content .pic-error[data-v-6b3aeb0e] {\n  position: relative;\n  float: left;\n  width: 120%;\n  overflow: hidden;\n}\n.error-container .error-content .pic-error img[data-v-6b3aeb0e] {\n  width: 300px;\n}\n.error-container .error-content .pic-error-parent[data-v-6b3aeb0e] {\n  width: 100%;\n}\n.error-container .error-content .pic-error-child[data-v-6b3aeb0e] {\n  position: absolute;\n}\n.error-container .error-content .pic-error-child.left[data-v-6b3aeb0e] {\n  top: 17px;\n  left: 220px;\n  width: 80px;\n  opacity: 0;\n  animation-name: cloudLeft-data-v-6b3aeb0e;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .pic-error-child.mid[data-v-6b3aeb0e] {\n  top: 10px;\n  left: 420px;\n  width: 46px;\n  opacity: 0;\n  animation-name: cloudMid-data-v-6b3aeb0e;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-delay: 1.2s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .pic-error-child.right[data-v-6b3aeb0e] {\n  top: 100px;\n  left: 500px;\n  width: 62px;\n  opacity: 0;\n  animation-name: cloudRight-data-v-6b3aeb0e;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n}\n@keyframes cloudLeft-data-v-6b3aeb0e {\n0% {\n    top: 17px;\n    left: 220px;\n    opacity: 0;\n}\n20% {\n    top: 33px;\n    left: 188px;\n    opacity: 1;\n}\n80% {\n    top: 81px;\n    left: 92px;\n    opacity: 1;\n}\n100% {\n    top: 97px;\n    left: 60px;\n    opacity: 0;\n}\n}\n@keyframes cloudMid-data-v-6b3aeb0e {\n0% {\n    top: 10px;\n    left: 420px;\n    opacity: 0;\n}\n20% {\n    top: 40px;\n    left: 360px;\n    opacity: 1;\n}\n70% {\n    top: 130px;\n    left: 180px;\n    opacity: 1;\n}\n100% {\n    top: 160px;\n    left: 120px;\n    opacity: 0;\n}\n}\n@keyframes cloudRight-data-v-6b3aeb0e {\n0% {\n    top: 100px;\n    left: 500px;\n    opacity: 0;\n}\n20% {\n    top: 120px;\n    left: 460px;\n    opacity: 1;\n}\n80% {\n    top: 180px;\n    left: 340px;\n    opacity: 1;\n}\n100% {\n    top: 200px;\n    left: 300px;\n    opacity: 0;\n}\n}\n.error-container .error-content .bullshit[data-v-6b3aeb0e] {\n  position: relative;\n  float: left;\n  width: 300px;\n  padding: 30px 0;\n  overflow: hidden;\n}\n.error-container .error-content .bullshit-oops[data-v-6b3aeb0e] {\n  margin-bottom: 20px;\n  font-size: 32px;\n  font-weight: bold;\n  line-height: 40px;\n  color: #5E7CE0;\n  opacity: 0;\n  animation-name: slideUp-data-v-6b3aeb0e;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .bullshit-headline[data-v-6b3aeb0e] {\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 24px;\n  color: #222;\n  opacity: 0;\n  animation-name: slideUp-data-v-6b3aeb0e;\n  animation-duration: 0.5s;\n  animation-delay: 0.1s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .bullshit-info[data-v-6b3aeb0e] {\n  margin-bottom: 30px;\n  font-size: 13px;\n  line-height: 21px;\n  color: rgba(0, 0, 0, 0.65);\n  opacity: 0;\n  animation-name: slideUp-data-v-6b3aeb0e;\n  animation-duration: 0.5s;\n  animation-delay: 0.2s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .bullshit-return-home[data-v-6b3aeb0e] {\n  display: block;\n  float: left;\n  width: 110px;\n  height: 36px;\n  font-size: 14px;\n  line-height: 36px;\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n  background: #5E7CE0;\n  border-radius: 100px;\n  opacity: 0;\n  animation-name: slideUp-data-v-6b3aeb0e;\n  animation-duration: 0.5s;\n  animation-delay: 0.3s;\n  animation-fill-mode: forwards;\n}\n@keyframes slideUp-data-v-6b3aeb0e {\n0% {\n    opacity: 0;\n    transform: translateY(60px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}", "",{"version":3,"sources":["D:/projects/vueProject/shark-admin/src/views/404.vue","D:/projects/vueProject/shark-admin/src/views/D:/projects/vueProject/shark-admin/src/styles/variables.scss","D:/projects/vueProject/shark-admin/src/views/D:/projects/vueProject/shark-admin/src/views/404.vue"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;EAAA;AAIA,sBAAA;AAsFA;EAEE,mBA/EgB;EAiFhB,0BA7EuB;EA+EvB,qBArFqB;ADDvB;AEqDA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AFlDF;AEqDI;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;AFnDN;AEqDM;EACE,YAAA;AFnDR;AEsDM;EACE,WAAA;AFpDR;AEuDM;EACE,kBAAA;AFrDR;AEuDQ;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,yCAAA;EACA,sBAAA;EACA,iCAAA;EACA,mBAAA;EACA,6BAAA;AFrDV;AEwDQ;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,wCAAA;EACA,sBAAA;EACA,iCAAA;EACA,qBAAA;EACA,6BAAA;AFtDV;AEyDQ;EACE,UAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,0CAAA;EACA,sBAAA;EACA,iCAAA;EACA,mBAAA;EACA,6BAAA;AFvDV;AE0DQ;AACE;IACE,SAAA;IACA,WAAA;IACA,UAAA;AFxDV;AE2DQ;IACE,SAAA;IACA,WAAA;IACA,UAAA;AFzDV;AE4DQ;IACE,SAAA;IACA,UAAA;IACA,UAAA;AF1DV;AE6DQ;IACE,SAAA;IACA,UAAA;IACA,UAAA;AF3DV;AACF;AE8DQ;AACE;IACE,SAAA;IACA,WAAA;IACA,UAAA;AF5DV;AE+DQ;IACE,SAAA;IACA,WAAA;IACA,UAAA;AF7DV;AEgEQ;IACE,UAAA;IACA,WAAA;IACA,UAAA;AF9DV;AEiEQ;IACE,UAAA;IACA,WAAA;IACA,UAAA;AF/DV;AACF;AEkEQ;AACE;IACE,UAAA;IACA,WAAA;IACA,UAAA;AFhEV;AEmEQ;IACE,UAAA;IACA,WAAA;IACA,UAAA;AFjEV;AEoEQ;IACE,UAAA;IACA,WAAA;IACA,UAAA;AFlEV;AEqEQ;IACE,UAAA;IACA,WAAA;IACA,UAAA;AFnEV;AACF;AEwEI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AFtEN;AEwEM;EACE,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cDhNa;ECiNb,UAAA;EACA,uCAAA;EACA,wBAAA;EACA,6BAAA;AFtER;AEyEM;EACE,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,WAAA;EACA,UAAA;EACA,uCAAA;EACA,wBAAA;EACA,qBAAA;EACA,6BAAA;AFvER;AE0EM;EACE,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,0BDvMU;ECwMV,UAAA;EACA,uCAAA;EACA,wBAAA;EACA,qBAAA;EACA,6BAAA;AFxER;AE2EM;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBD1Pa;EC2Pb,oBAAA;EACA,UAAA;EACA,uCAAA;EACA,wBAAA;EACA,qBAAA;EACA,6BAAA;AFzER;AE4EM;AACE;IACE,UAAA;IACA,2BAAA;AF1ER;AE6EM;IACE,UAAA;IACA,wBAAA;AF3ER;AACF","file":"404.vue","sourcesContent":["@charset \"UTF-8\";\n/**\n * @author Elwin\n * @description 全局主题变量配置\n */\n/* stylelint-disable */\n:export {\n  menu-color: #575d6c;\n  menu-color-active: #96ADFA;\n  menu-background: #fff;\n}\n\n.error-container {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.error-container .error-content .pic-error {\n  position: relative;\n  float: left;\n  width: 120%;\n  overflow: hidden;\n}\n.error-container .error-content .pic-error img {\n  width: 300px;\n}\n.error-container .error-content .pic-error-parent {\n  width: 100%;\n}\n.error-container .error-content .pic-error-child {\n  position: absolute;\n}\n.error-container .error-content .pic-error-child.left {\n  top: 17px;\n  left: 220px;\n  width: 80px;\n  opacity: 0;\n  animation-name: cloudLeft;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .pic-error-child.mid {\n  top: 10px;\n  left: 420px;\n  width: 46px;\n  opacity: 0;\n  animation-name: cloudMid;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-delay: 1.2s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .pic-error-child.right {\n  top: 100px;\n  left: 500px;\n  width: 62px;\n  opacity: 0;\n  animation-name: cloudRight;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n}\n@keyframes cloudLeft {\n  0% {\n    top: 17px;\n    left: 220px;\n    opacity: 0;\n  }\n  20% {\n    top: 33px;\n    left: 188px;\n    opacity: 1;\n  }\n  80% {\n    top: 81px;\n    left: 92px;\n    opacity: 1;\n  }\n  100% {\n    top: 97px;\n    left: 60px;\n    opacity: 0;\n  }\n}\n@keyframes cloudMid {\n  0% {\n    top: 10px;\n    left: 420px;\n    opacity: 0;\n  }\n  20% {\n    top: 40px;\n    left: 360px;\n    opacity: 1;\n  }\n  70% {\n    top: 130px;\n    left: 180px;\n    opacity: 1;\n  }\n  100% {\n    top: 160px;\n    left: 120px;\n    opacity: 0;\n  }\n}\n@keyframes cloudRight {\n  0% {\n    top: 100px;\n    left: 500px;\n    opacity: 0;\n  }\n  20% {\n    top: 120px;\n    left: 460px;\n    opacity: 1;\n  }\n  80% {\n    top: 180px;\n    left: 340px;\n    opacity: 1;\n  }\n  100% {\n    top: 200px;\n    left: 300px;\n    opacity: 0;\n  }\n}\n.error-container .error-content .bullshit {\n  position: relative;\n  float: left;\n  width: 300px;\n  padding: 30px 0;\n  overflow: hidden;\n}\n.error-container .error-content .bullshit-oops {\n  margin-bottom: 20px;\n  font-size: 32px;\n  font-weight: bold;\n  line-height: 40px;\n  color: #5E7CE0;\n  opacity: 0;\n  animation-name: slideUp;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .bullshit-headline {\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 24px;\n  color: #222;\n  opacity: 0;\n  animation-name: slideUp;\n  animation-duration: 0.5s;\n  animation-delay: 0.1s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .bullshit-info {\n  margin-bottom: 30px;\n  font-size: 13px;\n  line-height: 21px;\n  color: rgba(0, 0, 0, 0.65);\n  opacity: 0;\n  animation-name: slideUp;\n  animation-duration: 0.5s;\n  animation-delay: 0.2s;\n  animation-fill-mode: forwards;\n}\n.error-container .error-content .bullshit-return-home {\n  display: block;\n  float: left;\n  width: 110px;\n  height: 36px;\n  font-size: 14px;\n  line-height: 36px;\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n  background: #5E7CE0;\n  border-radius: 100px;\n  opacity: 0;\n  animation-name: slideUp;\n  animation-duration: 0.5s;\n  animation-delay: 0.3s;\n  animation-fill-mode: forwards;\n}\n@keyframes slideUp {\n  0% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}","/**\n * @author Elwin\n * @description 全局主题变量配置\n */\n/* stylelint-disable */\n@charset \"utf-8\";\n//框架默认主题色\n$base-color-default: #5E7CE0 !default;\n//默认层级\n$base-z-index: 999 !default;\n//横向布局纵向布局时菜单背景色\n$base-menu-background: #fff !default;\n//菜单文字颜色\n$base-menu-color: #575d6c !default;\n// 菜单hover文字颜色\n$base-menu-color-hover: #96ADFA !default;\n//菜单选中文字颜色\n$base-menu-color-active: #96ADFA !default;\n//菜单悬浮背景色\n$base-menu-background-hover: #d5d5db !default;\n//菜单选中背景色\n$base-menu-background-active: #d5d5db !default;\n// 菜单选中或者hover左边框颜色\n$base-menu-border-left-active: #5E7CE0 !default;\n//标题颜色\n$base-title-color: #575d6c !default;\n//字体大小配置\n$base-font-size-small: 12px !default;\n$base-font-size-default: 14px !default;\n$base-font-size-big: 16px !default;\n$base-font-size-bigger: 18px !default;\n$base-font-size-max: 22px !default;\n$base-font-color: #606266 !default;\n$base-color-blue: $base-color-default !default;\n$base-color-green: #41b882 !default;\n$base-color-white: #fff !default;\n$base-color-black: #000 !default;\n$base-color-yellow: #ffa91b !default;\n$base-color-orange: #ff6700 !default;\n$base-color-red: #f34d37 !default;\n$base-color-gray: rgba(0, 0, 0, 0.65) !default;\n$base-main-width: 1279px !default;\n$base-border-radius: 4px !default;\n$base-border-color: #dcdfe6 !default;\n//输入框高度\n$base-input-height: 32px !default;\n//默认paddiing\n$base-padding: 20px !default;\n//默认阴影\n$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08) !default;\n//横向布局时top-bar、logo、一级菜单的高度\n$base-top-bar-height: 65px !default;\n//纵向布局时logo的高度\n$base-logo-height: 75px !default;\n//顶部nav-bar的高度\n$base-nav-bar-height: 60px !default;\n//顶部多标签页tabs-bar的高度\n$base-tabs-bar-height: 55px !default;\n//顶部多标签页tabs-bar中每一个item的高度\n$base-tag-item-height: 34px !default;\n//菜单li标签的高度\n$base-menu-item-height: 50px !default;\n//app-main的高度\n$base-app-main-height: calc(\n  100vh - #{$base-nav-bar-height} - #{$base-tabs-bar-height} - #{$base-padding} -\n    #{$base-padding} - 55px - 55px\n);\n// app-main-container高度\n$base-app-main-container-height: calc(\n  100vh - #{$base-nav-bar-height} - #{$base-tabs-bar-height}\n);\n//纵向布局时左侧导航未折叠时的宽度\n$base-left-menu-width: 256px !default;\n//纵向布局时左侧导航未折叠时右侧内容的宽度\n$base-right-content-width: calc(100% - #{$base-left-menu-width}) !default;\n//纵向布局时左侧导航已折叠时的宽度\n$base-left-menu-width-min: 65px !default;\n//纵向布局时左侧导航已折叠时右侧内容的宽度\n$base-right-content-width-min: calc(100% - #{$base-left-menu-width-min}) !default;\n//默认动画\n$base-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,\n  background 0s, color 0s, font-size 0s;\n//默认动画长\n$base-transition-time: 0.3s !default;\n\n// 按钮颜色\n$base-btn-color: #5E7CE0 !default;\n// 按钮边框颜色\n$base-btn--border-color: #5E7CE0 !default;\n\n:export {\n  //菜单文字颜色变量导出\n  menu-color: $base-menu-color;\n  //菜单选中文字颜色变量导出\n  menu-color-active: $base-menu-color-active;\n  //菜单背景色变量导出\n  menu-background: $base-menu-background;\n}\n","@import \"~@/styles/variables.scss\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.error-container {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  .error-content {\n    .pic-error {\n      position: relative;\n      float: left;\n      width: 120%;\n      overflow: hidden;\n\n      img {\n        width: 300px;\n      }\n\n      &-parent {\n        width: 100%;\n      }\n\n      &-child {\n        position: absolute;\n\n        &.left {\n          top: 17px;\n          left: 220px;\n          width: 80px;\n          opacity: 0;\n          animation-name: cloudLeft;\n          animation-duration: 2s;\n          animation-timing-function: linear;\n          animation-delay: 1s;\n          animation-fill-mode: forwards;\n        }\n\n        &.mid {\n          top: 10px;\n          left: 420px;\n          width: 46px;\n          opacity: 0;\n          animation-name: cloudMid;\n          animation-duration: 2s;\n          animation-timing-function: linear;\n          animation-delay: 1.2s;\n          animation-fill-mode: forwards;\n        }\n\n        &.right {\n          top: 100px;\n          left: 500px;\n          width: 62px;\n          opacity: 0;\n          animation-name: cloudRight;\n          animation-duration: 2s;\n          animation-timing-function: linear;\n          animation-delay: 1s;\n          animation-fill-mode: forwards;\n        }\n\n        @keyframes cloudLeft {\n          0% {\n            top: 17px;\n            left: 220px;\n            opacity: 0;\n          }\n\n          20% {\n            top: 33px;\n            left: 188px;\n            opacity: 1;\n          }\n\n          80% {\n            top: 81px;\n            left: 92px;\n            opacity: 1;\n          }\n\n          100% {\n            top: 97px;\n            left: 60px;\n            opacity: 0;\n          }\n        }\n\n        @keyframes cloudMid {\n          0% {\n            top: 10px;\n            left: 420px;\n            opacity: 0;\n          }\n\n          20% {\n            top: 40px;\n            left: 360px;\n            opacity: 1;\n          }\n\n          70% {\n            top: 130px;\n            left: 180px;\n            opacity: 1;\n          }\n\n          100% {\n            top: 160px;\n            left: 120px;\n            opacity: 0;\n          }\n        }\n\n        @keyframes cloudRight {\n          0% {\n            top: 100px;\n            left: 500px;\n            opacity: 0;\n          }\n\n          20% {\n            top: 120px;\n            left: 460px;\n            opacity: 1;\n          }\n\n          80% {\n            top: 180px;\n            left: 340px;\n            opacity: 1;\n          }\n\n          100% {\n            top: 200px;\n            left: 300px;\n            opacity: 0;\n          }\n        }\n      }\n    }\n\n    .bullshit {\n      position: relative;\n      float: left;\n      width: 300px;\n      padding: 30px 0;\n      overflow: hidden;\n\n      &-oops {\n        margin-bottom: 20px;\n        font-size: 32px;\n        font-weight: bold;\n        line-height: 40px;\n        color: $base-color-blue;\n        opacity: 0;\n        animation-name: slideUp;\n        animation-duration: 0.5s;\n        animation-fill-mode: forwards;\n      }\n\n      &-headline {\n        margin-bottom: 10px;\n        font-size: 20px;\n        font-weight: bold;\n        line-height: 24px;\n        color: #222;\n        opacity: 0;\n        animation-name: slideUp;\n        animation-duration: 0.5s;\n        animation-delay: 0.1s;\n        animation-fill-mode: forwards;\n      }\n\n      &-info {\n        margin-bottom: 30px;\n        font-size: 13px;\n        line-height: 21px;\n        color: $base-color-gray;\n        opacity: 0;\n        animation-name: slideUp;\n        animation-duration: 0.5s;\n        animation-delay: 0.2s;\n        animation-fill-mode: forwards;\n      }\n\n      &-return-home {\n        display: block;\n        float: left;\n        width: 110px;\n        height: 36px;\n        font-size: 14px;\n        line-height: 36px;\n        color: #fff;\n        text-align: center;\n        cursor: pointer;\n        background: $base-color-blue;\n        border-radius: 100px;\n        opacity: 0;\n        animation-name: slideUp;\n        animation-duration: 0.5s;\n        animation-delay: 0.3s;\n        animation-fill-mode: forwards;\n      }\n\n      @keyframes slideUp {\n        0% {\n          opacity: 0;\n          transform: translateY(60px);\n        }\n\n        100% {\n          opacity: 1;\n          transform: translateY(0);\n        }\n      }\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1fe16bc6", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/page_404.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/page_404.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/page_404.b73b0972.jpg";

/***/ }),

/***/ "./src/views/404.vue":
/*!***************************!*\
  !*** ./src/views/404.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_template_id_6b3aeb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=6b3aeb0e&scoped=true& */ "./src/views/404.vue?vue&type=template&id=6b3aeb0e&scoped=true&");
/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ "./src/views/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _404_vue_vue_type_style_index_0_id_6b3aeb0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true& */ "./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _404_vue_vue_type_template_id_6b3aeb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _404_vue_vue_type_template_id_6b3aeb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b3aeb0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/404.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/views/404.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_6b3aeb0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=style&index=0&id=6b3aeb0e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_6b3aeb0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_6b3aeb0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_6b3aeb0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_6b3aeb0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/404.vue?vue&type=template&id=6b3aeb0e&scoped=true&":
/*!**********************************************************************!*\
  !*** ./src/views/404.vue?vue&type=template&id=6b3aeb0e&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_6b3aeb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fdfd1f56-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=6b3aeb0e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fdfd1f56-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404.vue?vue&type=template&id=6b3aeb0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_6b3aeb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fdfd1f56_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_6b3aeb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);