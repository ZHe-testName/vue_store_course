<template>
    <div class="cart_item">
        <img
            class="image"
            :src=" require(`../imgs/${card_item_data.image}`) " alt="product"
        >

        <div class="cart_item_info">
            <p>{{card_item_data.name}}</p>
            <p>{{card_item_data.price}}</p>
            <p>{{card_item_data.article}}</p>
        </div>

        <span class="item_quantity">
            <span 
                class="controls"
                @click="increment"
                >
                +
            </span>

            <span>
                Qty.
                {{card_item_data.quantity}}
            </span>

            <span 
                class="controls"
                @click="decrement"
                >
                -
            </span>
        </span>

        <button
            @click="deleteCardItem"
        >Delete</button>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
            card_item_data: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
        //к входящим динным можно обрпщатся но
        //не можна на прямую изменять
        //для этого нужно использовать this.$set
        //чтобы не потерять реактивность
        mounted() {
            //метод set принимает в себя три аргумента
            //1 место вставки
            //2 имя ключа
            //3 значение по ключу
            this.$set(this.card_item_data, 'quantity', 1);
        },
        methods: {
            deleteCardItem() {
                this.$emit('deleteCardItem');
            },
            increment() {
                this.$emit('increment');
            },
            decrement() {
                this.$emit('decrement');
            },
        },
    }
</script>

<style scoped>
    .cart_item{
        width: 80%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 0px auto;
        padding: 10px;
        border: 1px solid lightblue;
        border-radius: 15px;
        margin-bottom: 15px;
    }

    .image{
        width: 80px;
        height: 85px;
    }

    .controls{
        width: 15px;
        height: 15px;
        display: block;
        background-color: beige;
        margin: 10px auto;
        cursor: pointer;
    }
</style>