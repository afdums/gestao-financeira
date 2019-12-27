const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const clientRouter = require('./routers/client.router.js');
app.use('/', clientRouter);

const nfseRouter = require('./routers/nfse.router.js');
app.use('/', nfseRouter);

module.exports = app;