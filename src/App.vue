<template>
    <div id="app">
        <div class="hold-transition sidebar-mini">
            <div class="wrapper">
                <Navbar></Navbar>
                <Sidebar></Sidebar>
                <div class="content-wrapper">
                    <router-view/>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>


<script>
    import Navbar from "@/components/layout/Navbar";
    import Sidebar from "@/components/layout/Sidebar";
    import Footer from "@/components/layout/Footer";

    export default {
        name: 'Home',
        components: {
            Navbar,
            Sidebar,
            Footer
        }
    }
</script>

<style>

</style>
