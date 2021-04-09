const { Tag } = require('../models');
const controller = {};

controller.getTag = async (id = null) => {
    let result = [];
    if (id){
       result = await Tag.fundByPk(id);
    } else {
       result = await Tag.fundAll();
    }

    return result;
};

controller.save = async (tag) => {
    return await Tag.create(tag);
};
 
controller.edit = async (id, tag) => {
    await Tag.update(tag, {
        where: {id},
    });
    return await controller.getTag(id);
};

controller.remove = async (id) =>{
    try{
    return await Tag.destroy(id);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};



module.exports = controller;