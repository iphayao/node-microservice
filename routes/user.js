const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json({user: 'hello world'})
});

router.get('/:id', function(req, res) {
    res.json(req.params)
});

router.post('/', function(req, res) {
    res.json({message: 'add user complated'})
});

router.patch('/:id', function(req, res) {
    res.json({message: `user ${req.params.id} modified`})
});

router.delete('/:id', function(req, res) {
    res.json({message: `user ${req.params.id} deleted`})
});

module.exports = router;