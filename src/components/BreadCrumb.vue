<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>{{ getTitle }}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                        <li class="breadcrumb-item active">{{ getTitle }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "BreadCrumb",
        props: {
            title: {
                type: String
            }
        },
        computed: {
            getTitle() {
                if (typeof(this.title) === "undefined") {
                    return this.$route.path.substring(1).toUpperCase();
                }
                return this.title;
            }
        }
    }
</script>

<style scoped>

</style>