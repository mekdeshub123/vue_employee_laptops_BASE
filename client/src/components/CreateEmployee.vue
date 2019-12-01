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
    methods: {
        //handles form sumit
        employeeFormSubmit(employee) {
            this.$services.employees.addEmployee(employee).then( () => {
                this.$router.push('/employees')
            })
        },
        //hndles cancel
        cancel() {
            this.$router.push('/employees')
        }
    }
}

</script>

<style>
</style>