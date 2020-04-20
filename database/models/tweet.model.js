const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [140, 'Tweet trop long'],
        minlength: [1, 'Tweet trop court'],
        require: [true, 'Champ requis'],
    },
});

const Tweet = mongoose.model('tweets', tweetSchema);      //Transforme le schema de données en Modéle, 1er params:collection

module.exports = Tweet;