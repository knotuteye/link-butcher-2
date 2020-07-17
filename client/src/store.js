import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        // server: 'http://localhost:5000/',
        server: window.location.href,
        recentLinks: [],
        newTuple: null,
        connectionError: false
    },
    mutations: {
        updateRecentLinks: function (state, arr) {
            state.recentLinks = arr.reverse();
        },
        updateNewLink: function (state, tuple) {
            state.newTuple = tuple;
        },
        updateConnectionError: function (state, bool) {
            state.connectionError = bool;
        }
    },
    actions: {},
    modules: {}
});
