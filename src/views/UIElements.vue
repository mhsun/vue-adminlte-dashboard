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

                <div class="row">
                    <v-quote title="sdsd" description="sdsds" small-text="some citation here"/>
                    <v-quote secondary title="sdsd" description="sdsds" small-text="some citation here"/>
                </div>

                <div class="row">
                    <v-card ordered title="Ordered List">
                        <li>List 1</li>
                        <li>List 2</li>
                        <li>List 3</li>
                    </v-card>
                    <v-card unstyled title="Unstyled List">
                        <li>List 1</li>
                        <li>List 2</li>
                        <li>List 3</li>
                    </v-card>
                    <v-card title="Unordered List">
                        <li>List 1</li>
                        <li>List 2</li>
                        <li>List 3</li>
                    </v-card>
                </div>

                <div class="row">
                    <g-card title="Some Title">
                        <dl>
                            <dt>Description lists</dt>
                            <dd>A description list is perfect for defining terms.</dd>
                            <dt>Euismod</dt>
                            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                            <dt>Malesuada porta</dt>
                            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                        </dl>
                    </g-card>
                    <g-card title="Some Title">
                        <dl>
                            <dt class="col-sm-4">Description lists</dt>
                            <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                            <dt class="col-sm-4">Euismod</dt>
                            <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem
                                nec elit.
                            </dd>
                            <dt class="col-sm-4">Euismod</dt>
                            <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem
                                nec elit.
                            </dd>
                        </dl>
                    </g-card>
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
    import VQuote from "../components/ui/general/VQuote";
    import VCard from "../components/ui/general/VCard";
    import GCard from "../components/ui/general/GCard";

    export default {
        name: "UIElements",
        components: {
            BreadCrumb,
            Alert,
            Callout,
            ProgressBar,
            VQuote,
            VCard,
            GCard
        }
    }
</script>

<style scoped>

</style>