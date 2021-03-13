const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Checklist = sequelize.define('Checklist',{
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
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        concluida: {
            type: DataTypes.BIT,
            allowNull: true
        }
    }, {
        tableName: 'checklist',
        timestamps: false,
        }
    );

        Checklist.associate = function(models) {
            this.belogsTo(models.Nota,{
                foreignKey: 'notaId',
            });
        };

    return Checklist;
};