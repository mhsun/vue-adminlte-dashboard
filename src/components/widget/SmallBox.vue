<template>
    <div :class="size">
        <div class="info-box" :class="bgClass">
            <span class="info-box-icon"><em :class="icon"></em></span>

            <div class="info-box-content">
                <span class="info-box-text">{{ title }}</span>
                <span class="info-box-number">{{ count }}</span>

                <div class="progress">
                    <div class="progress-bar" :style="'width: '+ progress + '%'"></div>
                </div>
                <span class="progress-description">
                  {{ description }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SmallBox",
        props: {
            size: {
                type: String,
                default: 'col-md-3 col-sm-6 col-12'
            },
            bgClass: {
                type: String,
                default: 'bg-info'
            },
            icon: {
                type: String,
            },
            title: {
                type: String,
                required: true
            },
            count: {
                type: [Number, String],
                default: 0
            },
            progress: {
                type: [String, Number],
                required: true
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