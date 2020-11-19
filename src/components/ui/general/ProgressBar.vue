<template>
    <div class="progress active" :class="{vertical: vertical}">
        <div class="progress-bar" :class="bgClass" role="progressbar"
             :aria-valuenow="value" :aria-valuemin="limit.min" :aria-valuemax="limit.max"
             :style="vertical ? 'height: '+value+'%' : 'width: '+value+'%' ">
            <span class="">{{ description }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: {
            limit: {
                type: Object,
                default: () => {
                    return {
                        min: 0,
                        max: 100
                    }
                },
            },
            value: {
                type: [String, Number],
                required: true
            },
            bgClass: {
                type: String,
                default: 'bg-info'
            },
            description: {
                type: String,
            },
            vertical: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>