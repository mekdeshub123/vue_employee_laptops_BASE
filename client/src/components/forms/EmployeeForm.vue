<template>
<div>

    <form>
        <div class="form-group">

            <label for="employeeName">Employee Name</label>    
            <input id="employeeName" class="form-control" v-model.trim="name">

            <button type="button" class="btn btn-primary mt-3 mr-4" v-on:click="employeeFormSubmit">
                <slot></slot>
            </button>
            <button type="button" class="btn btn-outline-secondary mt-3"  v-on:click="cancel">Cancel</button>
        </div>
    </form>

</div>
</template>

<script>

export default {
    name: 'EmployeeForm',
    props: {
        employee: Object
    },
    data() {
        return {
            id: '',
            name: ''
        }
    },
    methods: {
        employeeFormSubmit() {
            if (!this.name) { 
                alert('Please enter the employee\'s name.')
                return 
            }

            this.$emit('employeeFormSubmit', { id: this.id, name: this.name })
        },
        cancel() {
            this.$router.push('/employees')
        }
    },
    watch: {
        employee() {
            this.id = this.employee.id
            this.name = this.employee.name
        }
    }
}

</script>

<style>
</style>