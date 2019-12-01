import Router from 'vue-router'

import Components from '@/components'
import EmployeeList from '@/components/EmployeeList'
import LaptopList from '@/components/LaptopList'
import Employee from '@/components/Employee'
import Laptop from '@/components/Laptop'
import CreateEmployee from '@/components/CreateEmployee'
import CreateLaptop from '@/components/CreateLaptop'



export default new Router({
    routes: [
        {
            path: '/',
            component: Components.Home
        },

        // adding a route to employees 
        {
            path: '/employees',
            components: EmployeeList
        },
        
        // adding a route to laptops 
        {
            path: '/laptops',
            component: LaptopList
        },

        // employee/:id route 
        {
            path: '/employee/:id',
            name: 'employee',
            component: Employee
        },

        // laptop/:id route 
        {
            path: '/laptop/:id',
            name: '/laptop',
            component: Laptop
        },

        // create_employee route
        {
            path: '/create_employee',
            component: CreateEmployee
        }, 
        
        // TODO /create_laptop route 
        {
            path: '/create_laptop',
            component: CreateLaptop
        }
        
    ]
})