console.log('Minha primeira aplicação Node');

const express = require('express');
const bodyParser = require('body-parser');
const usuario = require('./rotas/usuario');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);

app.listen(port, () => {
    console.log('Aplicação rodando em http://localhost:3000');
});