const express = require('express');

const UserController = require('./controllers/UserController');
const TableController = require('./controllers/TableController');
const SessionController = require('./controllers/SessionController');
const MediaController = require('./controllers/MediaController');
const CardController = require('./controllers/CardController');
const PlayerController = require('./controllers/PlayerController')

const routes = express.Router();

routes.post('/usersignin', UserController.create);

routes.post('/board', TableController.create);
routes.get('/board_index', TableController.index);
routes.get('/board_user', TableController.index_user);

routes.post('/session', SessionController.create);

routes.post('/media', MediaController.create);
routes.get('/media_index', MediaController.index);
routes.get('/media_user', MediaController.index_user);

routes.post('/player', PlayerController.create);

routes.post('/card', CardController.create);
routes.get('/card_index', CardController.index);

module.exports = routes;