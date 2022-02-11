<template>
    <div class="main_wrapper">
        <h1>
            {{title}}
        </h1>

        <hr>

        <Catalog />
        <Cart />
    </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue';
import Cart from '@/components/Cart.vue';

export default {
    name: 'MainWrapper',
    data (){
        return {
            title: "Hello, I am alive!!!"
        };
    },
    mounted(){
        console.log('I am already mounted');
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