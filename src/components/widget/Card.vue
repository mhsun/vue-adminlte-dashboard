<template>
    <div :class="size">
        <div class="card" :class="bgClasses">
            <div class="card-header">
                <h3 class="card-title">{{ title }}</h3>

                <div class="card-tools">
                    <button v-if="action.includes('collapse')" type="button" class="btn btn-tool" data-card-widget="collapse">
                        <em class="fas fa-minus"></em>
                    </button>
                    <button v-if="action.includes('remove')" type="button" class="btn btn-tool" data-card-widget="remove">
                        <em class="fas fa-times"></em>
                    </button>
                    <button v-if="action.includes('maximize')" type="button" class="btn btn-tool" data-card-widget="maximize">
                        <em class="fas fa-expand"></em>
                    </button>
                </div>
            </div>

            <div class="card-body">
                {{ body }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            size: {
                type: String,
                default: 'col-md-3'
            },
            bgClasses: {
                type: String,
                default: 'card-info'
            },
            title: {
                type: String,
                required: true
            },
            action: {
                type: Array,
                default: () => ['collapse']
            },
            body: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>