const { Router } = require('express');
const router = Router();
const controller = require('../controller/default');
const controllerNota = require('../controller/nota');
const { Nota } = require('../models');
// const notas = [
//     {usuarioId: 1, titulo: 'Henrique', descricao:'', criadoEm:'20/01/2021', atualizadoEm:'25/02/2021'},
//     {usuarioId: 2, titulo: 'Gustavo', descricao:'', criadoEm:'23/01/2021', atualizadoEm:'20/02/2021'},
//     {usuarioId: 3, titulo: 'Morais', descricao:'', criadoEm:'28/01/2021', atualizadoEm:'26/02/2021'},
//     {usuarioId: 4, titulo: 'Silva', descricao:'', criadoEm:'02/02/2021', atualizadoEm:'19/02/2021'}
// ];

// router.get('/:id', async (req, res) => {
//     // const usuarios = controller.getUsuarios();
//     const {id} = req.params;

//     const nota = await controllerNota.getById(id);
//     res.send(nota);
// });

router.get('/usuario/:usuarioId', async(req, res) =>{
    const {usuarioId} = req.params;
    const {tag} = req.query;
    
    const notas = await controllerNota.getByUsuarioId(usuarioId, tag);

    res.send(notas || []);
});

router.post('/', async (req, res) => {
    try{
    const{body} = req;

   const nota = await controllerNota.save(body);

    res.send(nota);
    }catch (error){
        res.status(500).send({error})
    }
});

router.put('/:id?', async (req, res) => {
    try{
        const {body} = rep;
        const {id} = req.params;

        await controller.edit(id, body);

        res.send(nota);
    } catch (error){
        res.status(500).send({error})
    }
});

router.delete('/:id?', (req, res) => {
   try{
        const {id} = req.params;   
        await controller.remove(id);

        res.send({id})
    } catch (error){
    res.status(500).send({error})
    }
});


// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;