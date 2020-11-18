<template>
    <li class="nav-item">
        <router-link :to="path" class="nav-link" :class="{active: $route.path === getPath}">
            <em class="nav-icon" :class="iconClass" v-if="iconClass"></em>
            <em class="far fa-circle nav-icon" v-else></em>
            <p>
                {{ title }}
            </p>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "SidebarItem",
        props: {
            path: {
                type: [String, Object],
                required: true
            },
            title: {
                type: String,
                required: true
            },
            iconClass: {
                type: String,
            }
        },
        computed: {
            getPath() {
                if (typeof(this.path) ===  "object") {
                    return this.path.name;
                }
                return this.path;
            }
        }
    }
</script>

<style scoped>

</style>