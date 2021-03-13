const { Usuario } = require('../models');
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
    
    return await Usuario.destroy({where: {id}});
};

module.exports = controller;