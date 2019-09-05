const express = require('express')
const userDb = require('../users/userDb')

const router = express.Router();
router.use(express.json());
//NEEDS WORK
router.post('/', (req, res) => {
    const { name } = req.body
    if( !name ) {
        res.status(400).json({ error: 'Invalid object'})
    } else {
        userDb.insert(req.body)
        .then(post => {
                res.status(200).json(post)
        })
        .catch( err => {
            res.status(500).json({ error: 'couldnt prosees request'})
        })
    }
});

router.post('/:id/posts', (req, res) => {

});
//l
router.get('/', (req, res) => {
    userDb.get()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({ error: err})
        })
});
//l
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
