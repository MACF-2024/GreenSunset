'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled'),
        defaultValue: 'pending'
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      orderDetailId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'orderDetails',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(NOW)
      },
      updateAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(NOW)
      }
    })
  },

  async down(queryInterface, Sequelize) { await queryInterface.dropTable('orders') }
};
