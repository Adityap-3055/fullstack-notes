// What if we have to pass multiple data to the view
// We can create an object which contains all the data
const express = require('express')
const app = express()

app.set('views', './views');
// app.set('views', 'C:/Projects/Node practice/views');

app.set('view engine', 'ejs')

app.get('/profile/:id', (req, res) => {
    const data = {
        age: 23,
        job: 'software engineer',
        hobbies: ['cricket', 'football']
    }
    res.render('profile', { person: req.params.id, data: data })
})

app.listen(3000)
console.log("Server is listening on 3000...");