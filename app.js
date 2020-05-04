const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

const { getHomepage } = require('./routes/index');

const port = process.env.PORT || 5000;

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', getHomepage);

app.listen(port, () => {
    console.log('Server running on port: ' + port);

});