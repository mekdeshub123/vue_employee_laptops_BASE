<template>

<div>

    <h2>Create new laptop</h2>

    <!--  create LaptopForm component, 
    provide slot data to set button text  -->
    <LaptopForm v-on:laptopFormSubmit="laptopFormSubmit">
        Create
    </LaptopForm>

</div>
</template>

<script>

import LaptopForm from '@/components/forms/LaptopForm'

export default {
    name: 'CreateLaptop',
    components: {
        LaptopForm
    },
    methods:{
        //  handle form submit
        laptopFormSubmit(laptop) {
            this.$services.loptops.addLaptop(laptop).then(() => {
                this.$router.push('/laptops')
            }).catch( err => {
                if (err.response.status == 400) {
                    alert('Error creating laptop because ' + err.response.data)
                }else {
                    alert('Error creating laptop.')
                }               
            })
        },
        // to handle cancel 
        cancel() {
            this.$router.push('/laptops')
        }
    }
}

</script>

<style>
</style>