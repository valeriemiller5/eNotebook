const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))