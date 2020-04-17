//Fichier principal des routes:

const express = require('express');
const router = express.Router();    //instancie Router
const tweets = require('./tweets');   //recupére tweets.js
const Tweet = require("../database/models/tweet.model");

//Routeur
router.use('/tweets', tweets)             //
// router.get('/', (req,res) => {
//     res.render("home");
// });

// router.get('/tweet/new', (req,res) => {
//     res.render("tweets/tweet-form");    //Page de création de tweet
// });
// router.get('/', (req,res) => {
//     Tweet.find({})
//     .exec()
//     .then(tweets => res.render('tweets/tweet-list', {tweets}));
// })

module.exports = router;