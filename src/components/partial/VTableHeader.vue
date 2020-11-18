<template>
    <div class="card-header">
        <h3 class="card-title">{{ title }}</h3>

        <div class="card-tools" v-if="hasSearchOption">
            <div class="input-group input-group-sm" style="width: 150px;">
                <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                        <em class="fas fa-search"></em>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VTableHeader",
        props: {
            title: {
                type: String,
                default: 'Table'
            },
            hasSearchOption: {
                type: Boolean,
                default: true
            },
        }
    }
</script>

<style scoped>

</style>