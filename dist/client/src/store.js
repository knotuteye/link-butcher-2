"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vuex_1 = __importDefault(require("vuex"));
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
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
