const express = require('express')
const app = express()

app.get('/profile/:id', (req, res) => {
    console.log(req.params);
    res.send('Profile page of ' + req.params.id)
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.listen(3000)
console.log("Server listening on port 3000");