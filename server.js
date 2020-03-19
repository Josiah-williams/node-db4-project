const express = require('express');
const helmet = require('helmet');

// const db = require('./data/db-config.js');
const foodRouter = require('./router/recipe-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) =>{
    res.json('This is the defauls zone')
})
server.use('/api/', foodRouter)

module.exports = server;