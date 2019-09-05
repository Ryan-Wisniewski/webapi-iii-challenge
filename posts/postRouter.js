const express = require('express')
const postDb = require('../posts/postDb')

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    postDb.get()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Server couldnt retrieve get data'})
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    postDb.getById(id)
        .then(post => {
            if(id){
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Please enter a calid id' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err})
        })
});

router.delete('/:id', validatePostId, (req, res) => {
    const { id } = req.params
    postDb.remove(id)
    .then( post => {
        if(id){
            res.status(204).end()
        } else {
            res.status(404).json({ message: 'Please enter a calid id' })
        }
    })
    .catch( err => {
        res.status(500).json({ error: 'There was an error proccessing the request'})
    })
})

router.put('/:id', (req, res) => {
    const { text, userId } = req.body
    if ( !text || !userId){
        return res.status(400).json({ errer: 'Please enter valid information'})
    } else {

    }

});

// custom middleware

function validatePostId(req, res, next) {
    const { id } = req.params
    console.log(id)
    next()
};
router.use(validatePostId)
module.exports = router;