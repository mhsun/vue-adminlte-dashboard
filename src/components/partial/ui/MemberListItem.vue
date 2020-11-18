<template>
    <li>
        <img :src="imgSrc" alt="User Image">
        <router-link class="users-list-name" :to="profilePath" v-if="profilePath">
            {{ getName }}
        </router-link>
        <span v-else>{{ name }}</span>
        <span class="users-list-date">{{ time }}</span>
    </li>
</template>

<script>
    export default {
        name: "MemberListItem",
        props: {
            imgSrc: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            time: {
                type: String,
                default: 'Today'
            },
            profilePath: {
                type: String
            }
        },
        computed: {
            getName() {
                if (this.name.length > 6) {
                    return this.name.substr(0, 6).concat('..')
                }
                return this.name
            }
        }
    }
</script>

<style scoped>

</style>