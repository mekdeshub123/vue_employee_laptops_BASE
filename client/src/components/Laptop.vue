<template>
<div>
   
    <h2>Laptop ID {{ laptop.id }}</h2>

   <!-- TODO show laptop edit form  -->

    <hr>

    <!-- TODO show info about which employee this laptop is assigned to  -->

    <!-- TODO select to choose employee -->

    <!-- TODO buttons to assign/unassign laptop -->
    <hr>

    <!-- TODO delete laptop button -->
    
</div>
</template>

<script>

import LaptopForm from '@/components/forms/LaptopForm'

export default {
    name: "Laptop",
    components: {
        LaptopForm
    },
    data() {
        return {
            // TODO 
        }
    },
    mounted() {
        // TODO get ID from router params 
        // TODO load this laptop's data
    },
    methods:{
        loadData() {
            // load data for laptop, and list of employees 
        },
        // TODO handle edit laptop info

        // TODO handle cancel edit 
        
        // TODO handle assigning laptop to employee

        // TODO handle unassigning laptop

        // TODO handle deleting laptop
    }
}

</script>

<style>
</style>