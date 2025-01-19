require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', require('./routes/main'));

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});
