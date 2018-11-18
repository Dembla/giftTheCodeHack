const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
age: { type: String},
        province: {type: String},
        club: {type: String},
        event: {type:String}  
});

module.exports = mongoose.model('Post', postSchema);
