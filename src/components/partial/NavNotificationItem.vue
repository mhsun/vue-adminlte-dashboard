<template>
    <div>
        <router-link :to="path" class="dropdown-item">
            <em class="fas fa-envelope mr-2"></em> {{ getTitle }}
            <span class="float-right text-muted text-sm">{{ timeAgo }}</span>
        </router-link>
        <br>
        <div class="dropdown-divider"></div>
    </div>
</template>

<script>
    export default {
        name: "NavNotificationItem",
        props: {
            path: {
                type: String,
                default: '/'
            },
            title: {
                type: String,
                default: 'New notification arrived'
            },
            time: {
                type: String,
            }
        },
        computed: {
            getTitle() {
                if (this.title.length > 30) {
                    return this.title.substring(0, 30).concat('..');
                }
                return this.title;
            },

            timeAgo() {
                if (typeof(this.time) === "string") {
                    return this.time;
                }
                return this.time; // need to return moment.js time
            }
        }
    }
</script>

<style scoped>

</style>