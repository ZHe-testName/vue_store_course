<template>
    <section>
           <h2>
                CATALOG
            </h2>

            <hr>
            <div class="catalog">
                <CatalogItem 
                    @sendId="showIdInConsole"
                />
            </div>
    </section>
</template>

<script>
    import CatalogItem from '@/components/CatalogItem.vue';

    export default {
        name: "Catalog",
        components: {
            CatalogItem,
        },
        methods: {
            showIdInConsole(id) {
                console.log(id);
            },
        },
    }
</script>

<style scoped>
    .catalog{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
    }
</style>