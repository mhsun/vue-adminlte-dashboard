<template>
    <div :class="size">
        <div class="card card-widget widget-user-2">
            <div class="widget-user-header" :class="bgClass">
                <div class="widget-user-image">
                    <img class="img-circle elevation-2" :src="imagePath" alt="User Avatar">
                </div>

                <h3 class="widget-user-username">{{ name }}</h3>
                <h5 class="widget-user-desc">{{ designation }}</h5>
            </div>

            <div class="card-footer p-0">
                <ul class="nav flex-column">
                    <horizontal-user-widget-item title="Some Title" badge-class="bg-warning"/>
                    <horizontal-user-widget-item title="Some Title" badge-class="bg-success"/>
                    <horizontal-user-widget-item title="Some Title" badge-class="bg-danger"/>
                    <horizontal-user-widget-item title="Some Title"/>
                </ul>
            </div>
        </div>
        <!-- /.widget-user -->
    </div>
</template>

<script>
    import HorizontalUserWidgetItem from "../partial/widget/HorizontalUserWidgetItem";

    export default {
        name: "HorizontalUserCard",
        components: {
            HorizontalUserWidgetItem
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
            },
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