<template>
    <div class="catalog_item">
        <img :src=" require(`../imgs/${product_data.image}`) " alt="img">
        <p>{{product_data.name}}</p>
        <p>{{product_data.price}}</p>
        <button @click="sendDataToParent">Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "CatalogItem",
        data() {
            return {
                id: 'idshechka',
            };
        },
        props: {
            product_data: {
                type: Object,
                // тут указываем то значение которое будет еще до получения данных
                default(){
                    return {};
                },
            }
        },
        methods: {
            sendDataToParent(){
                this.$emit('sendId', this.id);
            },
        },
    }
</script>

<style scoped>
    .catalog_item{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 25%;
        height: 140px;
        box-shadow: 0px 0px 2px 5px lightblue;
        padding: 15px;
        margin-bottom: 20px;
    }

    button{
        width: 90px;
        background-color: tomato;
    }
</style>