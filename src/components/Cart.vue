<template>
    <section>
        <h2>
            CART
        </h2>

        <div class="items_wrap">
            <CartItem 
                v-for="item of cart_data"
                :key="item.id"
                :card_item_data="item"
                @deleteCardItem="deleteCardItem"
            />
        </div>
    </section>
</template>

<script>
import CartItem from './CartItem.vue';
import {mapActions} from 'vuex';

export default {
    name: "Cart",
    components: {
        CartItem,
    },
    props: {
        cart_data: {
            type: Array,
            default (){
                return [];
            },
        },
    },
    methods: {
        ...mapActions([
            'DELETE_CARD_ITEM'
        ]),
        deleteCardItem(id) {
            this.DELETE_CARD_ITEM(id);
        },
    },
}
</script>

<style scoped>
    section{
        width: 100%;
    }
</style>