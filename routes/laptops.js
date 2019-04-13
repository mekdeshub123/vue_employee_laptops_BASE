var express = require('express')
var Laptop = require('../models').Laptop

var router = express.Router() 

router.get('/', function(req, res, next){
    Laptop.findAll({order: ['serialNumber']}, {where: req.query}).then( laptops => {
        return res.json(laptops)
    }).catch( err => next(err) )
})

// TODO - rest of the laptop routes 

module.exports = router 
