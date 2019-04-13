'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add example laptops 
    */

    return queryInterface.bulkInsert('Laptops', [
      { brand: 'Apple', model: 'MacBook', serialNumber: '00001', createdAt: new Date(), updatedAt: new Date()},
      { brand: 'Lenovo', model: 'AA12', serialNumber: '00002', createdAt: new Date(), updatedAt: new Date()},
      { brand: 'Dell', model: 'XZ99', serialNumber: '00003', createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Delete all example laptops
    */

    return queryInterface.bulkDelete('Laptops', null, {})

  }
};
