<template>

<div>

    <div class="form-group">

        <!-- TODO create laptop form -->
    
    </div>
</div>
</template>

<script>

export default {
    name: 'CreateLaptop',
    props: {
        laptop: Object
    },
    data() {
        return {
            id: '',
            brand: '',
            model: '',
            serialNumber: ''
        }
    },
    watch: {
        // TODO watch laptop prop
    },
    methods:{
        // TODO handle form submit 

        // TODO Handle cancel
    }
}

</script>

<style>
</style>