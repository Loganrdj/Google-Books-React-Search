const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Saved.find().then(
            dbModel => {
                res.json(dbModel)
            }
        ).catch(err => res.status(422).json(err))
    }
}