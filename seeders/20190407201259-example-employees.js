'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Example employees
    */

      return queryInterface.bulkInsert('Employees', [
        { name: 'Aaaaa Aaaaaa', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bbbbbb B Bbbbb', createdAt: new Date(), updatedAt: new Date()},
        { name: 'Ccccc Ccccc', createdAt: new Date(), updatedAt: new Date()},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Delete all example employees
    */
    
    return queryInterface.bulkDelete('Employees', null, {});
    
  }
};
