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
                    <div class="col-md-6">
                        <v-table :columns="columns">
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                            </tr>
                        </v-table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import VForm from "../components/VForm";
    import BreadCrumb from "../components/BreadCrumb";
    import VTable from "../components/VTable";

    export default {
        name: 'Component',
        components: {
            VForm,
            BreadCrumb,
            VTable
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
                ],
                columns: [
                    'Id', 'Name', 'Email'
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
