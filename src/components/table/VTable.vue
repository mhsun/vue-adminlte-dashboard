<template>
    <div class="card" :class="type">

        <v-table-header/>

        <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
                <thead>
                    <tr>
                        <th v-for="(column,index) in columns" :id="index"> {{ column }}</th>
                    </tr>
                </thead>
                <tbody>
                    <slot/>
                </tbody>
            </table>
            <v-pagination/>
        </div>
    </div>
</template>

<script>
    import VPagination from "./VPagination";
    import VTableHeader from "../partial/table/VTableHeader";

    export default {
        name: "VTable",
        components: {
            VPagination,
            VTableHeader
        },
        props: {
            title: {
                type: String,
                default: 'Table'
            },
            type: {
                type: String,
                default: 'card-default'
            },
            hasSearchOption: {
                type: Boolean,
                default: true
            },
            columns: {
                type: Array,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>