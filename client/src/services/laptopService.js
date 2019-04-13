import axios from 'axios'

export default {

    getAllLaptops() {
        return axios.get('/api/laptops').then(response => {
            return response.data
        })
    },

    getLaptop(id) {
        return axios.get('/api/laptops/' + id).then(response => {
            return response.data
        })
    },

    addLaptop(laptop) {
        return axios.post('/api/laptops', laptop).then(response => {
            return response.data 
        })
    },

    updateLaptop(laptop) {
        return axios.patch('/api/laptops/' + laptop.id , laptop).then(response => {
            return response.data
        })
    },

    deleteLaptop(id) {
        return axios.delete('/api/laptops/' + id).then(response => {
            return response.data 
        })
    },

    // if employeeId is null, then the laptop will be un-assigned 
    assignLaptop(laptopId, employeeId) {
        return axios.patch(`/api/laptops/${laptopId}/employee`, {employeeId: employeeId}).then(response => {
            return response.data 
        })
    },
}