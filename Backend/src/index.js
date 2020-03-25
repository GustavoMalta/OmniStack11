const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.listen(3333);
app.use(cors());
app.use(express.json());
app.use(routes);