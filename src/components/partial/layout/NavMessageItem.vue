<template>
    <router-link :to="forwardLink" class="dropdown-item">
        <div class="media">
            <img :src="imagePath" alt="Avatar" class="img-size-50 mr-3 img-circle">
            <div class="media-body">
                <h3 class="dropdown-item-title">{{ name }}</h3>
                <p class="text-sm">{{ getMessage }}</p>
                <p class="text-sm text-muted"><em class="far fa-clock mr-1"></em> {{ timeAgo }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "NavMessageItem",
        props: {
            imgSrc: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            shortText: {
                type: String,
                default: 'New message received'
            },
            forwardLink: {
                type: String,
                default: '/'
            },
            time: {
                type: String,
            }
        },
        computed: {
            getMessage() {
                if (this.shortText.length > 30) {
                    return this.shortText.substring(0, 30).concat('..');
                }
                return this.shortText;
            },

            imagePath() {
                if (this.imgSrc) {
                    return this.imgSrc;
                }
                return "https://ui-avatars.com/api/?name=" + this.name.replace(' ', '+');
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