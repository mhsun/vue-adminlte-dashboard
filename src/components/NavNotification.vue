<template>
    <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
            <em class="far" :class="icon"></em>
            <span class="badge navbar-badge" :class="badge" v-if="notificationCount">{{ notificationCount }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">{{ notificationCount }} Notifications</span>
            <div class="dropdown-divider"></div>
            <slot/>
            <router-link :to="showAllLink" class="dropdown-item dropdown-footer">
                See All Notifications
            </router-link>
        </div>
    </li>
</template>

<script>
    export default {
        name: "NavNotification",
        props: {
            icon: {
                type: String,
                default: 'fa-bell'
            },
            badge: {
                type: String,
                default: 'badge-warning'
            },
            notificationCount: {
                type: [Number, String],
                default: 0
            },
            showAllLink: {
                type: String,
                default: '/'
            }
        }
    }
</script>

<style scoped>

</style>