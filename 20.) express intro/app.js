/**
 * We are going to use express mostly for 3 reasons:
    Easy routing system
    Can use with many templating system
    Have a middleware framework
 */

// we use the same code of routing day 16 but using express framework
// we see that the long code is more readable and easy to add any route


// 1. first require express and create app constant using express()
//Creates an Express application. The express() function is a top-level function exported by the express module.
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.listen(3000)
console.log("Server listening on port 3000");