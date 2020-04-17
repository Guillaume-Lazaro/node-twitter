const router = require('express').Router(); //Instance de Router
const tweets = require('./api.tweets');

router.use("/tweets", tweets)

module.exports = router;