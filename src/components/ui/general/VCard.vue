<template>
    <div :class="size">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <em class="fas fa-text-width"></em>
                    {{ title }}
                </h3>
            </div>

            <div class="card-body">
                <ol v-if="ordered">
                    <slot/>
                </ol>
                <ul class="list-unstyled" v-if="unstyled">
                    <slot/>
                </ul>
                <ul v-if="!ordered && !unstyled">
                    <slot/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VCard",
        props: {
            size: {
                type: String,
                default: 'col-md-4'
            },
            title: {
                type: String,
            },
            ordered: {
                type: Boolean
            },
            unstyled: {
                type: Boolean
            },
        }
    }
</script>

<style scoped>

</style>