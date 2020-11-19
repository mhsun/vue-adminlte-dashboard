<template>
    <tr>
        <td>
            <router-link :to="route">{{ order.order_no }}</router-link>
        </td>
        <td>{{ order.item.title }}</td>
        <td>
            <span class="badge badge-success" v-if="order.status === 'success'">{{ order.status }}</span>
            <span class="badge badge-warning" v-if="order.status === 'pending'">{{ order.status }}</span>
            <span class="badge badge-danger" v-if="order.status === 'cancelled'">{{ order.status }}</span>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "OrderListItem",
        props: {
            route: {
                type: String,
                default: '/'
            },
            order: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>