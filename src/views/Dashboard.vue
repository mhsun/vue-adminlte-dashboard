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

    export default {
        name: 'Home',
        components: {
            Navbar,
            Sidebar,
            StatBox,
            BreadCrumb,
            InfoBox,
            MemberList
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
                ]
            }
        }
    }
</script>
