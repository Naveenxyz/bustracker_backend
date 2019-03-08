const express = require('express');
const router = express.Router();
const busmodel = require('../models/bus_status')
router.post('', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new busmodel(req.body)
    model._id = "bus-TEST"
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
router.get('', (req, res) => {
    busmodel.find({

        })
        .then(doc => {
            console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    busmodel.find({
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
router.delete('/:id', (req, res) => {
    id_no = req.params.id
    console.log(id_no)
    busmodel.findOneAndRemove({
            _id: id_no
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.put('/:id', (req, res) => {
    busmodel.findOneAndUpdate({
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