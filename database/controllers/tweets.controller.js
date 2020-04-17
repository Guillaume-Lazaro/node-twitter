const Tweet = require('../models/tweet.model')
const {getTweets, createTweet} = require('../../queries/tweets.queries');

exports.tweetList = async (request,res,next) => {   //Fonction asynchrone, couplé avec await
    try {
        const tweets = await getTweets(); //Fonctioon promesse
        res.render('tweets/tweet-list', { tweets})  //Se lance une fois que la promesse est fini
    } catch (err) {

    }
    //on appelle pas next() car on ne veut pas passer par d'autres middleware après
};

exports.tweetList = 

exports.tweetNew = (req,res,next) => {
    res.render("tweets/tweet-form");
};

exports.tweetCreate = async (req,res,next) => {
    try {
        const body = req.body;
        // const newTweet = new Tweet(body);   //crée le tweet
        await createTweet(body);
        res.redirect('/tweets');
    } catch(err) {
        const errors = Object.keys(err.errors)
        .map(key=>err.errors[key].message);
        res.status(400).render('tweets/tweet-form', {errors});
    }
}