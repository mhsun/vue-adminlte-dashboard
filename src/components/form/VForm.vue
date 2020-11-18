<template>
    <div class="card" :class="type">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>
        </div>

        <form @submit.prevent="submit" ref="vForm">
            <div class="card-body">
                <div class="form-group" v-for="(element,index) in elements" :key="index">
                    <label :for="element.model">{{ element.label }}</label>
                    <input :type="element.type" class="form-control"
                           :id="element.model" v-model="formData[element.model]" :placeholder="element.placeholder">
                </div>
            </div>

            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    import VInput from "../partial/form/VInput";

    export default {
        name: "VForm",
        components: {
          VInput
        },
        props: {
            title: {
                type: String,
                default: 'Form'
            },
            type: {
                type: String,
                default: 'card-default'
            },
            elements: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                formData: {},
            }
        },
        mounted() {
            this.elements.forEach(elem => this.formData[elem.model] = '');
        },
        methods: {
            submit() {
                this.$emit('submitted', this.formData);
                this.elements.forEach(elem => this.formData[elem.model] = "");
                this.$refs.vForm.reset();
            }
        }
    }
</script>

<style scoped>

</style>