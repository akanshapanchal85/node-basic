const http = require('http')
const routes=require('./routes')
const routesFunction = require('./routes')

const server=http.createServer(routesFunction)

server.listen(5500)