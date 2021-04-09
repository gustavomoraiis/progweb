const { Nota, Checklist, Tag, sequelize } = require('../models');
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

// controller.save = async (nota) => {
//     return await Nota.create(nota);
// };
 
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

controller.save = async ({usuarioId, titulo = null, descricao = null, checklists = [], tags = []}) => {
    const transaction = await sequelize.transaction();
    try{
        let notaSalva = await Nota.create({
            usuarioId, titulo, descricao,
        },{
            transaction,
        });

        let checklistSalvo = [];
        if(checklists.length > 0){
            for(let checklist of checklists){
                checklist = {...checklist, notaId: notaSalva.id};

                const checklistSalvo = await Checklist.create(checklist,{
                    transaction,
                });
                    checklistsSalvos.push(checklistSalvo);
            }
        }

        let tagsSalvas = [];
        if(tags.length > 0){
            for (let tag of tags){
                tag = {...tag, notaId: notaSalva.id};

                const tagSalva = await Tag.create(tag,{
                    transaction,
                });

                tagsSalvas = [...tagsSalvas, tagSalva]; 
            }
        }

        notaSalva = {...notaSalva, checklists: checklistsSalvos, tags: tagsSalvas};
        await transaction.commit();

        return notaSalva;
    }catch (error) {
        await transaction.rollback();
    }
};

module.exports = controller;