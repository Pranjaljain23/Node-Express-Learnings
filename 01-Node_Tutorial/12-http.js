const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Hello welcome to home page")
    }
    if(req.url === '/about') {
        res.write(`<h1>Welcome history</h1>
                    <a href="/">test link</a>
                    <br>
                    <br>`)
        res.end("Hello welcome to about page")
    }
    res.end(`
    <h1>OOP'S!!!</h1>
    <p>Sorry we can't find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)