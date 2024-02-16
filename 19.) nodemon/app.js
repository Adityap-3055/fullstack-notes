/*

We can easily end this re-run process by using a package call nodemon. So how to use this nodemon ?

Check out the docs first about the nodemon. https://www.npmjs.com/package/nodemon

npm install -g nodemon will installed nodemon, but what is the -g ? Up until now we never saw something like this right ? -g means global. Installing globally means we can use this package from any npm project.

There is two way we can now use the nodemon. Easiest one is — just simply write nodemon in the console and it will start the server.

Nodemon is smart enough to point app.js when you just call it using nodemon, you can write nodemon app.js too.

The second way to use script on the package.json file. We are making a start script using nodemon
Now write npm start in console and we’re getting the exact same thing like before.

*/