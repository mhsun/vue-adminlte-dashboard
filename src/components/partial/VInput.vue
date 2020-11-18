<template>
    <input :type="type" :class="inputClass"
           :id="model" v-model="model" :placeholder="placeholder">
</template>

<script>
    export default {
        name: "VInput",
        props: {
            type: {
                type: String,
                default: 'text'
            },
            inputClass: {
                type: String,
                default: 'form-control'
            },
            placeholder: {
                type: String,
                default: 'Please fill out the field'
            },
            model: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>