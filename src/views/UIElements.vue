<template>
    <div>
        <bread-crumb/>

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <alert title="Alert" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <alert title="Alert" bg-class="bg-warning" icon="fas fa-ban" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <alert title="Alert" bg-class="bg-success" icon="fas fa-ban" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <alert title="Alert" bg-class="bg-danger" icon="fas fa-ban" description="Some dummy text"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <callout title="Alert" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <callout title="Alert" bg-class="callout-warning" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <callout title="Alert" bg-class="callout-success" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <callout title="Alert" bg-class="callout-danger" description="Some dummy text"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <progress-bar value="30"/>
                    </div>
                    <div class="col-md-3">
                        <progress-bar vertical value="50" bg-class="bg-warning progress-bar-striped" description="40%"/>
                    </div>
                    <div class="col-md-3">
                        <progress-bar value="70" bg-class="bg-success" description="Some dummy text"/>
                    </div>
                    <div class="col-md-3">
                        <progress-bar vertical value="90" bg-class="bg-danger"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Alert from "../components/ui/general/Alert";
    import BreadCrumb from "../components/ui/BreadCrumb";
    import Callout from "../components/ui/general/Callout";
    import ProgressBar from "../components/ui/general/ProgressBar";

    export default {
        name: "UIElements",
        components: {
            BreadCrumb,
            Alert,
            Callout,
            ProgressBar
        }
    }
</script>

<style scoped>

</style>