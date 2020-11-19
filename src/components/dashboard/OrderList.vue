<template>
    <div class="card">
        <div class="card-header border-transparent">
            <h3 class="card-title">{{ title }}</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <em class="fas fa-minus"></em>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <em class="fas fa-times"></em>
                </button>
            </div>
        </div>

        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table m-0">
                    <thead>
                    <tr>
                        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <order-list-item v-for="order in orders"
                                     :key="order.id"
                                     :order="order"
                    />
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card-footer clearfix">
            <router-link v-if="addNewRoute" :to="addNewRoute" class="btn btn-sm btn-info float-left">Place New Order
            </router-link>
            <router-link v-if="viewAllRoute" :to="viewAllRoute" class="btn btn-sm btn-secondary float-right">View All
                Orders
            </router-link>
        </div>
    </div>
</template>

<script>
    import OrderListItem from "../partial/ui/OrderListItem";

    export default {
        name: "OrderList",
        components: {
            OrderListItem
        },
        props: {
            title: {
                type: String,
                default: 'Latest Orders'
            },
            columns: {
                type: Array,
                required: true
            },
            orders: {
                type: Array,
                required: true
            },
            addNewRoute: {
                type: String,
            },
            viewAllRoute: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>