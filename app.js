const express = require('express');
const morgan = require('morgan');
const path = require('path');
const errorHandler = require('errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;  //process.env = variables d'environnement, on peut le définir dans package.json aussi
const routing = require('./routes');    //cherche tout dans le dossier routes

require('./database');

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.use(morgan("short"));   //short = format de log
app.use(express.static(path.join(__dirname, "public")));    //on utilise le dossier 'public'
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(routing);   //remplacer routing par index

if(process.env.NODE_ENV === 'development') {
    app.use(errorHandler());    //J'utilise errorHandler si on est en dév
} else {
    app.use((err,req,res,next) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 5000 ? null : err.message,
        });
    });
}

app.listen(PORT);