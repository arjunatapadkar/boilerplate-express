let express = require('express');
let app = express();


console.log("Hello World");




app.get('/', (req, res) => {
    res.send('Hello world')
})



























 module.exports = app;
