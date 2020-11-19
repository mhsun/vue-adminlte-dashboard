<template>
    <div class="alert alert-dismissible" :class="bgClass">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h5><em class="icon" :class="icon"></em> {{ title }}</h5>
        {{ description }}
    </div>
</template>

<script>
    export default {
        name: "Alert",
        props: {
            size: {
                type: String,
                default: 'col-md-3 col-sm-6'
            },
            bgClass: {
                type: String,
                default: 'bg-info'
            },
            icon: {
                type: String,
                default: 'fas fa-exclamation-triangle'
            },
            title: {
                type: String,
                default: 'Alert'
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