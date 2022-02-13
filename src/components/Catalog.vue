<template>
    <section>
           <h2>
                CATALOG
            </h2>

            <hr>
            <div class="catalog">
                <CatalogItem 
                    v-for="prod in PRODUCTS"
                    :key="prod.id"
                    :product_data="prod"
                    @addToCart="addToCart"
                />
            </div>
    </section>
</template>

<script>
    import CatalogItem from '@/components/CatalogItem.vue';

    //mapAction нужны для того чтобы
    //мы в компоненте могли обращатся к методам store
    //просто через this

    //mapGetters нужен для того чтобы 
    //допустим в v-for не прописывать длинные пути к нужным переменным
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "Catalog",
        components: {
            CatalogItem,
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
            ]),
        },
        methods: {
            ...mapActions([
                'ADD_TO_CART',
                'GET_PRODUCTS_FROM_API'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            },
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then(d => console.log(d));
        },
    }
</script>

<style scoped>
    h2{
        font-size: 35px;
    }

    .catalog{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
        margin-top: 25px;
    }
</style>