const express = require('express')
const router = express.Router()

// create a JSON data array
let data = [
    { name: 'John',  content: 'I would really like a puppy for christmas.'},
    { name: 'Sally',  content: 'Can I please get a toy train?'},
];

// this end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// this end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
