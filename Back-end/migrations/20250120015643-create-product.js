'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      like: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      validation: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      cropId:{
        type: Sequelize.UUID,
        references: {
          model: 'Crops',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Products');
  }
};