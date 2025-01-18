'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      total: {
        type: Sequelize.DECIMAL(10, 2)
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
      itemId: {
        type: Sequelize.UUID,
        references: {
          model: 'itemCarts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      discountCouponId: {
        type: Sequelize.UUID,
        references: {
          model: 'discountCoupons',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      status: {
        type: Sequelize.ENUM('active', 'abandoned', 'completed'),
        defaultValue: 'abandoned'
      }
    });
  },

  async down(queryInterface, Sequelize) { await queryInterface.dropTable('carts') }
};
