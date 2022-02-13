<template>
    <section>
        <h2>
            CART
        </h2>

        <div class="to_catalog_link">
            <router-link :to="{name: 'catalog'}">
                <span>
                    Back to Catalog
                </span>
            </router-link>
        </div>

        <p v-if="!cart_data.length">
            There are no data in the cart...
        </p>

        <div class="items_wrap">
            <CartItem 
                v-for="(item, index) of cart_data"
                :key="item.id"
                :card_item_data="item"
                @deleteCardItem="deleteCardItem(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
            />
        </div>

        <div class="total">
            <p class="total_title">Totlal: </p>
            <p>{{cartTotalPrice}}</p>
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
    computed: {
        cartTotalPrice() {
            return this.cart_data.reduce((acc, item) => {
                const currentItemPrice = item.quantity * item.price;

                return acc + currentItemPrice;
            }, 0);
        },
    },
    methods: {
        ...mapActions([
            'DELETE_CARD_ITEM',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        deleteCardItem(index) {
            this.DELETE_CARD_ITEM(index);
        },
        increment(index) {
            this.INCREMENT_CART_ITEM(index);
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index);
        },
    },
}
</script>

<style scoped>
    section{
        width: 100%;
    }

    .to_catalog_link{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 20px;
        border: 1px solid black;
    }

    .total{
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-color: rgb(108, 224, 152);
        padding: 30px;
        display: flex;
        justify-content: center;
        color: aliceblue;
        font-size: 21px;
    }

    .items_wrap{
        margin-bottom: 180px;
    }

    .total_title{
        margin-right: 20px;
    }
</style>