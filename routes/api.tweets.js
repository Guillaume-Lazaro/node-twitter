//Fichier de routage relatif aux tweets
const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');    //récupére le modéle des tweets

router.post('/', (req, res) => {
    const body = req.body;
    const newTweet = new Tweet(body);   //crée le tweet
    newTweet.save()     //sauvegarde le tweet
    .then((newTweet) =>res.redirect('/'))   //et redirige vers l'origine
    .catch(err => {
        const errors = Object.keys(err.errors)
        .map(key=>err.errors[key].message);
        res.status(400).render('tweets/tweet-form', {errors});
    })
});