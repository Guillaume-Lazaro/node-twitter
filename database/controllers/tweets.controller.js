const Tweet = require('../models/tweet.model')
const {getTweets, createTweet, deleteTweet, getTweet, updateTweet} = require('../../queries/tweets.queries');

exports.tweetList = async (request,res,next) => {   //Fonction asynchrone, couplé avec await
    console.log('tweetList');
    try {
        console.log('try');
        const tweets = await getTweets(); //Fonctioon promesse
        res.render('tweets/tweet', { tweets});  //Se lance une fois que la promesse est fini
    } catch (err) {
        next(err);
    }
    //on appelle pas next() car on ne veut pas passer par d'autres middleware après
};

exports.tweetNew = (req,res,next) => {
    console.log('tweet new!');
    res.render("tweets/tweet-form", { tweet: { }}); //on lui passe cette objet vide pour pas avoir d'erreurs quand on fait le rendu (?)
};

exports.tweetCreate = async (req,res,next) => {
    try {
        console.log('tweet create');
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

exports.tweetDelete = async (req,res,next) => {
    try {
        const tweetId = req.params.tweetId;     //paramas pour récup le param dans l'url
        await deleteTweet(tweetId);             //supprime le tweet (fonction dans tweets.queries.js et dans le require en haut)
        const tweets = await getTweets();       //récupére tous les tweets
        res.render('tweets/tweet-list', { tweets });    //renvoie tous nouveau les tweets dans le rendu 
    } catch (err) {
        next(err);
    }
}

exports.tweetEdit = async (req,res,next) => {
    try {
        const tweetId = req.params.tweetId;
        const tweet = await getTweet(tweetId);      //TODO fonction pour retrouver un seul tweet (dans queries)
        res.render("tweets/tweet-form", { tweet })
    } catch(err) {
        next(err);
    }
}

exports.tweetUpdate = async (req,res,next) => {
    try {
        const tweetId = req.params.tweetId;
        const body = req.body;
        await updateTweet(tweetId, body);
        res.redirect('/tweets'); 
    } catch (err) {
        console.log(err);
        const errors = Object.keys(err.errors).map(
            (key) => err.errors[key].message
        );
        const tweetId = await getTweet(tweetId);
        res.status(400).render('tweets/tweet-form', {errors, tweet});
    }
}