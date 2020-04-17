const express = require('express');
// const api = require('./api');

//Routeur
const router = express.Router(); //instancié
// router.use('/api', api)

router.get('/', (req,res) => {
    res.render("home");
});

module.exports = router;