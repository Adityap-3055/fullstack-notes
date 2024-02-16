// install ejs using npm install ejs
/*
To start with the ejs first we need to set our app to use it. We can simply add this using app.set('view engine', 'ejs')

This app.set('view engine', 'ejs') will look into views folder on the same path. So we need to create views folder for writing those frontend templates.
We are starting the profile page. So we’ll create a profile.ejs file inside the views folder.
Just create a basic html inside of profile.ejs file.

We’ll use res.render method to render the file.

It’s already know where to look. So we’ve render the files, but we didn’t pass our data to the html. How to do that ?

We can send a object in render method while rendering the template and use that object to get the value of username.

Now we can easily access the value using <%= person %> in the profile.ejs file
See the result in frontend
*/
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