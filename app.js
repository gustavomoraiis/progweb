console.log('Minha primeira aplicação Node');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usuario = require('./rotas/usuario');
const checklist = require('./rotas/checklist');
const nota = require('./rotas/nota');
const tag = require('./rotas/tag');
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);
app.use('/checklist', checklist);
app.use('/nota', nota);
app.use('/tag', tag);
app.listen(port, () => {
    console.log('Aplicação rodando em http://localhost3000');
    // console.log(`Aplicação rodando em http://localhost${porta}`);
});