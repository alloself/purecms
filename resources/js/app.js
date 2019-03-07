require('./bootstrap');
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as jQuery from 'jquery'
import store from './store/index'
import router from './router/index'
import * as Cookies from 'js-cookie'
import VueProgressBar from 'vue-progressbar'
import VueTrumbowyg from 'vue-trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.css';
Vue.use(VueTrumbowyg);
Vue.use(Vuetify, {
    theme: {
        primary: "#46547d",
        secondary: "#f80b37"
    }
})
Vue.use(VueProgressBar, {
    color: '#f80b37',
    failedColor: '#874b4b',
    thickness: '3px',
    transition: {
        speed: '0.4s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
})
if (store.state.user.token != null) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + store.state.user.token
}
const WebApp = () =>
    import('./views/layouts/WebApp.vue');
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(WebApp)
});
