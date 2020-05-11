const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        console.log("Finding All")
        db.Saved.find().then(
            dbModel => {
                res.json(dbModel)
            }
        ).catch(err => res.status(422).json(err))
    },

    findById: (req, res) => {
        db.Saved.findById(req.params.id).then(
            dbModel => {
                res.json(dbModel)
            }
        ).catch(err => res.status(422).json(err))
    },

    create: (req, res) => {
        console.log("Creating book");
        // db.Saved.create(req.body).then(
        //     dbModel => {
        //         res.json(dbModel)
        //     }
        // ).catch(err => res.status(422).json(err))
    },

    remove: (req, res) => {
        db.Saved.findById({_id: req.params.id}).then(
            dbModel => {
                dbModel.remove()
            }).then(
            dbModel => {
                res.json(dbModel)
            }
        ).catch(err => res.status(422).json(err))
    },

    update: (req, res) => {
        db.Saved.findOneAndUpdate({_id:req.params.id}, req.body).then(
            dbModel => {
                res.json(dbModel)
            }
        ).catch(err => res.status(422).json(err))
    }
}