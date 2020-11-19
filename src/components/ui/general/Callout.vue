<template>
    <div class="callout" :class="bgClass">
        <h5>{{ title }}</h5>

        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        name: "Callout",
        props: {
            size: {
                type: String,
                default: 'col-md-3 col-sm-6'
            },
            bgClass: {
                type: String,
                default: 'callout-info'
            },
            title: {
                type: String,
                default: 'Callout'
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>