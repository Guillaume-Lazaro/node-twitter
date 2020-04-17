//Fichier de routage relatif aux tweets
const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');    //récupére le modéle des tweets
const { tweetList, tweetNew, tweetCreate } = require('../database/controllers/tweets.controller')

router.get('/', tweetList);
router.get('/new', tweetNew);
router.post('/', tweetCreate);

module.exports = router;