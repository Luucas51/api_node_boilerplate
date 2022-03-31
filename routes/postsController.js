const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, content) => {
        !err ? res.send(content) : res.send(err)
    });
});

module.exports = router; 