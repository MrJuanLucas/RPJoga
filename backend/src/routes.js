const express = require('express');

const UserController = require('./controllers/UserController');
const TableController = require('./controllers/TableController');
const SessionController = require('./controllers/SessionController');
const MediaController = require('./controllers/MediaController');

const routes = express.Router();

routes.post('/usersignin', UserController.create);

routes.post('/board', TableController.create);
routes.get('/board_index', TableController.index);
routes.get('/board_user', TableController.index_user);


routes.post('/session', SessionController.create);

routes.post('/media', MediaController.create);

module.exports = routes;