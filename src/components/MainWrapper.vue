<template>
    <div class="main_wrapper">
        <!-- keep-alive нужен для того чтобы сохранять состояние
        между сменой урла -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

export default {
    name: 'MainWrapper',
    data (){
        return {
           
        };
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