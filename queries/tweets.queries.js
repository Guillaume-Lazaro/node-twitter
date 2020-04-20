const Tweet = require('../database/models/tweet.model');
// const {getTweets, createTweet} = require('../queries/tweets.queries');

exports.getTweets = () => {
    return Tweet.find({}).exec()
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}

exports.deleteTweet = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.getTweet = (tweetId) => {       //récupére un seul tweet grace à l'id
    return Tweet.findOne({_id: tweetId}).exec();    //envoie sous promesse
}

exports.updateTweet = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, {$set: tweet}, { runValidators: true }) //Validators de mongoose
}