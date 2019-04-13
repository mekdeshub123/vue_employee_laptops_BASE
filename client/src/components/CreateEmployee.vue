<template>
<div>

    <h2>Create New Employee</h2>

    <EmployeeForm v-on:employeeFormSubmit="employeeFormSubmit">
        Create
    </EmployeeForm>

    
</div>
</template>

<script>

import EmployeeForm from '@/components/forms/EmployeeForm'

export default {
    name: 'CreateEmployee',
    components: {
        EmployeeForm
    },
    data() {
        return {
            name: '',     
        }
    },
    methods: {
        employeeFormSubmit(employee) {
            this.$services.employees.addEmployee( employee ).then( data => {
                this.$router.push('/employees')
            })
        },
        cancel() {
            this.$router.push('/employees')
        }
    }
}

</script>

<style>
</style>