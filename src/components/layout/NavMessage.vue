<template>
    <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
            <em class="far" :class="icon"></em>
            <span class="badge navbar-badge" :class="badge" v-if="badgeCount">{{ badgeCount }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <slot/>
            <router-link :to="showAllLink" class="dropdown-item dropdown-footer">
                See All Messages
            </router-link>
        </div>
    </li>
</template>

<script>
    import NavMessageItem from "../partial/layout/NavMessageItem";
    export default {
        name: "NavMessage",
        props: {
            icon: {
                type: String,
                default: 'fa-comments'
            },
            badge: {
                type: String,
                default: 'badge-danger'
            },
            badgeCount: {
                type: [Number, String],
                default: 0
            },
            showAllLink: {
                type: String,
                default: '/'
            }
        },
        components: {
            NavMessageItem
        }
    }
</script>

<style scoped>

</style>