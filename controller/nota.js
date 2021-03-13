const { Nota } = require('../models/nota');
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

module.exports = controller;