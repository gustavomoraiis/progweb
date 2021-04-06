const { Router } = require('express');
const router = Router();
const controller = require('../controller/tag');
const { Tag } = require('../models/tag');
// const tags = [
//     {notaId: 1, nome:'aprovado'},
//     {notaId: 2, nome:'reprovado'},
//     {notaId: 3, nome:'aprovado'},
//     {notaId: 4, nome:'reprovado'}
// ];

router.get('/:id?', async (req, res) => {
    const {id} = req.params;

    const tags = await controller.getTag(id);
    res.send(tags);
});

router.post('/', async (req, res) => {
    try{
    const{body} = req;

    await controller.save(body);

    res.send(tag);
    }catch (error){
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