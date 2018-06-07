const express = require('express');
const router = express.Router();

var users = [
    {
        'id': 1,
        'name': 'John',
        'surname': 'Doe'
    },
    {
        'id': 2,
        'name': 'Jane',
        'surname': 'Doe'
    }
]

var findID = function(id) {
    var e = users.filter(function(e) {
        return e.id == id;
    })
    return e;
}

router.get('/', function(req, res) {
    res.json(users)
});

router.get('/:id', function(req, res) {
    var e = findID(req.params.id)
    console.log(e);
    if(e.length == 1) {
        res.json(e[0])
    }
    else {
        res.status(404).json({message: `user id '${req.params.id}' not found`})
    }
        
});

router.post('/', function(req, res) {
    var e = findID(req.body.id)
    if(e.length == 0) { 
        users.push(req.body)
        res.json(req.body)
    }
    else {
        res.json({message: `id '${req.body.id}' exist`})
    }
});

router.patch('/:id', function(req, res) {
    var e = findID(req.params.id)
    if(e.length == 1) {
        var e = e[0]
        var idx = users.indexOf(e)
        e.name = req.body.name
        e.surname = req.body.surname
        users[idx] = e
        res.json(users[idx])
    }
    else {
        res.status(404).json({message: `user id '${req.params.id}' not found`})
    }
    
});

router.delete('/:id', function(req, res) {
    var e = findID(req.params.id)
    if(e.length == 1) {
        var e = e[0]
        var idx = users.indexOf(e)
        users.splice(idx, 1)
        res.json(e)
    }
    else {
        res.status(404).json({message: `user id '${req.params.id}' not found`})
    }
});

module.exports = router;