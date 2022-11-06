const express = require('express')
const cors = require('cors')


const app = express();

// ==> Rotas da API:
const routes = require('./routes/routes');



app.use('/api/', routes);

module.exports = app;