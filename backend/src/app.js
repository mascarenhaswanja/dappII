require('dotenv').config();

const express = require('express');
const createError = require('http-errors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const verifier = require('./routes/verifier');
const certificate = require('./routes/certificate');
const app = express();

app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use('/verifiers', verifier);
app.use('/certificate', certificate);

app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;