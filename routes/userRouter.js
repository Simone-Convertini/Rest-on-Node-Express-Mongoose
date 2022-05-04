const express = require('express');
const {readUser, createUser, readUsers} = require('./../controllers/userController');
const dataRouter = express.Router();

dataRouter
    .route('/')
    .get(readUser)
    .post(createUser)
dataRouter
    .route('/:id')
    .get(readUsers);

module.exports = dataRouter;