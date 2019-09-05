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

router.get('/:id', validatePostId, (req, res) => {
    const { id } = req.params
    // console.log(id)
    postDb.getById(id)
        .then(post => {
            res.status(200).json(post)
        //     if(id){
        //         res.status(200).json(post)
        //     } else {
        //         res.status(404).json({ message: 'Please enter a calid id' })
        //     }
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

//FIX THIS
router.put('/:id', validatePostId, (req, res) => {
    const { text, user_id } = req.body
    const { id } = req.params
    if ( !text || !user_id){
        return res.status(400).json({ error: 'Please enter valid information'})
    } else {
        postDb.update(id, req.body)
        console.log(req.body)
        .then(post => {
            res.status(200).json(post)
            // if(pot){
            //     res.status(200).json(post)
            // } else {
            //     res.status(404).json({ error: 'Invalid Id'})
            // }
        })
        .catch(err => {
            res.status(500).json({ error: err})
        })
    }

});

// custom middleware

//fix this too
//kinda works not the way the readme want/
function validatePostId(req, res, next) {
    const { id } = req.params
    console.log(req.params)
    // console.log(postDb.getById)
    // what would you compare id too?
    if(req.id = req.params.id){
        console.log('VALIDATED')
        next()
    } else {        
        console.log('asdf', req.id)
        res.status(400).json({ error: 'id does not match'})
    }
   
    

//dkfjfj
    // if(id != id){
    //     res.status(404).json({ error: 'Id not found'})
    // } else {
    // next()
    // } 

    // postDb.getById(id)
    //     .then(() => {
    //         next()
    //     })
};
// router.use(validatePostId) //for check
module.exports = router;