const e = require('express')
const routes = e.Router()

routes.get('/', (req, res) => {
  return res.send('characters endpoint')
})

module.exports = routes