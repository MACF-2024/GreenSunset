'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductVarieties', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      varietyId: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model: 'Varieties',
          key: 'id'
        }, 
        onDelete:'CASCADE', 
        onUpdate:'CASCADE'
      },
      productId: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model: 'Products',
          key: 'id'
        }, 
        onDelete:'CASCADE', 
        onUpdate:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductVarieties');
  }
};