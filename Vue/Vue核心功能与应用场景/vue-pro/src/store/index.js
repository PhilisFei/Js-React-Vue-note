import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

//固定写法
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations
});

export default store;