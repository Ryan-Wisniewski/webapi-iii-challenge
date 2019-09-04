const express = 'express';

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  `[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get('origin')}`
};

function validateUserId(res, req, next)  {
  
}

function validateUser(res, req, next)  {
  
}

function validatePost(res, req, next)  {
  
}

module.exports = server;
