import axios from 'axios';

export default {
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
    ADD_TO_CART({commit}, product) {
        commit('SET_TO_CART', product);
    },
    DELETE_CARD_ITEM({commit}, itemId) {
        commit('DELETE_CART_ITEM_FROM_CART', itemId)
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('INC_CART_ITEM', index);
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DEC_CART_ITEM', index);
    },
};