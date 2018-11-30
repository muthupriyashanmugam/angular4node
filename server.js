const express = require('express');
var path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.set('view engine', 'html');
app.get('/', function(req, res, next){
    res.render('./index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))