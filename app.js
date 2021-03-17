console.log('Minha primeira aplicação Node');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usuario = require('./rotas/usuario');
const checklist = require('./rotas/checklist');
const nota = require('./rotas/nota');
const tag = require('./rotas/tag');
// const port = 3000;
const fs = require ('fs');
const https = require('https');
const portaHttps = 443;

app.use(bodyParser.json());

app.use('/usuario', usuario);
app.use('/checklist', checklist);
app.use('/nota', nota);
app.use('/tag', tag);

const key = fs.readFileSync('certs/localhost-key.pem');
const cert = fs.readFileSync('certs/localhost.pem');

const credentials = { key, cert};

const httpsServer = https.createServer(credentials, app);

// app.listen(port, () => {
//     console.log('Aplicação rodando em http://localhost3000');
//     // console.log(`Aplicação rodando em http://localhost${porta}`);
// });

httpsServer.listen(portaHttps, () => {
    console.log(`API rodando seguramente na porta ${portaHttps}`);
});