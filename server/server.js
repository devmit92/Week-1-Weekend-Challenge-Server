const express = require('express');
const app = express();

app.use(express.static('server/public'));

app.listen(7000, function() {
    console.log('Hey server is up and running!');
});