import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

//конструктор стора принимает объект с настройками
const store = new Vuex.Store({
    //хранение переменных состояния
    state: {
        products: [],
    },
    //тут описиваются мутации стейта
    //здесь все операции синхронны
    //это значит что при одновременном вызове нескольких мутаций
    //они будут блокировать поток
    mutations: {
        //мутации принимают 
        //первым аргументом state
        //вторым то что мы передаем в actions
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
    },
    //экшены асинхронны они не блокируют поток
    actions: {
        //описываем асинхронные операции
        //они в фигурных скобках принимают commit
        //метод для вызова мутаций
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: 'GET',
            })
            .then(products => {
                //commit первым параметром принимает имя метода мутации
                //вторым - данные для него
                commit('SET_PRODUCTS_TO_STATE', products.data);
                //для того чтобы в компоненте можно 
                //было обращаться к этому методу и получать из него данные
                return products.data;
            })
            .catch(e => {
                console.error(e);
                return e;
            });
        },
    },
    //здесь мы можем получить информацию о данных в стейте
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
    },
});

export default store;