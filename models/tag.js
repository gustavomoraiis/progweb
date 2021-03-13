const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        notaId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'nota',
                key: 'id'
            }
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
     
    }, {
        tableName: 'tag',
        timestamps: false,
        }
    );

        Tag.associate = function(models) {
            this.belogsTo(models.Nota,{
                foreignKey: 'notaId',
            });
        };

    return Tag;
};