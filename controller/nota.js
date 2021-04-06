const { Nota, Checklist, Tag } = require('../models');
const controller = {};

controller.getNota = async (id = null) => {
    let result = [];
    if (id){
       result = await Nota.fundByPk(id);
    } else {
       result = await Nota.fundAll();
    }

    return result;
};

controller.save = async (nota) => {
    return await Nota.create(nota);
};
 
controller.edit = async (id, nota) => {
    await Nota.update(nota, {
        where: {id},
    });
    return await controller.getNota(id);
};

controller.remove = async (id) =>{
    try{
    return await Nota.destroy(id);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};
// ---------------------------------
controller.getById = async(id) => {
    return await Nota.findOne({
        where:{
            id, 
        },
        include: [
            {
                model: Checklist,
                as: 'checklists',
            },
            {
                model: Tag,
                as: 'tags',
            }
        ]
    });
};
controller.getByUsuarioId = async(usuarioId, tagName = null) => {
    let where = null;
    let required = false;
    if(tagName){
        where = {nome: tagName};
        required = true;
    }
    return await Nota.findAll({
        where: {
            usuarioId
        },
        include: [
            {
                model: Checklist,
                as: 'checklists',
            },
            {
                model: Tag,
                as: 'tags',
                where,
                required,
            },
        ],
    });
};

controller.save = async ({usuarioId, titulo, descricao, checklists, tags}) => {

};

module.exports = controller;