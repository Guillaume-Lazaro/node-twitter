const mongoose = require("mongoose");

mongoose.connect('mongodb://nibelune:123456@127.0.0.1:27017/twitter?authSource=admin', { //@twitter? =>Utilise la base twitter, 'use twitter' dans le CLI mongo pour la créer
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>console.log("connected"))
.catch((err) => console.log(err))