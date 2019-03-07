import axios from 'axios'
export default {
    namespaced: true,
    state: {
        pages: []
    },
    getters: {
        page: state => id => {
            return state.pages.find(page => page.id === id);
        }
    },
    mutations: {
        addPage(state, data) {
            state.pages.push(data);
        },
        clearPages(state) {
            state.pages = [];
        },
        setPages(state, data) {
            state.pages = data
        }
    },
    actions: {
        addPage(state, data) {
            state.commit('addPage', data)
        },
        clearPages(state) {
            state.commit('clearPages')
        },
        getPages(state) {
            axios
                .get("/api/auth/pages")
                .then(resp => {
                    state.commit('setPages', resp.data)
                })
                .catch(error => {});
        }
    }
};
