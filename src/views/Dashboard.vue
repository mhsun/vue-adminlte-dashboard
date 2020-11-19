<template>
    <section class="content">
        <bread-crumb/>

        <div class="container-fluid">
            <div class="row">
                <stat-box title="New Orders" bg-class="bg-warning" icon="fa fa-shopping-bag" count="20"/>
                <stat-box title="New Customers" icon="fa fa-shopping-bag" count="29"/>
                <stat-box title="New Users" bg-class="bg-danger" icon="fa fa-shopping-bag" count="189"/>
                <stat-box title="New Invoices" bg-class="bg-success" icon="fa fa-shopping-bag" count="21"/>
            </div>

            <div class="row">
                <info-box title="New Orders" bg-class="bg-warning" icon="fa fa-shopping-bag" count="20"/>
                <info-box elevation flat title="New Customers" icon="fa fa-shopping-bag" count="29"/>
                <info-box title="New Users" bg-class="bg-danger" icon="fa fa-shopping-bag" count="189"/>
                <info-box flat title="New Invoices" bg-class="bg-success" icon="fa fa-shopping-bag" count="21"/>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <member-list :member-list="memberList"/>
                </div>
                <div class="col-md-6">
                    <product-list :products="products"/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <order-list :columns="columns"
                                :orders="orders"
                                add-new-route="/"
                                view-all-route="/"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Navbar from "../components/layout/Navbar";
    import Sidebar from "../components/layout/Sidebar";
    import StatBox from "../components/dashboard/StatBox";
    import BreadCrumb from "../components/ui/BreadCrumb";
    import InfoBox from "../components/dashboard/InfoBox";
    import MemberList from "../components/dashboard/MemberList";
    import ProductList from "../components/dashboard/ProductList";
    import OrderList from "../components/dashboard/OrderList";

    export default {
        name: 'Home',
        components: {
            Navbar,
            Sidebar,
            StatBox,
            BreadCrumb,
            InfoBox,
            MemberList,
            ProductList,
            OrderList
        },
        data() {
            return {
                memberList: [
                    {
                        id: 1,
                        name: "John Doe",
                        image: "https://ui-avatars.com/api/?name=John+Doe",
                        time: 'Today'
                    },
                    {
                        id: 2,
                        name: "Jane Doe",
                        image: "https://ui-avatars.com/api/?name=Jahn+Doe",
                        time: 'Yesterday'
                    },
                    {
                        id: 3,
                        name: "Alex Furgusion",
                        image: "https://ui-avatars.com/api/?name=Alex+Fergusion",
                        time: 'Yesterday'
                    },
                    {
                        id: 4,
                        name: "Rose Janet",
                        image: "https://ui-avatars.com/api/?name=Rose+Janet",
                        time: 'Yesterday'
                    }
                ],
                products: [
                    {
                        id: 1,
                        title: "First Product",
                        price: "$200",
                        shortDescription: "This is some random text about the product"
                    }
                ],
                columns: [
                  "Order No.", "Item", "Status"
                ],
                orders: [
                    {
                        id: 1,
                        order_no: "1212",
                        item: {
                            id: 1,
                            title: "Mobile Phone"
                        },
                        status: "success"
                    },
                    {
                        id: 2,
                        order_no: "3221",
                        item: {
                            id: 2,
                            title: "Laptop"
                        },
                        status: "pending"
                    }
                ]
            }
        }
    }
</script>
