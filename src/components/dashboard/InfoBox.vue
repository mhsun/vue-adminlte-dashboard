<template>
    <div :class="size">
        <div class="info-box" :class="flat ? bgClass : ''">
            <span class="info-box-icon" :class="[bgClass, elevation ? 'elevation-1' : '']">
                <em :class="icon"></em>
            </span>

            <div class="info-box-content">
                <span class="info-box-text">{{ getTitle }}</span>
                <span class="info-box-number">{{ count }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InfoBox",
        props: {
            bgClass: {
                type: String,
                default: 'bg-info'
            },
            count: {
                type: [Number, String],
                default: 0
            },
            size: {
                type: String,
                default: "col-lg-3 col-6"
            },
            title: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
            flat: {
                type: Boolean,
                default: false
            },
            elevation: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            getTitle() {
                if (this.title.length > 30) {
                    return this.title.substring(0, 30).concat('..');
                }
                return this.title;
            }
        }
    }
</script>

<style scoped>

</style>