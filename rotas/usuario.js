const express = require('express');
const router = express.Router();
const usuarios = [
    {id: 1, nome: 'Henrique', email:'henrique@grupointegrado.com.br', senha:'mudar123456', avatar:'encurtador.com.br/vCPR9'},
    {id: 2, nome: 'Gustavo', email:'gustavo@grupointegrado.com.br', senha:'mudar159951', avatar:'encurtador.com.br/vCPR9'},
    {id: 3, nome: 'Morais', email:'morais@grupointegrado.com.br', senha:'mudar357789', avatar:'encurtador.com.br/vCPR9'},
    {id: 4, nome: 'Silva', email:'silva@grupointegrado.com.br', senha:'mudar456951', avatar:'encurtador.com.br/vCPR9'}
];

router.get('/:id?', function(req, res){
    let result;

    if (req.params.id) {
        result = usuarios.find((u) => req.params.id == u.id);
    }else{
        result = usuarios;
    }
    res.json(result);
});



// router.post('/', function(req, res){ 
//     console.log(req.body);
//     res.json({});
//  });


module.exports = router;