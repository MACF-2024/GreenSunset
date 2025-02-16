'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DiscountCoupons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      validation: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      type: {
        type: Sequelize.ENUM('membership','order','sin'),
        defaultValue: 'sin'
      },
      orderDetailId: {
        type: Sequelize.UUID,
        references: {
          model: 'OrderDetails',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      membershipId: {
        type: Sequelize.UUID,
        references: {
          model: 'Memberships',
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
    await queryInterface.dropTable('DiscountCoupons');
  }
};