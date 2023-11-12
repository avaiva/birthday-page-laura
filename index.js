const express = require("express");
const hbs = require("hbs");
const data = require("./data.json");
const path = require("path");

hbs.registerPartials(__dirname, './views/partials')

const page = express();

page.set('view engine', 'hbs');
page.set('views', path.join(__dirname, 'views'));
page.use(express.static(path.join(__dirname, 'public')));


page.get('/', (req, res) => {
    res.render('index',)
    // res.render('index', { wishers : data})
});

page.listen(3000, () => {
    console.log("Listening on 3000")
})

