<template>
    <li class="nav-item">
        <a href="#" class="nav-link">
            <em class="nav-icon fas fa-copy"></em>
            <p>
                {{ label }}
                <em class="fas fa-angle-left right"></em>
                <span class="badge right" :class="badgeClass" v-if="hasBadge">{{ badgeCount }}</span>
            </p>
        </a>
        <ul class="nav nav-treeview">
            <slot/>
        </ul>
    </li>
</template>

<script>
    export default {
        name: "SidebarDropdownItem",
        props: {
            label: {
                type: String,
                default: "Menu Label"
            },
            hasBadge: {
                type: Boolean,
                default: false
            },
            badgeClass: {
                type: String,
                default: 'badge-info'
            },
            badgeCount: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>

</style>