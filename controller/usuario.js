const { Usuario, Nota } = require('../models');
const controller = {};

// controller.getUsuario = async (id = null) => {
//     let result = [];
//     if (id){
//        result = await Usuario.fundByPk(id);
//     } else {
//        result = await Usuario.fundAll();
//     }

//     return result;
// };

// controller.save = async (usuario) => {
//     return await Usuario.create(usuario);
// };
 
controller.edit = async (id, usuario) => {
    await Usuario.update(usuario, {
        where: {id},
    });
    return await controller.getUsuario(id);
};

controller.save = async ({titulo = null, descricao = null, checklists = [], tags = []}) => {
    const transaction = await sequelize.transaction();
    try{
        let notaSalva = await Nota.create({
            titulo, descricao,
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
        let checklistEditados = [];
        if(checklists.length > 0){
            for(let checklist of checklists){
                checklist = {...checklist, notaId: notaSalva.id, usuarioId: usuario};

                const checklistEditados = await Checklist.edit(checklist,{
                    transaction,
                });
                    checklistsEditadoss.push(checklistEditados);
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

        let tagsEditadas = [];
        if(tags.length > 0){
            for (let tag of tags){
                tag = {...tag, notaId: notaEditada.id};

                const tagEditada = await Tag.create(tag,{
                    transaction,
                });

                tagsEditadas = [...tagsEditadas, tagEditada]; 
            }
        }
        notaEditada = {...notaEditada, checklists: checklistsEditados, tags: tagsEditadas};

        await transaction.commit();

        return notaSalva, notaEditada;
    }catch (error) {
        await transaction.rollback();
    }
};

controller.remove = async (id, usuario) =>{
    try{
        return await Usuario.destroy({
            where: {
                id,
                usuario,
            },
        });
    } catch (error){
        throw new Error(error);
    };
};
module.exports = controller;