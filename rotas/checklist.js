const express = require('express');
const router = express.Router();
const checklists = [
    {notaId: 1, descricao:'lorem1', concluida:'1'},
    {notaId: 2, descricao:'lorem2', concluida:'0'},
    {notaId: 3, descricao:'lorem3', concluida:'1'},
    {notaId: 4, descricao:'lorem4', concluida:'1'}
];

router.get('/:notaId?', function(req, res){
    let result;

    if (req.params.notaId) {
        result = checklists.find((u) => req.params.notaId == u.notaId);
    }else{
        result = checklists;
    }
    res.json(result);
});



// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;