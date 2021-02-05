const express = require('express');
const routes = express.Router();
const listUsers = require('./controllers/getRequest');
const postUser = require('./controllers/postRequest');

routes.get('/', listUsers.listUsers);
routes.post('/user/register', postUser.postUser)

module.exports = routes;