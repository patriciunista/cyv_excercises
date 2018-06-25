const express = require('express')
const app = express()
const apiRoutes = require('./api/routes')

app.get('/', (req, res) => res.send('Server api root, use "/api" to make requests!'))


// We use the routes defined in /api/routes for better structure
app.use('/api', apiRoutes)

app.listen(3001, () => console.log('Example app listening on port 3001!'))