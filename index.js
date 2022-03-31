const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoute = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.json())
app.use('/posts', postsRoute)

app.listen(5500);