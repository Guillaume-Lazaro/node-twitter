const mongoose = require('mongoose');
const schema = mongoose.schema();

const tweetSchema = schema({
    content: {
        type: String,
        maxLength: 140,
        minLength: 1,
        require: true
    }
})

const Tweet = mongoose.model('tweet');      //Transforme le schema de données en Modéle

module.exports = Tweet;