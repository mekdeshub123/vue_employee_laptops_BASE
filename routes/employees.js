var express = require('express')
var Employee = require('../models').Employee
var Laptop = require('../models').Laptop
var Sequelize = require('sequelize')


var router = express.Router() 

router.get('/', function(req, res, next){
    Employee.findAll({order: ['name']}).then( employees => {
        return res.json(employees)
    }).catch( err => next(err) )
})

router.get('/:id', function(req, res, next) {
    Employee.findByPk(req.params.id).then(employee => {
        if (employee) {
            res.json(employee)
        } else {
            res.status(404).send('Employee not found')
        }
    }).catch( err => next(err) )
})

router.post('/', function(req, res, next){
    Employee.create(req.body).then( (data) => {
        return res.send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(500).json(messages)
        }
        return next(err)
    } )
})

router.patch('/:id', function(req, res, next){   
    Employee.update(
        req.body, { 
            where: {
                id: req.params.id
            }
    }).then( (rowsModified) => {
        if (!rowsModified[0]) {
            return res.status(404).send('Not found')               
        } else {
            return res.send('Ok')
        }
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(500).json(messages)
        }
        return next(err)
    })
})

router.delete('/:id', function(req, res, next){ 
    Employee.destroy({where: {id: req.params.id}}).then( rowsModified => {
        return res.send('ok')
    }).catch( err => next(err) )
})


// TODO get all laptops for employee

    
module.exports = router 
