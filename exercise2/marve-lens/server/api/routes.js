const express = require('express')
const routes = express.Router()
const charactersRoutes = require('./characters/endpoints')

// Here, as in the previous tree level, we use
// another subfolder to create the different endpoints for our
// requests to specific type of info
routes.use('/characters', charactersRoutes)

module.exports = routes