<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <BrandLogo name="Awesome"/>

        <div class="sidebar">

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <router-link to="/" class="d-block">John Doe</router-link>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <SidebarItem path="/" title="Dashboard" icon-class="fas fa-tachometer-alt"/>

                    <SidebarItem path="/widget" title="Widget" icon-class="fas fa-th"/>

                    <SidebarDropdownItem label="UI Elements">
                        <SidebarItem path="/ui/general" title="General"/>
                    </SidebarDropdownItem>

                    <SidebarDropdownItem label="Components">
                        <SidebarItem path="/form" title="Forms"/>

                        <SidebarItem path="/table" title="Table"/>
                    </SidebarDropdownItem>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
    import BrandLogo from "../partial/layout/BrandLogo";
    import SidebarItem from "../partial/layout/SidebarItem";
    import SidebarDropdownItem from "../partial/layout/SidebarDropdownItem";
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