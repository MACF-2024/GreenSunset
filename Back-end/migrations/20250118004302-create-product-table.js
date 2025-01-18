'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.BLOB('long')
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      like: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      commentId: {
        type: Sequelize.UUID,
        references: {
          model: 'comments',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      rankingId: {
        type: Sequelize.UUID,
        references: {
          model: 'rankings',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      tasteId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tastes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      varietyId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'varietys',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      effectId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'effects',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cropId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'crops',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      validation: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
      orderDetailId: {
        type: Sequelize.UUID,
        references: {
          model: 'orderDetails',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      favoriteId: {
        type: Sequelize.UUID,
        references: {
          model: 'favorites',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      itemCartId: {
        type: Sequelize.UUID,
        references: {
          model: 'itemCarts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    });
  },

  async down(queryInterface, Sequelize) { await queryInterface.dropTable('products') }
};
