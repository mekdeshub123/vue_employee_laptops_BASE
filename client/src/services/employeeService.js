import axios from 'axios'

export default {

    getAllEmployees() {
        return axios.get('/api/employees').then(response => {
            return response.data
        })
    },

    getEmployee(id) {
        return axios.get('/api/employees/' + id).then(response => {
            return response.data
        })
    },

    addEmployee(employee) {
        return axios.post('/api/employees', employee).then(response => {
            return response.data 
        })
    },

    updateEmployee(employee) {
        return axios.patch('/api/employees/' + employee.id , employee).then(response => {
            return response.data
        })
    },

    deleteEmployee(id) {
        return axios.delete('/api/employees/' + id).then(response => {
            return response.data 
        })
    },

    getEmployeeLaptops(id) {
        return axios.get(`/api/employees/${id}/laptops`).then(response => {
            return response.data 
        })
    },



}