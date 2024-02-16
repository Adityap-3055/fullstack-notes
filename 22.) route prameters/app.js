/**
 * Up until now we never passed any id with our route. What if we need to go to a specific profile ?

Like – profile/10 How we can load different using those id ?

We can get what user request after profile, how we can get it ? In this case they request for the 10 right ?

To catch the 10 we need to make a specific route like ‘/profile/:id’ this id will catch what request send after profile. So how to catch it ?

Just use req.params.id this will give us the id
 */


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