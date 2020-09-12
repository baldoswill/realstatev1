const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebar settings 
app.set('view engine', 'hbs');
app.engine('hbs', exphbrs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}))

const persons = [{
    name: 'Jonathan', age: 22
}, {
    name: 'Larry', age: 52
}]

const fruits = ['apple', 'mango'];

app.get('/', (req, resp) => {
    resp.render("main", { fruits: fruits, name: 'sebastian' });
})

app.listen(3000, () => {
    console.log('Connecting to port 3000');
})
