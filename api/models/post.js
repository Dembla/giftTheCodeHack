const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
        age: { type: String},
        province: {type: String},
        club: {
            name: {type: String}
        },
        event: {
            location: {type: String},
            type: {type: String}
        },
    })

    module.exports = mongoose.model('Post', postSchema);