var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('hello World');
});

app.listen(process.env.PORT || 3000);
console.log('app started and listening on port 3000');
module.exports = app;

