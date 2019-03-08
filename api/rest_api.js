const express = require('express');
const router = express.Router();
const usermodel = require('../models/user')
router.post('/user', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new usermodel(req.body)
    model._id = model.id
    usermodel.find({
            direction: 1
        }, {
            "isonroute": 1,
            "direction": 1
        })
        .then(doc => {
            console.log(doc[1].isonroute)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    model.save()
        .then(doc => {
            console.log(model.createdAt)
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
// GET
router.get('/user', (req, res) => {
    usermodel.find({

        })
        .then(doc => {
            console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    usermodel.find({
            _id: req.params.id
        })
        .then(doc => {
            console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.delete('/user/:id', (req, res) => {
    id_no = req.params.id
    console.log(id_no)
    usermodel.findOneAndRemove({
            _id: id_no
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.put('/user/:id', (req, res) => {
    usermodel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;