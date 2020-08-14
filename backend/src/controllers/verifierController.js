const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Verifier = require('../models/verifier');

exports.index = (req, res, next) => {

    Verifier
        .find()
        .sort([['name', 'ascending'], ['name']])
        .exec(function (err, verifiers) {
            if (err) { return next(err); }
            res.json(verifiers);
        });
}

exports.create = (req, res, next) => {

    const distributor = new Verifier(
        {
            name: req.body.name,
            password: req.body.password,
            registration_date: req.body.registration_date
        });

    distributor.save(function (err, doc) {
        if (err) { return next(err); }
        res.status(201).json({ id: doc.id, message: `Verifier ${doc.name} created successfully` });
    });
}

exports.login = async (req, res) => {

    const name = req.body.name;
    const password = req.body.password;

    console.log("Name ",name);
    console.log("Password ",password);
    if (!name || !password) {
        return res.status(401).json({ message: 'Invalid name/password' });
    }

    const verifier = await Verifier.findOne({ name });
    if (!verifier) {
        return res.status(401).json({ message: 'Invalid name' });
    }

    const isMatch = await bcrypt.compare(password, verifier.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const verifierJWT = jwt.sign({ name }, process.env.PRIVATE_KEY, { algorithm: 'HS256' });

    res.status(200).json({ verifierJWT, name: verifier.name });
}
