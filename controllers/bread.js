const router = require('express').Router()

const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.send(Bread)
})

router.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    const index = Number(arrayIndex)
    res.send(Bread[index])
})

module.exports = router