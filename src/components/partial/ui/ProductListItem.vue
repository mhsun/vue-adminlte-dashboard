<template>
    <li class="item">
        <div class="product-img">
            <img :src="imagePath" alt="Product Image" class="img-size-50">
        </div>
        <div class="product-info">
            <router-link :to="route" class="product-title">
                {{ title }}
                <span class="badge badge-warning float-right">{{ price }}</span>
            </router-link>
            <span class="product-description">
                        {{ description }}
                      </span>
        </div>
    </li>
</template>

<script>
    export default {
        name: "ProductListItem",
        props: {
            imgSrc: {
                type: String,
            },
            title: {
                type: String,
                required: true
            },
            price: {
                type: [String, Number],
                required: true
            },
            shortDescription: {
                type: String,
            },
            route: {
                type: String,
                required: true
            }
        },
        computed: {
            imagePath() {
                if (this.imgSrc) {
                    return this.imgSrc;
                }
                return "https://ui-avatars.com/api/?name=" + this.title.replace(' ', '+');
            },

            description() {
                if (this.shortDescription.length > 50) {
                    return this.shortDescription.substring(0, 50).concat('..');
                }
                return this.shortDescription;
            }
        }
    }
</script>

<style scoped>

</style>