(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"E/yQ":function(t,e,n){"use strict";n.r(e);var r=n("L2JU");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={methods:{genSitemap:function(){var t=this;axios.get("/api/auth/sitemap").then(function(e){t.alerts.push({message:e.data})}).catch(function(t){})}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},Object(r.d)({alerts:function(t){return t.alerts.alerts}}))},s=n("KHd+"),a=Object(s.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-btn",{on:{click:this.genSitemap}},[this._v("Обновить Sitemap")])],1)},[],!1,null,null,null);e.default=a.exports},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})}}]);