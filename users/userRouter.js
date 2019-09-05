const express = require('express')
const userDb = require('../users/userDb')

const router = express.Router();
router.use(express.json());

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    userDb.get()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({ error: err})
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    userDb.getById(id)
        .then(user => {
            if (user){
                res.status(200).json(user)
            } else {
            res.status(404).json({ error: 'User id not fpund'})
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'There was a problem with the Server get'})
        })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
