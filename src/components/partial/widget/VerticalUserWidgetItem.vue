<template>
    <div class="col-sm-4 border-right">
        <div class="description-block">
            <h5 class="description-header">{{ count }}</h5>
            <span class="description-text">{{ title }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerticalUserWidgetItem",
        props: {
            title: {
                type: String,
                required: true
            },
            count: {
                type: [String, Number],
                default: 0
            },
        }
    }
</script>

<style scoped>

</style>