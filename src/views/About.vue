<template>
    <div class="about">
        <BreadCrumb/>

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <v-form
                                :elements="formElements"
                                @submitted="handle"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import VForm from "../components/VForm";
    import BreadCrumb from "../components/BreadCrumb";

    export default {
        name: 'About',
        components: {
            VForm,
            BreadCrumb
        },
        data() {
            return {
                formElements: [
                    {
                        label: "Name",
                        type: "text",
                        placeholder: "Please fill up name field",
                        model: "name",
                        required: true
                    },
                    {
                        label: "Email",
                        type: "email",
                        placeholder: "Please fill up email field",
                        model: "email",
                        required: true
                    }
                ]
            }
        },
        methods: {
            handle(data) {
                console.log(data.name, data.email);
            }
        }
    }
</script>
