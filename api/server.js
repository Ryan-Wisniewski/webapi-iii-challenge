const express = require('express');
const postRouter = require('../posts/postRouter')
const userRouter = require('../users/userRouter')

const server = express();

server.use(express.json())

server.use('/post', postRouter)
server.use('/user', userRouter)

server.get('/', (req, res) => {
  res.send({ sanity: 'check'})
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get('origin')}`
    )

  next()
};

server.use(logger)


module.exports = server;
