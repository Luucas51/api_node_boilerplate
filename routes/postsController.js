const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, content) => {
        !err ? res.send(content) : res.send(err)
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, content) => {
        !err ? res.send(content) : res.send('Post new record : ' + err)
    });
});


router.put('/:id', (req, res) => {
   if(!ObjectID.isValid(req.params.id)){
       return res.status(400).send('update : ID unknow : ' + req.params.id)
    } else {
        const updateRecord = {
            author: req.body.author,
            message: req.body.message
        };
 
        PostsModel.findByIdAndUpdate(
            req.params.id,
            { $set: updateRecord },
            { new: true },
            (err, content) => {
                if(!err) res.send(content);
                else console.log('update error' + err);
            }
        )
    } 
});


router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('delete : ID unknow' + req.params)
    } else {
        PostsModel.findByIdAndRemove(
            req.params.id,
            (err, content) => {
                if(!err) res.send(content);
                else console.log('Delete error : ' + err)
            }
        )
    }
})



module.exports = router; 