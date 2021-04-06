const { Tag } = require('../models/tag');
const controller = {};

controller.delete = async (notaId, Id) =>{
    return await Tag.destroy({
        where: {
            id,
            notaId,
        }
    });
};

module.exports = controller;