const Sequelize = require('sequelize');

//Conexão com "DB" MySQL
const sequelize = new Sequelize('postApp', 'root', 'Templo@2000', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};