const express = require('express')
const app = express()
const cors = require('cors')
const apiRoutes = require('./api/routes')

// Connection to Database
const dbConnection = require('./database/connection').connect('mongodb://localhost:27017/marvelens')

// Enable cors, see: https://github.com/expressjs/cors
app.use(cors());

// Use the build directory for production
app.use('/', express.static("build"))

// We use the routes defined in /api/routes for better structure
app.use('/api', apiRoutes)

app.listen(3001, () => console.log('Server runing on port 3001!'))