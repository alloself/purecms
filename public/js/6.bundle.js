(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{"27Ep":function(e,a,t){var n=t("n+1U");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(e.exports=n.locals)},AFEl:function(e,a,t){"use strict";var n=t("27Ep");t.n(n).a},aSBM:function(e,a,t){"use strict";t.r(a);var n=t("L2JU"),i=t("s+lJ");function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var r={name:"NewPage",props:{parent:{type:Object,default:function(){return{}}}},mounted:function(){},data:function(){return{page:{image:null}}},methods:{previewImage:function(e){var a=this,t=e.target;if(t.files&&t.files[0]){var n=new FileReader;n.onload=function(e){a.page.image=e.target.result},n.readAsDataURL(t.files[0])}},submit:function(){var e=this,a=new FormData;Object.keys(this.page).forEach(function(t){a.append(t,e.page[t])}),a.append("image",this.$refs.file.files[0]),axios.post("/api/auth/pages",a).then(function(a){e.alerts.push(a.data.message),e.$emit("addPage",a.data.page),e.page={}})}},computed:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(a){l(e,a,t[a])})}return e}({},Object(n.d)({alerts:function(e){return e.alerts.alerts}})),components:{VueEditor:i.VueEditor}},s=(t("AFEl"),t("KHd+")),o=Object(s.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return"id"in e.page?e._e():t("v-expansion-panel-content",[t("div",{attrs:{slot:"header"},slot:"header"},[t("h1",[e._v("Создать страницу")])]),e._v(" "),t("v-card",[t("v-card-text",[t("v-flex",[t("v-form",{attrs:{"lazy-validation":""}},[t("v-text-field",{attrs:{name:"title",label:"Название",type:"text",outline:"",required:""},model:{value:e.page.title,callback:function(a){e.$set(e.page,"title",a)},expression:"page.title"}}),e._v(" "),t("div",{staticClass:"center"},[t("div",{staticClass:"image-card shadow"},[t("div",{staticClass:"view"},[t("input",{ref:"file",staticClass:"image",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.previewImage}}),e._v(" "),e.page.image?t("img",{attrs:{src:e.page.image}}):t("v-icon",{attrs:{alt:"avatar"}},[e._v("add_circle_outline")])],1)])]),e._v(" "),t("h1",[e._v("Контент")]),e._v(" "),t("vue-editor",{model:{value:e.page.content,callback:function(a){e.$set(e.page,"content",a)},expression:"page.content"}}),e._v(" "),t("v-text-field",{attrs:{name:"keywords",label:"Ключевые слова(SEO)",type:"text",outline:"",required:""},model:{value:e.page.keywords,callback:function(a){e.$set(e.page,"keywords",a)},expression:"page.keywords"}}),e._v(" "),t("v-text-field",{attrs:{name:"description",label:"Описание страницы(SEO)",type:"text",outline:"",required:""},model:{value:e.page.description,callback:function(a){e.$set(e.page,"description",a)},expression:"page.description"}}),e._v(" "),t("v-layout",[t("v-checkbox",{attrs:{label:"Выводить в меню","true-value":1,"false-value":0},model:{value:e.page.link,callback:function(a){e.$set(e.page,"link",a)},expression:"page.link"}}),e._v(" "),t("v-checkbox",{attrs:{label:"Главная страница","true-value":1,"false-value":0},model:{value:e.page.index_page,callback:function(a){e.$set(e.page,"index_page",a)},expression:"page.index_page"}}),e._v(" "),t("v-checkbox",{attrs:{label:"Выводить сайдбар на этой странице","true-value":1,"false-value":0},model:{value:e.page.include_side_bar,callback:function(a){e.$set(e.page,"include_side_bar",a)},expression:"page.include_side_bar"}}),e._v(" "),t("v-checkbox",{attrs:{label:"Выводить в сайдабре","true-value":1,"false-value":0},model:{value:e.page.side_bar,callback:function(a){e.$set(e.page,"side_bar",a)},expression:"page.side_bar"}}),e._v(" "),t("v-checkbox",{attrs:{label:"Вся высота","true-value":1,"false-value":0},model:{value:e.page.full_height,callback:function(a){e.$set(e.page,"full_height",a)},expression:"page.full_height"}})],1),e._v(" "),t("v-btn",{on:{click:e.submit}},[e._v("Создать")])],1)],1)],1)],1)],1)},[],!1,null,"376a0eae",null);a.default=o.exports},"n+1U":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,"\n.quillWrapper[data-v-376a0eae] {\n  margin: 0 0 20px 0;\n}\n.margin[data-v-376a0eae] {\n  margin: 25px 0;\n}\n.image-card[data-v-376a0eae] {\n  position: relative;\n  height: 300px;\n  width: 300px;\n}\n.image-card .view img[data-v-376a0eae] {\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-height: 100%;\n}\ni.card-img-top[data-v-376a0eae] {\n  width: 100%;\n  min-height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.center[data-v-376a0eae] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-card .view[data-v-376a0eae] {\n  display: flex;\n}\n.image-card .view img[data-v-376a0eae] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.view input[data-v-376a0eae] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  z-index: 9999;\n}\n.image-card .view[data-v-376a0eae] {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n  align-items: center;\n  justify-content: center;\n}\n",""])}}]);