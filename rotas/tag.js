const express = require('express');
const router = express.Router();
const tags = [
    {notaId: 1, nome:'aprovado'},
    {notaId: 2, nome:'reprovado'},
    {notaId: 3, nome:'aprovado'},
    {notaId: 4, nome:'reprovado'}
];

router.get('/:notaId?', function(req, res){
    let result;

    if (req.params.notaId) {
        result = tags.find((u) => req.params.notaId == u.notaId);
    }else{
        result = tags;
    }
    res.json(result);
});



// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;