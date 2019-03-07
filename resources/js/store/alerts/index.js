import axios from "axios";
export default {
    namespaced: true,
    state: {
        alerts: []
    },
    mutations: {
        addAlert(state, input_data) {
            state.alerts.push(input_data);
        },
        clearAlerts(state) {
            state.alerts = [];
        }
    },
    actions: {
        addAlert(state, input_data) {
            state.commit('addAlert', input_data)
        },
        clearAlerts(state) {
            state.commit('addAlert')
        }
    }
};
