(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9ZYK":function(e,t,n){"use strict";n.r(t);var s=n("L2JU");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={created:function(){var e=this;axios.get("/api/auth/users").then(function(t){e.users=t.data,e.loading=!1}).catch(function(e){})},data:function(){return{loading:!0,users:[],selectUser:null,showMenu:!1,x:0,y:0,actions:[{title:"Удалить"}],headers:[{text:"Имя",value:"name",align:"left"},{text:"email",value:"email",align:"left"},{text:"Админ",value:"admin",align:"left"},{text:"Создан",value:"created_at",align:"left"}]}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){i(e,t,n[t])})}return e}({},Object(s.d)({alerts:function(e){return e.alerts.alerts}})),methods:{deleteUser:function(){var e=this;axios.delete("/api/auth/users/"+this.selectUser.id).then(function(t){e.alerts.push(t.data),console.log(e.alerts),e.users.splice(e.users.indexOf(e.selectUser),1)}).catch(function(e){})},show:function(e,t){var n=this;e.preventDefault(),this.selectUser=t,this.showMenu=!1,this.x=e.clientX,this.y=e.clientY,this.$nextTick(function(){n.showMenu=!0})}}},o=n("KHd+"),a=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-data-table",{staticClass:"shadow",attrs:{headers:e.headers,items:e.users,loading:e.loading},scopedSlots:e._u([{key:"items",fn:function(t){return[n("tr",{on:{contextmenu:function(n){return e.show(n,t.item)}}},[n("td",[e._v(e._s(t.item.name))]),e._v(" "),n("td",[e._v(e._s(t.item.email))]),e._v(" "),n("td",[e._v(e._s(t.item.admin))]),e._v(" "),n("td",[e._v(e._s(t.item.created_at))])])]}}])},[n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"})],1),e._v(" "),n("v-menu",{attrs:{"position-x":e.x,"position-y":e.y,absolute:"","offset-y":""},model:{value:e.showMenu,callback:function(t){e.showMenu=t},expression:"showMenu"}},[n("v-list",e._l(e.actions,function(t,s){return n("v-list-tile",{key:s,on:{click:e.deleteUser}},[n("v-list-tile-title",[e._v(e._s(t.title))])],1)}),1)],1)],1)},[],!1,null,"8b001a6a",null);t.default=a.exports},"KHd+":function(e,t,n){"use strict";function s(e,t,n,s,i,r,o,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}n.d(t,"a",function(){return s})}}]);