const Tweet = require('../database/models/tweet.model');
const {getTweets, createTweet} = require('../queries/tweets.queries');

exports.getTweets = () => {
    return Tweet.find({}).exec()
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}