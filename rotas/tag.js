const { Router } = require('express');
const router = Router();
//const controller = require('../controller/defalut');
const tagController = require('../controller/tag_new');
//const { Tag } = require('../models/tag');
// const tags = [
//     {notaId: 1, nome:'aprovado'},
//     {notaId: 2, nome:'reprovado'},
//     {notaId: 3, nome:'aprovado'},
//     {notaId: 4, nome:'reprovado'}
// ];

// router.post('/', async (req, res) => {
//     try{
//     const{body} = req;

//     await controller.save(body);

//     res.send(tag);
//     }catch (error){
//         res.status(500).send({error})
//     }
// });
// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });

router.get('/:usuarioId', async (req, res) => {
    const {usuarioId} = req.params;

    const tags = await tagController.tagByUsuarioId(usuarioId);
    res.send(tags);
});

router.delete('/notaId/:id?', (req, res) => {
   try{
        const {notaId, id} = req.params;

        await controller.remove(notaId, id);

        res.send({id})
    } catch (error){
    res.status(500).send({error})
    }
});

module.exports = router;