var express = require('express')
var Laptop = require('../models').Laptop
var Sequelize = require('sequelize')

var router = express.Router() 

router.get('/laptop', function(req, res, next){
    Laptop.findAll({order: ['serialNumber']}, {where: req.query}).then( laptops => {
        return res.json(laptops)
    }).catch( err => next(err) )
}),
router.get('/:id', function( req, res, next) {
    laptop.findBypk(req.params.id).then(laptop => {
        if(laptop) {
            res.json(laptop)
        }else {
            res.status(404).send('Laptop not found')
        }
    }).catch( err => next(err))
}),
//add route handler for post to/api/loptops
router.post('/', function(req, res, next) {
    Laptop.create(req.body).then( (data) => {
        return res.send('ok')
    }).catch( err => {
        console.log(err)
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(400).json(messages)
        }
        return next(err)
    })
}),
router.get('/laptop/:serialNumber', function(req, res, next) {
    Laptop.findOne( {where: {name: req.params.name}})
    .then(laptops => {
        if(laptops) {
            return res.json(laptops)
        } else {
            return res.status(404).send()
        }
    })
    .catch( err => next.err())
}),

// it rest of the laptop routes
router.patch('/:id', function(req, res, next) {
    Laptop.update(req.body, {where: {id: req.params.id}})           
     .then( (rowModified) => {
        if (!rowModified[0]) {
            return res.status(404).send('Not found')
        } else {
            return res.send('ok')
        }
    }).catch(err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(400).json(messages)
        }
        return next(err)
    })
}),
//handles delet requests
router.delete('/:id', function(req, res, next) {
    Laptop.destroy({where: {id: req.params.id}}).then( rowModified => {
        return res.send('ok')
    }).catch( err => next(err))
}) 
module.exports = router 
