(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"27Ep":function(e,t,a){var n=a("n+1U");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"2mlb":function(e,t,a){"use strict";var n=a("XUEk");a.n(n).a},"3GAV":function(e,t,a){"use strict";a.r(t);var n=a("m0qf"),i=a("aSBM"),l=a("L2JU");function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){s(e,t,a[t])})}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={components:{PageView:n.default,NewPage:i.default},created:function(){this.getPages()},methods:r({},Object(l.b)("pages",["getPages"]),{deletePage:function(e){this.pages.splice(this.pages.indexOf(e),1)},addPage:function(e){this.pages.push(e)},updatePage:function(e){var t=this.pages.findIndex(function(t){return t.id==e.id});this.pages[t]=e,this.$forceUpdate()}}),computed:r({},Object(l.d)({pages:function(e){return e.pages.pages}})),data:function(){return{}}},o=a("KHd+"),p=Object(o.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-expansion-panel",{staticClass:"shadow",attrs:{focusable:"",expand:""}},[a("new-page",{on:{addPage:e.addPage}})],1),e._v(" "),e.pages.length>0?[a("h1",[e._v("Существующие странцы")]),e._v(" "),a("v-expansion-panel",{staticClass:"shadow",attrs:{focusable:""}},e._l(e.pages,function(t){return a("page-view",{key:t.id,attrs:{page:t},on:{deleteNestedPage:e.deletePage,updatePage:e.updatePage}})}),1)]:e._e()],2)},[],!1,null,null,null);t.default=p.exports},AFEl:function(e,t,a){"use strict";var n=a("27Ep");a.n(n).a},XUEk:function(e,t,a){var n=a("cVnv");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},aSBM:function(e,t,a){"use strict";a.r(t);var n=a("L2JU"),i=a("s+lJ");function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r={name:"NewPage",props:{parent:{type:Object,default:function(){return{}}}},mounted:function(){},data:function(){return{page:{image:null}}},methods:{previewImage:function(e){var t=this,a=e.target;if(a.files&&a.files[0]){var n=new FileReader;n.onload=function(e){t.page.image=e.target.result},n.readAsDataURL(a.files[0])}},submit:function(){var e=this,t=new FormData;Object.keys(this.page).forEach(function(a){t.append(a,e.page[a])}),t.append("image",this.$refs.file.files[0]),axios.post("/api/auth/pages",t).then(function(t){e.alerts.push(t.data.message),e.$emit("addPage",t.data.page),e.page={}})}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){l(e,t,a[t])})}return e}({},Object(n.d)({alerts:function(e){return e.alerts.alerts}})),components:{VueEditor:i.VueEditor}},s=(a("AFEl"),a("KHd+")),c=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return"id"in e.page?e._e():a("v-expansion-panel-content",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h1",[e._v("Создать страницу")])]),e._v(" "),a("v-card",[a("v-card-text",[a("v-flex",[a("v-form",{attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{name:"title",label:"Название",type:"text",outline:"",required:""},model:{value:e.page.title,callback:function(t){e.$set(e.page,"title",t)},expression:"page.title"}}),e._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"image-card shadow"},[a("div",{staticClass:"view"},[a("input",{ref:"file",staticClass:"image",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.previewImage}}),e._v(" "),e.page.image?a("img",{attrs:{src:e.page.image}}):a("v-icon",{attrs:{alt:"avatar"}},[e._v("add_circle_outline")])],1)])]),e._v(" "),a("h1",[e._v("Контент")]),e._v(" "),a("vue-editor",{model:{value:e.page.content,callback:function(t){e.$set(e.page,"content",t)},expression:"page.content"}}),e._v(" "),a("v-text-field",{attrs:{name:"keywords",label:"Ключевые слова(SEO)",type:"text",outline:"",required:""},model:{value:e.page.keywords,callback:function(t){e.$set(e.page,"keywords",t)},expression:"page.keywords"}}),e._v(" "),a("v-text-field",{attrs:{name:"description",label:"Описание страницы(SEO)",type:"text",outline:"",required:""},model:{value:e.page.description,callback:function(t){e.$set(e.page,"description",t)},expression:"page.description"}}),e._v(" "),a("v-layout",[a("v-checkbox",{attrs:{label:"Выводить в меню","true-value":1,"false-value":0},model:{value:e.page.link,callback:function(t){e.$set(e.page,"link",t)},expression:"page.link"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Главная страница","true-value":1,"false-value":0},model:{value:e.page.index_page,callback:function(t){e.$set(e.page,"index_page",t)},expression:"page.index_page"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Выводить сайдбар на этой странице","true-value":1,"false-value":0},model:{value:e.page.include_side_bar,callback:function(t){e.$set(e.page,"include_side_bar",t)},expression:"page.include_side_bar"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Выводить в сайдабре","true-value":1,"false-value":0},model:{value:e.page.side_bar,callback:function(t){e.$set(e.page,"side_bar",t)},expression:"page.side_bar"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Вся высота","true-value":1,"false-value":0},model:{value:e.page.full_height,callback:function(t){e.$set(e.page,"full_height",t)},expression:"page.full_height"}})],1),e._v(" "),a("v-btn",{on:{click:e.submit}},[e._v("Создать")])],1)],1)],1)],1)],1)},[],!1,null,"376a0eae",null);t.default=c.exports},cVnv:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.quillWrapper[data-v-870cd43c] {\n  margin: 0 0 20px 0;\n}\n.margin[data-v-870cd43c] {\n  margin: 25px 0;\n}\n.image-card[data-v-870cd43c] {\n  position: relative;\n  height: 300px;\n  width: 300px;\n}\n.image-card .view img[data-v-870cd43c] {\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-height: 100%;\n}\ni.card-img-top[data-v-870cd43c] {\n  width: 100%;\n  min-height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.center[data-v-870cd43c] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-card .view[data-v-870cd43c] {\n  display: flex;\n}\n.image-card .view img[data-v-870cd43c] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.view input[data-v-870cd43c] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  z-index: 9999;\n}\n.image-card .view[data-v-870cd43c] {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n  align-items: center;\n  justify-content: center;\n}\n",""])},m0qf:function(e,t,a){"use strict";a.r(t);var n=a("L2JU"),i=a("s+lJ");function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r={name:"PageView",props:{page:{type:Object,default:function(){return{}}},parent:{type:Object,default:function(){return{}}}},mounted:function(){this.page.link&&(this.page.link=1),this.location=document.defaultView.location.origin},data:function(){return{location:null}},methods:{previewImage:function(e){var t=this,a=e.target;if(a.files&&a.files[0]){var n=new FileReader;n.onload=function(e){t.page.image=e.target.result},n.readAsDataURL(a.files[0])}},update:function(){var e=this,t=new FormData;t.append("_method","PATCH"),Object.keys(this.page).forEach(function(a){t.append(a,e.page[a])}),t.append("image",this.$refs.file.files[0]),axios.post("/api/auth/pages/"+this.page.id,t).then(function(t){e.alerts.push(t.data.message),e.$emit("updatePage",t.data.page),e.$forceUpdate()})},destroy:function(){var e=this;axios.delete("/api/auth/pages/"+this.page.id).then(function(t){e.parent?e.parent.children.splice(e.parent.children.indexOf(e.page),1):e.$emit("deleteNestedPage",e.page)})}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){l(e,t,a[t])})}return e}({},Object(n.d)({alerts:function(e){return e.alerts.alerts}})),components:{VueEditor:i.VueEditor,PageView:function(){return Promise.resolve().then(a.bind(null,"m0qf"))},NewPage:function(){return Promise.resolve().then(a.bind(null,"aSBM"))}}},s=(a("2mlb"),a("KHd+")),c=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel-content",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h1",[e._v(e._s(e.page.title))]),e._v(" "),"/"!=e.page.path?a("a",{key:e.page.path,attrs:{href:e.location+e.page.path}},[e._v(e._s(e.location+"/"+e.page.path))]):a("a",{key:e.page.path,attrs:{href:e.location+e.page.path}},[e._v(e._s(e.location+e.page.path))])]),e._v(" "),a("v-card",[a("v-card-text",[a("v-flex",[a("v-form",{attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{name:"title",label:"Название",type:"text",outline:"",required:""},model:{value:e.page.title,callback:function(t){e.$set(e.page,"title",t)},expression:"page.title"}}),e._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"image-card shadow"},[a("div",{staticClass:"view"},[a("input",{ref:"file",staticClass:"image",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.previewImage}}),e._v(" "),e.page.image?a("img",{attrs:{src:e.page.image}}):a("v-icon",{attrs:{alt:"avatar"}},[e._v("add_circle_outline")])],1)])]),e._v(" "),a("h5",[e._v("Контент")]),e._v(" "),a("vue-editor",{model:{value:e.page.content,callback:function(t){e.$set(e.page,"content",t)},expression:"page.content"}}),e._v(" "),a("v-text-field",{attrs:{name:"keywords",label:"Ключевые слова(SEO)",type:"text",outline:"",required:""},model:{value:e.page.keywords,callback:function(t){e.$set(e.page,"keywords",t)},expression:"page.keywords"}}),e._v(" "),a("v-text-field",{attrs:{name:"description",label:"Описание страницы(SEO)",type:"text",outline:"",required:""},model:{value:e.page.description,callback:function(t){e.$set(e.page,"description",t)},expression:"page.description"}}),e._v(" "),a("v-layout",[a("v-checkbox",{attrs:{label:"Выводить в меню","true-value":1,"false-value":null},model:{value:e.page.link,callback:function(t){e.$set(e.page,"link",t)},expression:"page.link"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Главная страница","true-value":1,"false-value":0},model:{value:e.page.index_page,callback:function(t){e.$set(e.page,"index_page",t)},expression:"page.index_page"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Выводить сайдбар на этой странице","true-value":1,"false-value":0},model:{value:e.page.include_side_bar,callback:function(t){e.$set(e.page,"include_side_bar",t)},expression:"page.include_side_bar"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Выводить в сайдабре","true-value":1,"false-value":0},model:{value:e.page.side_bar,callback:function(t){e.$set(e.page,"side_bar",t)},expression:"page.side_bar"}}),e._v(" "),a("v-checkbox",{attrs:{"true-value":1,"false-value":0,label:"Вся высота"},model:{value:e.page.full_height,callback:function(t){e.$set(e.page,"full_height",t)},expression:"page.full_height"}})],1),e._v(" "),a("v-layout",[a("v-flex",[a("h3",[e._v("Дочерние страницы")]),e._v(" "),a("v-expansion-panel",{staticClass:"shadow margin"},[a("new-page",{attrs:{parent:e.page,page:{parent:e.page.id}}})],1),e._v(" "),e.page.descendants.length>0?[a("v-expansion-panel",{staticClass:"shadow margin"},e._l(e.page.descendants,function(e){return a("page-view",{key:e.id,attrs:{page:e}})}),1)]:e._e()],2)],1),e._v(" "),a("v-layout",[a("v-btn",{on:{click:e.update}},[e._v("Обновить")]),e._v(" "),a("v-btn",{on:{click:e.destroy}},[e._v("Удалить")])],1)],1)],1)],1)],1)],1)},[],!1,null,"870cd43c",null);t.default=c.exports},"n+1U":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.quillWrapper[data-v-376a0eae] {\n  margin: 0 0 20px 0;\n}\n.margin[data-v-376a0eae] {\n  margin: 25px 0;\n}\n.image-card[data-v-376a0eae] {\n  position: relative;\n  height: 300px;\n  width: 300px;\n}\n.image-card .view img[data-v-376a0eae] {\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-height: 100%;\n}\ni.card-img-top[data-v-376a0eae] {\n  width: 100%;\n  min-height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.center[data-v-376a0eae] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-card .view[data-v-376a0eae] {\n  display: flex;\n}\n.image-card .view img[data-v-376a0eae] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.view input[data-v-376a0eae] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  z-index: 9999;\n}\n.image-card .view[data-v-376a0eae] {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n  align-items: center;\n  justify-content: center;\n}\n",""])}}]);