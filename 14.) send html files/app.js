// We can send html files to the client from the server
// first we create a server like we learned in lesson 12.

// For sending the html file we need the fs module which in built in node.
// We need to create stream using fs module. So that we can send the html file.
// Then we can send it using pipe and send the response.

const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    myReadStream.pipe(res)
})

server.listen(3000)
console.log("Server is listening on port 3000...");