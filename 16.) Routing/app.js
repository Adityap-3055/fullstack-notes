const http = require('http')
// We can check req.url first, which url client is asking for, 
// then we can provide the data basis on that.
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    if (req.url === '/home' || req.url === '/') {
        res.end('This is home page')
    }

    else if (req.url === '/singer') {
        const singerList = {
            first: "Arijit",
            second: "Atif",
            third: "Pritam"
        }
        res.end(JSON.stringify(singerList))
    }

    else {
        res.end('Page not found!')
    }
})

server.listen(3000)
console.log("Server is up and running...");