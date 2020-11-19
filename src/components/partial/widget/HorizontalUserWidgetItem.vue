<template>
    <li class="nav-item">
        <router-link :to="route" class="nav-link">
            {{ title }} <span class="float-right badge" :class="badgeClass">{{ count }}</span>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "HorizontalUserWidgetItem",
        props: {
            route: {
                type: String,
                default: '/'
            },
            title: {
                type: String,
                required: true
            },
            count: {
                type: [String, Number],
                default: 0
            },
            badgeClass: {
                type: String,
                default: 'bg-primary'
            }
        }
    }
</script>

<style scoped>

</style>