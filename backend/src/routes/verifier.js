const express = require('express');

const verifier_controller = require('../controllers/verifierController');
const { checkLogin } = require('../middlewares/auth');
const verifier_validator = require('../middlewares/verifierValidator');
const { validate } = require('../middlewares/validate');

const routes = express.Router();

routes.get('/', verifier_controller.index);

routes.get('/index', verifier_controller.index);

routes.post('/login', verifier_validator.login, validate, verifier_controller.login);

module.exports = routes;