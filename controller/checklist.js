const { Checklist } = require('../models/checklist');
const controller = {};

controller.getChecklist = async (id = null) => {
    let result = [];
    if (id){
       result = await Checklist.fundByPk(id);
    } else {
       result = await Checklist.fundAll();
    }

    return result;
};

controller.save = async (checklist) => {
    return await Checklist.create(checklist);
};
 
controller.edit = async (id, checklist) => {
    await Checklist.update(checklist, {
        where: {id},
    });
    return await controller.getChecklist(id);
};

controller.remove = async (id) =>{
    try{
    return await Checklist.destroy(id);
    } catch (error){
        console.log(error);
        throw new Error(error);
    }
};

module.exports = controller;