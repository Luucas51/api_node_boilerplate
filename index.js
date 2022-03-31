const express = require('express');
const app = express();
require('./models/dbConfig');

const postsRoute = require('./routes/postsController');

app.use('/', postsRoute)

app.listen(5500);