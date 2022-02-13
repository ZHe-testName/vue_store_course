import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions/actions';
import getters from './getters/getters';
import mutations from './mutations/mutations';

Vue.use(Vuex);

//конструктор стора принимает объект с настройками
const store = new Vuex.Store({
    //хранение переменных состояния
    state: {
        products: [],
        cart: [],
    },
    //тут описиваются мутации стейта
    //здесь все операции синхронны
    //это значит что при одновременном вызове нескольких мутаций
    //они будут блокировать поток
    mutations,
    //экшены асинхронны они не блокируют поток
    actions,
    //здесь мы можем получить информацию о данных в стейте
    getters,
});

window.myStore = store.state;

export default store;