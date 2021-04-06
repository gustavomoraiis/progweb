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

// let Usuario = _Usuario(sequelize, DataTypes);
// let Nota = _Nota(sequelize, DataTypes);

// database['Usuario'] = Usuario;
// database['Nota'] = Nota;

// console.log(database);

// for (const key in database){
//     // if(Object.hasOwnPrproperty.call(database, key)){
//     //     const element = database[key];
//     // }
//     if (database[key].associate) database[key].associate(database);
// }

const Checklist = _Checklist(sequelize,DataTypes);
const Nota = _Nota(sequelize, DataTypes);
const Tag = _Tag(sequelize, DataTypes);
const Usuario = _Usuario(sequelize, DataTypes);

Checklist.belongsTo(Nota, {as: 'nota', foreignKey:'notaId'});
Nota.hasMany(Checklist, {as: 'checklists', foreignKey:'notaId'});
Nota.hasMany(Tag, {as: 'tags', foreignKey: 'notaId'});
Nota.belongsTo(Usuario, {as:'usuario', foreignKey: 'usuarioId'});
Tag.belongsTo(Nota,{as: 'nota', foreignKey: 'notaId'});

database = { Checklist, Nota, Tag, Usuario};


sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.database} realizada com sucesso`))
    .catch((error) => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;