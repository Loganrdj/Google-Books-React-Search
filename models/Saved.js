const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedSchema = new Schema({
    // Add data types here
    title: {type: String, require: true},
    authors: {type: Array, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    link: {type: String, require: true}
})

const Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved;