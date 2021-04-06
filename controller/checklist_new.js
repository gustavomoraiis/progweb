const { Checklist } = require('../models/checklist');
const controller = {};

controller.remove = async (notaId, id) =>{
    try{
        return await Checklist.destroy({
            where: {

            },
        });
    } catch (error);
};