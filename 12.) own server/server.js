// document: https://nodejs.org/dist/latest-v12.x/docs/api/http.html

// first require the http module
const http = require('http')

// we use the "http.createserver" for creating the server
// we need to write a function inside the "createserver" so
// to get the request and response 
const server = http.createServer(function (req, res) {
    res.end('Hey this is a respond')
})

// now the variable "server" need a port to listen for request data
// so I am giving port 3000 to listen in my case.
server.listen(3000)
console.log("server started....");



// better way of writing code, including error handling 

/*

const PORT = 3000;

server.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log(`Server started on port ${PORT}`);
    }
});

*/