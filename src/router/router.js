import Vue from "vue";
import Router from 'vue-router';

import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            //флаг нужен для того чтобы мы могли передавать данные
            //в пропсах компоненты по урлу
            props: true,
        }
    ],
});

export default router;