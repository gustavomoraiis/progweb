const { Router } = require('express');
const router = Router();
const controller = require('../controller/checklist');
const { Checklist } = require('../models/checklist');
// const checklists = [
//     {notaId: 1, descricao:'lorem1', concluida:'1'},
//     {notaId: 2, descricao:'lorem2', concluida:'0'},
//     {notaId: 3, descricao:'lorem3', concluida:'1'},
//     {notaId: 4, descricao:'lorem4', concluida:'1'}
// ];

router.get('/:id?', async (req, res) => {
   
    const {id} = req.params;

    const checklists = await controller.getChecklist(id);
    res.send(checklists);
});

router.post('/', async (req, res) => {
    try{
    const{body} = req;

    await controller.save(body);

    res.send(checklist);
    }catch (error){
        res.status(500).send({error})
    }
});

router.put('/:id?', async (req, res) => {
    try{
        const {body} = rep;
        const {id} = req.params;

        await controller.edit(id, body);

        res.send(checklist);
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