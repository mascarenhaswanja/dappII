const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;
const Schema = mongoose.Schema;

const VerifierSchema = Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        registration_date: {
            type: Date,
            required: true,
            default: new Date()
        }
    }
);

VerifierSchema.pre('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltRounds,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

VerifierSchema.path('name').validate(function (name) {
    return name.length <= 100;
}, 'Name max length must be 100');

module.exports = mongoose.model('Verifier', VerifierSchema);