const bcrypt = require('bcrypt');
const { saltRounds } = require('../config')

module.exports = function(sequelize, DataTypes) {
    const Usuario = sequelize.define(
      'usuario',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: false
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {
        tableName: 'usuario',
        timestamps: false,
        hooks: {
          beforeCreate: (usuario) => {
            usuario.senha = bcrypt.hashSync(usuario.senha, saltRounds);
          },
        },
        defaultScope: {
          attributes: {
            exclude: ['senha'],
          },
        }
      }
    );
    
    Usuario.associate = function(models) {
      this.hasMany(models.Nota,{
          foreignKey: 'usuarioId',
      });
  };

    return Usuario;
  };