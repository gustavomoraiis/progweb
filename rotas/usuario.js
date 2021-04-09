const { Router } = require('express');
const router = Router();
const controller = require('../controller/default');
const usuarioController = require('../controller/usuario');
// const { Usuario } = require('../models');
// const usuarios = [
//     {id: 1, nome: 'Henrique', email:'henrique@grupointegrado.com.br', senha:'mudar123456', avatar:'encurtador.com.br/vCPR9'},
//     {id: 2, nome: 'Gustavo', email:'gustavo@grupointegrado.com.br', senha:'mudar159951', avatar:'encurtador.com.br/vCPR9'},
//     {id: 3, nome: 'Morais', email:'morais@grupointegrado.com.br', senha:'mudar357789', avatar:'encurtador.com.br/vCPR9'},
//     {id: 4, nome: 'Silva', email:'silva@grupointegrado.com.br', senha:'mudar456951', avatar:'encurtador.com.br/vCPR9'}
// ];



router.post('/', async (req, res) => {
    try{
    const{body} = req;

    await controller.save(body);

    res.send(usuario);
    }catch (error){
        res.status(500).send({error})
    }
});

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

// router.get('/:id?', function(req, res){
//     let result;

//     if (req.params.id) {
//         result = usuarios.find((u) => req.params.id == u.id);
//     }else{
//         result = usuarios;
//     }
//     res.json(result);
// });


router.get('/:usuarioId', async (req, res) => {
    const {usuarioId} = req.params;

    const usuarios = await UsuarioController.tagByUsuarioId(usuarioId);
    res.send(usuarios);
});

router.delete('/usuarioId/:id?', (req, res) => {
   try{
        const {usuarioId, id} = req.params;

        await controller.remove(usuarioId, id);

        res.send({id})
    } catch (error){
    res.status(500).send({error})
    }
});
module.exports = router;