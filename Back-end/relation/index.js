const cartRelations = require('./cartRelation');
const productRelations = require('./productRelation');
const userRelations = require('./userRelation');
const membreshipRelations = require('./membreshipRelation');
const orderDetailRelations = require('./orderDetailRelation');



module.exports = () => {
    cartRelations();
    productRelations();
    userRelations();
    membreshipRelations();
    orderDetailRelations();
};