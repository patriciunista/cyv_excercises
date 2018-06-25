const express = require('express')
const app = express()
const cors = require('cors')
const apiRoutes = require('./api/routes')
const mongoose = require('mongoose')
const path = require('path')

// Enable cors, see: https://github.com/expressjs/cors
app.use(cors());

app.use('/', express.static("build"))

// We use the routes defined in /api/routes for better structure
app.use('/api', apiRoutes)

app.listen(3000, () => console.log('Example app listening on port 3001!'))