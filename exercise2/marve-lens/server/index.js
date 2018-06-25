const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Server api!'))

app.get('/api/:type/:args', (req, res) => {
  res.send(req.type + req.args)
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))