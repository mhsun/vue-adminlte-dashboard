<template>
    <div :class="size">
        <div class="card card-widget widget-user">
            <div class="widget-user-header" :class="bgClass">
                <h3 class="widget-user-username">{{ name }}</h3>
                <h5 class="widget-user-desc">{{ designation }}</h5>
            </div>
            <div class="widget-user-image">
                <img class="img-circle elevation-2" :src="imagePath" alt="User Avatar">
            </div>
            <div class="card-footer">
                <div class="row">
                    <vertical-user-widget-item title="Sales" count="30"/>
                    <vertical-user-widget-item title="Project" count="20"/>
                    <vertical-user-widget-item title="Other" count="89"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VerticalUserWidgetItem from "../partial/widget/VerticalUserWidgetItem";

    export default {
        name: "VerticalUserCard",
        components: {
            VerticalUserWidgetItem
        },
        props: {
            size: {
                type: String,
                default: 'col-md-12'
            },
            bgClass: {
                type: String,
                default: 'bg-info'
            },
            imgSrc: {
                type: String,
            },
            name: {
                type: String,
                required: true
            },
            designation: {
                type: String
            }
        },
        computed: {
            imagePath() {
                if (this.imgSrc) {
                    return this.imgSrc;
                }
                return "https://ui-avatars.com/api/?name=" + this.name.replace(' ', '+');
            }
        }
    }
</script>

<style scoped>

</style>