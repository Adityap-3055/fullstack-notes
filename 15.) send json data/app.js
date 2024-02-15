// We mostly us JSON data to pass client side
const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    // create a JSON object
    const singerList = {
        first: "Arijit",
        second: "Atif",
        third: "Pritam"
    }
    //JSON.stringify() is a common use of JSON to exchange data to/from a web server.
    res.end(JSON.stringify(singerList))
})

server.listen(3000)
console.log("Server is up and running...");