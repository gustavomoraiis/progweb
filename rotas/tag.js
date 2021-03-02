const { Router } = require('express');
const router = Router();
// const tags = [
//     {notaId: 1, nome:'aprovado'},
//     {notaId: 2, nome:'reprovado'},
//     {notaId: 3, nome:'aprovado'},
//     {notaId: 4, nome:'reprovado'}
// ];

router.get('/notaId?', (req, res) => {
    res.send({});
});

router.post('/', (req, res) => {
    res.send({});
});

router.put('/:notaId?', (req, res) => {
    res.send({});
});

router.delete('/:notaId?', (req, res) => {
    res.send({});
});



// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;