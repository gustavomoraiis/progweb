const express = require('express');
const router = express.Router();
const usuarios = [
    {id: 1, nome: 'Morais'},
    {id: 2, nome: 'Gustavo'},
];

router.get('/', function(req, res){ 
    res.json(usuarios);
});

router.get('/:id', function(req, res){ 
   const result = usuarios.find((u) => req.params.id == u.id);

   res.json(result);
});


module.exports = router;