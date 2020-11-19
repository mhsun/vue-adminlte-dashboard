<template>
    <section class="content">
        <bread-crumb/>

        <div class="container-fluid">
            <div class="row">
                <small-box title="Latest Sale" progress="89" description="Some random description"/>
                <small-box bg-class="bg-warning" icon="far fa-bookmark" title="Latest Sale" progress="30" description="Some random description"/>
                <small-box bg-class="bg-success" count="30" icon="far fa-bookmark" title="Latest Sale" progress="30" description="Some random description"/>
                <small-box bg-class="bg-primary" count="30" icon="far fa-bookmark" title="Latest Sale" progress="30" description="Some random description"/>
            </div>

            <div class="row">
                <card title="Hi there!" body="This is some random text"/>
                <card title="Hi there!" body="This is some random text" bg-classes="bg-warning" action="remove"/>
                <card title="Hi there!" body="This is some random text" bg-classes="bg-success" action="maximize"/>
                <card title="Hi there!" body="This is some random text" bg-classes="card-outline card-success" :action="['remove', 'maximize', 'collapse']"/>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <horizontal-user-card name="John Doe"/>
                </div>
                <div class="col-md-6">
                    <vertical-user-card name="John Doe"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BreadCrumb from "../components/ui/BreadCrumb";
    import SmallBox from "../components/widget/SmallBox";
    import Card from "../components/widget/Card";
    import HorizontalUserCard from "../components/widget/HorizontalUserCard";
    import VerticalUserCard from "../components/widget/VerticalUserCard";

    export default {
        name: "Widget",
        components: {
            BreadCrumb,
            SmallBox,
            Card,
            HorizontalUserCard,
            VerticalUserCard
        }
    }
</script>

<style scoped>

</style>