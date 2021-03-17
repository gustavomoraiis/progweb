const controller = {};

controller.getById = async (model, id) => {
    return await model.findByPk(id);
};

controller.