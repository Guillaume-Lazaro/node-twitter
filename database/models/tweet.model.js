const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxLength: [140, 'Tweet trop long'],
        minLength: [1, 'Tweet trop court'],
        require: [true, 'Champ requis'],
    },
});

const Tweet = mongoose.model('tweetSchema', tweetSchema);      //Transforme le schema de données en Modéle

module.exports = Tweet;