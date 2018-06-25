const e = require('express')
const routes = e.Router()
const charactersData = require('../../mock/characters')

routes.get('/', (req, res) => {
  return res.send('characters endpoint')
})

routes.get('/:name', (req, res) => {
  return res.send({
    data: charactersData.data.results.filter((character) => {
      return character.name.toLowerCase().startsWith(req.params.name)
    })
  })
})

module.exports = routes