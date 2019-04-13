<template>

<div>

  <h2>Edit Employee</h2>

  <p>Employee ID {{ id }}</p>

    <EmployeeForm v-bind:employee="employee" v-on:employeeFormSubmit="employeeFormSubmit">
        Edit
    </EmployeeForm>

    <div>
        <h3>Laptops</h3>

        <h4 v-if="laptops.length == 0">{{ employee.name }} has no laptops assigned.</h4>
        <ul v-else>
            <li v-for="laptop in laptops" v-bind:key="laptop.id">
                <router-link :to="{ name: 'laptop', params: {id: laptop.id} }">ID {{ laptop.id }}</router-link>
             {{ laptop.brand }} {{ laptop.model }} with serial number {{ laptop.serialNumber}} </li>        
        </ul>
    
        <router-link to="/laptops">Assign laptops from a laptop's page</router-link>
    </div>
    
    <hr>

    <button class="btn btn-danger mt-3" v-on:click="deleteEmployee">Delete Employee</button>

</div>
</template>

<script>

import EmployeeForm from '@/components/forms/EmployeeForm'

export default {
    name: "Employee",
    components: {
        EmployeeForm
    },
    data() {
        return {
            id: undefined,
            employee: {},
            disabled: true,
            laptops: []
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.loadData()
    },
    methods:{
        loadData() {
            this.$services.employees.getEmployee(this.id).then(data => {
                this.employee = data 
                this.$services.employees.getEmployeeLaptops(this.id).then(data => {
                    this.laptops = data 
                })
            })
        },
        employeeFormSubmit(employee) {
            this.$services.employees.updateEmployee(employee).then( data => {
                this.$router.push('/employees')
            })
        },
        cancel() {
            this.$router.push('/employees')
        },
        deleteEmployee() {
            if (confirm(`Delete ${this.employee.name}?`))
            this.$services.employees.deleteEmployee(this.id).then( () => {
                this.$router.push('/employees')            
            })
        }
    }
}

</script>

<style>
</style>