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
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GCard",
        props: {
            size: {
                type: String,
                default: 'col-md-6'
            },
            title: {
                type: String,
            },
        }
    }
</script>

<style scoped>

</style>