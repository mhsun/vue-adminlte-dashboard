<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                    <em class="fas fa-bars"></em>
                </a>
            </li>
        </ul>

        <form class="form-inline ml-3">
            <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar"
                       type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                        <em class="fas fa-search"></em>
                    </button>
                </div>
            </div>
        </form>

        <ul class="navbar-nav ml-auto">

            <NavMessage
                    badge-count="1"
                    show-all-link="/"
            >
                <NavMessageItem
                        name="John Doe"
                        time="4 hours ago"
                        short-text="Hi there! knock me up"
                />
                <div class="dropdown-divider"></div>
            </NavMessage>

            <NavNotification
                    notification-count="2"
            >
                <NavNotificationItem
                        title="New invoice generated"
                        time="3 hours ago"
                />
                <NavNotificationItem
                        title="New invoice generated"
                        time="3 hours ago"
                />
            </NavNotification>

            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    <i class="fas fa-th-large"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import NavMessage from "./NavMessage";
    import NavMessageItem from "../partial/layout/NavMessageItem";
    import NavNotification from "./NavNotification";
    import NavNotificationItem from "../partial/layout/NavNotificationItem";

    export default {
        name: "Navbar",
        components: {
            NavMessage,
            NavMessageItem,
            NavNotification,
            NavNotificationItem
        }
    }
</script>

<style scoped>

</style>