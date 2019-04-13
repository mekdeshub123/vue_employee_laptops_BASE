<template>

<div>

    <h2>Create new laptop</h2>

    <!-- TODO create LaptopForm component, 
    provide slot data to set button text  -->

</div>
</template>

<script>

import LaptopForm from '@/components/forms/LaptopForm'

export default {
    name: 'CreateLaptop',
    components: {
        LaptopForm
    },
    data() {
        return {
            // todo - data 
        }
    },
    methods:{
        // TODO handle form submit
        // TODO handle cancel 
    }
}

</script>

<style>
</style>