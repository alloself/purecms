import axios from "axios";
import * as Cookies from "js-cookie";
import router from '../../router/index'
export default {
    namespaced: true,
    state: {
        user: null,
        token: Cookies.getJSON("token") || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        SetToken(state, data) {
            if (data != null) {
                state.token = data;
                axios.defaults.headers.common['Authorization'] = "Bearer " + data
                Cookies.set("token", state.token, {
                    expires: 2,
                    domain: location.hostname
                });
            } else {
                Cookies.remove("token");
            }
        },
        SetUser(state, data) {
            state.user = data
        }
    },
    actions: {
        LogIn(state, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/login", {
                        email: data.email,
                        password: data.password,
                        remember_me: true
                    })
                    .then(resp => {
                        state.commit('SetToken', resp.data)
                        axios
                            .get("/api/auth/details")
                            .then(resp => {
                                state.commit('SetUser', resp.data)
                                resolve('')
                            })
                            .catch(error => {
                                state.commit('SetToken', null)
                                state.commit('SetUser', null)
                                window.location.replace("/");
                            })
                        resolve('Вход выполнен.')
                    })
                    .catch(error => {
                        window.location.replace("/");
                    })
            })
        },
        LogOut(state) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/logout")
                    .then(resp => {
                        state.commit('SetToken', null)
                        resolve('Выход выполнен.')
                        state.commit('SetUser', null)
                        router.push({
                            name: 'Login'
                        })
                    })
                    .catch(error => {
                        reject(error.response.data)
                    })
            })
        },
        SetToken(state, data) {
            state.commit('SetToken', data)
        },
        SetUser(state) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/auth/details")
                    .then(resp => {
                        state.commit('SetUser', resp.data)
                        resolve('')
                    })
                    .catch(error => {
                        state.commit('SetUser', null)
                        state.commit('SetToken', null)
                        window.location.replace("/");
                    })
            })
        }
    }
};
