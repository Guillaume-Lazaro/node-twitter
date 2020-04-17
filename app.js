const express = require('express');
const morgan = require('morgan');
const path = require('path');

require('./database');

const app = express();
const PORT = process.env.PORT || 3000;  //process.env = variables d'environnement, on peut le définir dans package.json aussi
const routing = require('./routes');    //cherche le index.js dans le dossier routes

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.use(morgan("short"));   //short = format de log
app.use(express.static(path.join(__dirname, "public")));    //on utilise le dossier 'public'
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(routing);

app.listen(PORT);