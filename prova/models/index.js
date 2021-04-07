const { Sequelize, DataTypes } = require('sequelize');
const _Usuario = require('./usuario');
const _Nota = require ('./nota');
const database = {};

const options = {
    username: 'postgres',
    password: 'progweb1010',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
};

const sequelize = new Sequelize(options);


const Usuario = _Usuario(sequelize, DataTypes);


Nota.belongsTo(Usuario, {as:'usuario', foreignKey: 'usuarioId'});


database = { Usuario};


sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.database} realizada com sucesso`))
    .catch((error) => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;