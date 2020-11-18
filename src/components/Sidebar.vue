<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <BrandLogo name="Awesome"/>

        <div class="sidebar">

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <router-link to="/" class="d-block">John Doe</router-link>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <SidebarItem path="/" title="Dashboard" icon-class="fas fa-tachometer-alt"/>

                    <SidebarItem path="/about" title="About" icon-class="far fa-comment"/>

                    <SidebarItem path="/form" title="Form"/>

                    <SidebarItem path="/table" title="Table"/>

                    <SidebarDropdownItem label="Widgets">
                        <SidebarItem path="/" title="Forms"/>
                    </SidebarDropdownItem>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
    import BrandLogo from "./partial/BrandLogo";
    import SidebarItem from "./partial/SidebarItem";
    import SidebarDropdownItem from "./partial/SidebarDropdownItem";
    export default {
        name: "Sidebar",
        components: {
            BrandLogo,
            SidebarItem,
            SidebarDropdownItem
        }
    }
</script>

<style scoped>

</style>