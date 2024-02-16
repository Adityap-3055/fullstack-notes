// install ejs using npm install ejs
// To start with the ejs we need to first set our app to use it.
// we simply add this using: app.set('view engine', 'ejs')
const express = require('express')
const app = express()

app.set('views', './views');
// app.set('views', 'C:/Projects/Node practice/views');

app.set('view engine', 'ejs')

app.get('/profile/:id', (req, res) => {
    res.render('profile', { person: req.params.id })
})

app.listen(3000)
console.log("Server is listening on 3000...");