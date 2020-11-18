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
                <info-box title="New Customers" icon="fa fa-shopping-bag" count="29"/>
                <info-box title="New Users" bg-class="bg-danger" icon="fa fa-shopping-bag" count="189"/>
                <info-box title="New Invoices" bg-class="bg-success" icon="fa fa-shopping-bag" count="21"/>
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

    export default {
        name: 'Home',
        components: {
            Navbar,
            Sidebar,
            StatBox,
            BreadCrumb,
            InfoBox
        }
    }
</script>
