const { Router } = require('express');
const router = Router();
const controller = require('../controller/default');
const { Usuario } = require('../models');

router.put('/:id?', async (req, res) => {
    try{
        const {body} = rep;
        const {id} = req.params;

        await controller.edit(id, body);

        res.send(usuario);
    } catch (error){
        res.status(500).send({error})
    }
});