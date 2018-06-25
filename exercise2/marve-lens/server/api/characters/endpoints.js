const e = require('express')
const routes = e.Router()
const request = require('request')
const apiKeyUrl = require('../keyUrl')
// const charactersData = require('../../mock/characters')

routes.get('/', (req, res) => {
  return res.send('characters endpoint')
})

routes.get('/:name', (req, res, next) => {

  // Get characters by name, parameter
  return request.get('https://gateway.marvel.com:443/v1/public/characters' + apiKeyUrl + '&nameStartsWith=' + req.params.name, {
    json: true
  }, (err, resp, data) => {
    if (err) return next(err)

    if (resp.statusCode === 200) {
      console.log(data.data.results)
      res.send({
        data: data.data.results
      })
    }

  })

})

module.exports = routes