const express = require('express');
const router = express.Router();
const notas = [
    {usuarioId: 1, titulo: 'Henrique', descricao:'', criadoEm:'20/01/2021', atualizadoEm:'25/02/2021'},
    {usuarioId: 2, titulo: 'Gustavo', descricao:'', criadoEm:'23/01/2021', atualizadoEm:'20/02/2021'},
    {usuarioId: 3, titulo: 'Morais', descricao:'', criadoEm:'28/01/2021', atualizadoEm:'26/02/2021'},
    {usuarioId: 4, titulo: 'Silva', descricao:'', criadoEm:'02/02/2021', atualizadoEm:'19/02/2021'}
];

router.get('/:usuarioId?', function(req, res){
    let result;

    if (req.params.usuarioId) {
        result = notas.find((u) => req.params.usuarioId == u.usuarioId);
    }else{
        result = notas;
    }
    res.json(result);
});



// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;