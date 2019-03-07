(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/products/ProductView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: {
    pages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    product: {
      type: Object,
      default: function _default() {
        return {
          image: null
        };
      }
    }
  },
  mounted: function mounted() {
    this.product.params = JSON.parse(this.product.params);
  },
  data: function data() {
    return {
      newProp: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    alerts: function alerts(state) {
      return state.alerts.alerts;
    }
  })),
  methods: {
    deleteProp: function deleteProp(index) {
      this.product.params.splice(index, 1);
    },
    update: function update() {
      var _this = this;

      var data = new FormData();
      data.append("_method", "PATCH");
      Object.keys(this.product).forEach(function (key) {
        if (_this.product[key] !== null) {
          data.append(key, _this.product[key]);
        }
      });
      data.append("image", this.$refs.file.files[0]);
      data.append("params", JSON.stringify(this.product["params"]));
      axios.post("/api/auth/products/" + this.product.id, data).then(function (resp) {
        resp.data.params = JSON.parse(resp.data.params);

        _this.$emit("updateProduct", resp.data);
      });
    },
    destroy: function destroy() {
      var _this2 = this;

      axios.delete("/api/auth/products/" + this.product.id).then(function (resp) {
        _this2.$emit("deleteProduct", _this2.page);
      });
    },
    previewImage: function previewImage(event) {
      var _this3 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this3.product.image = e.target.result;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    addProp: function addProp() {
      this.product.params.push({
        name: this.newProp
      });
    },
    submit: function submit() {
      var _this4 = this;

      var data = new FormData();
      Object.keys(this.product).forEach(function (key) {
        data.append(key, _this4.product[key]);
      });
      data.append("params", JSON.stringify(this.product["params"]));
      data.append("image", this.$refs.file.files[0]);
      axios.post("/api/auth/products", data).then(function (resp) {
        _this4.alerts.push(resp.data.message);

        _this4.$emit("addProduct", resp.data.page);

        _this4.page = {};
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card[data-v-53aa34da] {\n  border: 1px solid #d7d5d7;\n  margin: 5px;\n}\n.center[data-v-53aa34da] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-card[data-v-53aa34da] {\n  position: relative;\n  height: 150px;\n  margin-bottom: 20px;\n  width: 150px;\n}\n.image-card .view[data-v-53aa34da] {\n  display: flex;\n}\n.image-card .view img[data-v-53aa34da] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.view input[data-v-53aa34da] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  z-index: 9999;\n}\n.image-card .view[data-v-53aa34da] {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=template&id=53aa34da&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/products/ProductView.vue?vue&type=template&id=53aa34da&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { xs12: "", sm12: "", md4: "" } },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.product.title))])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                [
                  _c("div", { staticClass: "center" }, [
                    _c("div", { staticClass: "image-card shadow" }, [
                      _c(
                        "div",
                        { staticClass: "view" },
                        [
                          _c("input", {
                            ref: "file",
                            staticClass: "image",
                            attrs: {
                              type: "file",
                              name: "image",
                              accept: "image/*"
                            },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          !_vm.product.image
                            ? _c("v-icon", { attrs: { alt: "avatar" } }, [
                                _vm._v("add_circle_outline")
                              ])
                            : _c("img", { attrs: { src: _vm.product.image } })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      name: "title",
                      label: "Название",
                      type: "text",
                      outline: "",
                      required: ""
                    },
                    model: {
                      value: _vm.product.title,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "title", $$v)
                      },
                      expression: "product.title"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      name: "price",
                      label: "Цена",
                      type: "number",
                      outline: "",
                      required: ""
                    },
                    model: {
                      value: _vm.product.price,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "price", $$v)
                      },
                      expression: "product.price"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      name: "description",
                      label: "Описание",
                      type: "text",
                      outline: "",
                      required: ""
                    },
                    model: {
                      value: _vm.product.description,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "description", $$v)
                      },
                      expression: "product.description"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.pages,
                      "item-value": "id",
                      "item-text": "title",
                      outline: "",
                      label: "Выводить на странице"
                    },
                    model: {
                      value: _vm.product.page_id,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "page_id", $$v)
                      },
                      expression: "product.page_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      label: "Страница",
                      "true-value": 1,
                      "false-value": 0
                    },
                    model: {
                      value: _vm.product.pageble,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "pageble", $$v)
                      },
                      expression: "product.pageble"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      outline: "",
                      label: "Введите новый параметр",
                      "append-icon": "add"
                    },
                    on: { "click:append": _vm.addProp },
                    model: {
                      value: _vm.newProp,
                      callback: function($$v) {
                        _vm.newProp = $$v
                      },
                      expression: "newProp"
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.product.params, function(prop, index) {
                    return [
                      _c(
                        "v-layout",
                        { key: index },
                        [
                          _c(
                            "v-flex",
                            { attrs: { row: "" } },
                            [
                              _c("h4", [
                                _vm._v(
                                  "Название параметра: " + _vm._s(prop.name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Значение параметра",
                                  type: "text",
                                  outline: "",
                                  "append-icon": "delete"
                                },
                                on: {
                                  "click:append": function($event) {
                                    return _vm.deleteProp(index)
                                  }
                                },
                                model: {
                                  value: prop.value,
                                  callback: function($$v) {
                                    _vm.$set(prop, "value", $$v)
                                  },
                                  expression: "prop.value"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.update } }, [_vm._v("Обновить")]),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.destroy } }, [_vm._v("Удалить")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/components/products/ProductView.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/components/products/ProductView.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductView_vue_vue_type_template_id_53aa34da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductView.vue?vue&type=template&id=53aa34da&scoped=true& */ "./resources/js/views/components/products/ProductView.vue?vue&type=template&id=53aa34da&scoped=true&");
/* harmony import */ var _ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductView.vue?vue&type=script&lang=js& */ "./resources/js/views/components/products/ProductView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css& */ "./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductView_vue_vue_type_template_id_53aa34da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductView_vue_vue_type_template_id_53aa34da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53aa34da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/products/ProductView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/products/ProductView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/products/ProductView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=style&index=0&id=53aa34da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_style_index_0_id_53aa34da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/components/products/ProductView.vue?vue&type=template&id=53aa34da&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/components/products/ProductView.vue?vue&type=template&id=53aa34da&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_template_id_53aa34da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductView.vue?vue&type=template&id=53aa34da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/products/ProductView.vue?vue&type=template&id=53aa34da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_template_id_53aa34da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_template_id_53aa34da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);