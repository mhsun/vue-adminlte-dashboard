<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <em class="fas fa-minus"></em>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <em class="fas fa-times"></em>
                </button>
            </div>
        </div>

        <div class="card-body p-0">
            <ul class="products-list product-list-in-card pl-2 pr-2">
                <product-list-item v-for="product in products"
                                   :key="product.id"
                                   :title="product.title"
                                   :price="product.price"
                                   :short-description="product.shortDescription"
                                   route="/"
                />
            </ul>
        </div>

        <div class="card-footer text-center">
            <router-link :to="route" class="uppercase">View All Products</router-link>
        </div>
    </div>
</template>

<script>
    import ProductListItem from "../partial/ui/ProductListItem";

    export default {
        name: "ProductList",
        components: {
            ProductListItem
        },
        props: {
            title: {
                type: String,
                default: 'Latest Products'
            },
            products: {
                type: Array,
                required: true
            },
            route: {
                type: String,
                default: '/'
            }
        }
    }
</script>

<style scoped>

</style>