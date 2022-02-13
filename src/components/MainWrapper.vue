<template>
    <div class="main_wrapper">
        <Catalog />
        <Cart 
            v-if="CART.length"
            :cart_data="CART"
        />
    </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue';
import Cart from '@/components/Cart.vue';
import {mapGetters} from 'vuex';

export default {
    name: 'MainWrapper',
    data (){
        return {
           
        };
    },
    computed: {
        ...mapGetters([
            'CART'
        ]),
    },
    components: {
        Catalog,
        Cart,
    },
}
</script>

<style scoped >
    .main_wrapper{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1{
        color: red;
    }
</style>