const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/api/', (req, res) => {
    res.json({ "/api/": "You're here",
    "/api/tacos" : "Tacos API that works with json"});
})
app.post('/api/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Right. Here's your ${qty} tacos with ${meat}.`);
})
app.get('/api/*', (req, res) => {
    res.status(404);
    res.send("Whoa! I don't know what you're requesting");
})
app.listen(3000, () => {
    console.log("Listening on :3000");
})