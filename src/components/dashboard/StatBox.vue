<template>
    <div :class="size">
        <div class="small-box" :class="bgClass">
            <div class="inner">
                <h3 v-if="count">{{ count }}</h3>

                <p>{{ getTitle }}</p>
            </div>
            <div class="icon">
                <em :class="icon"></em>
            </div>
            <router-link :to="route" class="small-box-footer">More info <em class="fas fa-arrow-circle-right"></em>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatBox",
        props: {
            bgClass: {
                type: String,
                default: 'bg-info'
            },
            count: {
                type: [Number, String],
                default: 0
            },
            size: {
                type: String,
                default: "col-lg-3 col-6"
            },
            title: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
            route: {
                type: String,
                default: '/'
            }
        },
        computed: {
            getTitle() {
                if (this.title.length > 30) {
                    return this.title.substring(0, 30).concat('..');
                }
                return this.title;
            }
        }
    }
</script>

<style scoped>

</style>