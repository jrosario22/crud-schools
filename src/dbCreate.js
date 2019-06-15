//let express = require('express');
//let app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:Password@localhost/postgres');

var Campus = sequelize.define('campus', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    cuny: Sequelize.BOOLEAN
});

export default Campus;