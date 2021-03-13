const { Usuario } = require('../models/usuario');
const controller = {};

controller.getUsuario = async (id = null) => {
    let result = [];
    if (id){
       result = await Usuario.fundByPk(id);
    } else {
       result = await Usuario.fundAll();
    }

    return result;
};

controller.save = async (usuario) => {
    return await Usuario.create(usuario);
};
 
controller.edit = async (id, usuario) => {
    await Usuario.update(usuario, {
        where: {id},
    });
    return await controller.getUsuario(id);
};

controller.remove = async (id) =>{
    try{
    return await Usuario.destroy(id);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};

module.exports = controller;