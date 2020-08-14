const validator = require('express-validator');

exports.login = [

    validator
        .body('name')
        .isLength({ min: 1 })
        .trim()
        .withMessage('Name must be specified.')
        .isAlphanumeric()
        .withMessage('Name has non-alphanumeric characters.')
        .escape(),
    validator
        .body('password')
        .isLength({ min: 1 })
        .trim()
        .withMessage('Password must be specified.')
        .escape()
]