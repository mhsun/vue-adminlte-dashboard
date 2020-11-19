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
                <blockquote :class="{'quote-secondary' : secondary}">
                    <p>{{ description }}</p>
                    <small>{{ smallText }}</small>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VQuote",
        props: {
            size: {
                type: String,
                default: 'col-md-6'
            },
            secondary: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            smallText: {
                type: String
            },
        }
    }
</script>

<style scoped>

</style>