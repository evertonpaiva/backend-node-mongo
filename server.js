const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/routes');
const app = express();
const dbConfig = require('./src/config/database');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    user: dbConfig.user,
    pass: dbConfig.pwd
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database', err, dbConfig);
    process.exit();
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3000, function(){
    console.log("Server iniciou com sucesso");
});