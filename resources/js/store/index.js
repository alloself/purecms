import Vue from "vue";
import Vuex from "vuex";
import user from './user/index'
import alerts from './alerts/index'
import pages from './pages/index'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        user,
        alerts,
        pages
    }
});
