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
    import Navbar from "@/components/Navbar";
    import Sidebar from "@/components/Sidebar";
    import Footer from "@/components/Footer";

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
