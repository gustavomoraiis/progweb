const { Router } = require('express');
const router = Router();
// const checklists = [
//     {notaId: 1, descricao:'lorem1', concluida:'1'},
//     {notaId: 2, descricao:'lorem2', concluida:'0'},
//     {notaId: 3, descricao:'lorem3', concluida:'1'},
//     {notaId: 4, descricao:'lorem4', concluida:'1'}
// ];

router.get('/notaId?', (req, res) => {
    res.send({})
});

router.post('/', (req, res) => {
    res.send({})
});

router.put('/:notaId?', (req, res) => {
    res.send({})
});

router.delete('/:notaId?', (req, res) => {
    res.send({})
});


// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;