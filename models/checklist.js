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
            allowNull: false
        },
        concluida: {
            type: DataTypes.INTERGER,
            allowNull: false,
            defaultValue: 0,
        }
    }, {
        tableName: 'checklist',
        timestamps: false,
        }
    );

        Checklist.associate = function(models) {
            this.belongsTo(models.Nota,{
                foreignKey: 'notaId',
            });
        };

    return Checklist;
};