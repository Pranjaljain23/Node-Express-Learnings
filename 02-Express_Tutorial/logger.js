const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Testing')
    next()    // You send the middleware to the next by next() or you terminate the cycle by res.send()
}

module.exports = logger