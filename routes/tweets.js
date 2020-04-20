//Fichier de routage relatif aux tweets
const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');    //récupére le modéle des tweets
const { tweetList, tweetNew, tweetCreate, tweetDelete, tweetEdit, tweetUpdate } = require('../database/controllers/tweets.controller')

router.get('/', tweetList);     //équivaut à tweets/ ==> 'lié à index.js
router.get('/new', tweetNew);
router.post('/', tweetCreate);
router.delete('/:tweetId', tweetDelete);
router.get('/edit/:tweetId', tweetEdit)    //on récupére l'id du tweet et on appelle tweetEdit
router.post('/update/:tweetId', tweetUpdate)

module.exports = router;