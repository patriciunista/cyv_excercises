const e = require('express')
const routes = e.Router()
const request = require('request')
const apiKeyUrl = require('../keyUrl')
// const charactersData = require('../../mock/characters')

routes.get('/', (req, res) => {
  return res.send('characters endpoint')
})

routes.get('/:name/page/:offset', (req, res, next) => {

  // Get characters by name, parameter
  return request.get(
    'https://gateway.marvel.com:443/v1/public/characters' +
    apiKeyUrl +
    '&nameStartsWith=' + req.params.name +
    '&offset=' + parseInt(req.params.offset) * 20, {
      json: true
    }, (err, resp, data) => {
      if (err) return next(err)

      if (resp.statusCode === 200) {
        res.send(data)
      }

    })

})

module.exports = routes