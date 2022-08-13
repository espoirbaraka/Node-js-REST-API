const express = require('express');
const app = express();
require('./models/dbConfig')

app.listen(5000,()=>console.log("Bienvenue"));