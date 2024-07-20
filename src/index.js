const express = require('express')
const bodyParser = require('body-parser')

// Taking PORT from env file defined inside server.config file
const { PORT } = require('./config/server.config')

const apiRouter = require('./routes')
const BaseError = require('./errors/base.error')
const errorHandler = require('./utils/errorHandler')
const app = express()

// Specifying the type of requests which can come to server, so that it can know how to handle the request.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())

// If any request comes and route starts from /api, then we map it to apiRouter
app.use('/api', apiRouter);

// Ping check if the problem service is alive
app.get('/ping', (req, res)=>{
    return res.json({message: 'Problem Service is alive.'})
})

// last middleware if any error comes
app.use(errorHandler);

// Listening to the defined PORT 
app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`);
})