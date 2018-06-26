const e = require('express')
const routes = e.Router()
const request = require('request')
const apiKeyUrl = require('../keyUrl')
const Search = require('../../models/Search')

/**
 * Function that returns the wiki url of a character or undefined if
 * is not present.
 * @param character character object that contains the info
 */
function getWikiUrl(character) {
  let urlObject = character.urls.filter(url => {
    return url.type === 'wiki'
  })[0]

  return urlObject !== undefined ? urlObject.url : undefined
}


routes.get('/', (req, res) => {
  return res.send('characters endpoint')
})


routes.get('/:name/page/:offset', (req, res, next) => {

  // Search in the database for the search
  return Search.findOne({
    searchTerm: req.params.name,
    page: req.params.offset
  }).then((search) => {
    console.log(search)
    if(search !== null) {
      return res.send({
        data: {
          ...search.data
        }
      });
    } else {
      // If we don't find search term in our db, use Marvel api
      return request.get(
        'https://gateway.marvel.com:443/v1/public/characters' +
        apiKeyUrl +
        '&nameStartsWith=' + req.params.name +
        '&offset=' + parseInt(req.params.offset) * 20, {
          json: true
        }, (err, resp, data) => {
          if (err) return next(err)
    
          if (resp.statusCode === 200) {
    
            // Format our data to send what we need
            let characters = data.data.results.map(character => {
              return {
                name: character.name,
                avatar: character.thumbnail.path + '.' + character.thumbnail.extension,
                wikiUrl: getWikiUrl(character),
                details: {
                  modified: character.modified,
                  description: character.description,
                  numComics: character.comics.available,
                  numSeries: character.series.available,
                  numStories: character.stories.available,
                  numEvents: character.events.available
                }
              };
            });
    
            const formattedData = {
              data: {
                results: [...characters],
                total: data.data.total
              }
            }
    
            res.send(formattedData)
    
            // Save the results to the database
            return Search.insertMany([{
              searchTerm: req.params.name,
              page: req.params.offset,
              ...formattedData
            }]).then((search) => {
              console.log("search results saved")
            })
    
          }
    
        })

    }
  })


})

module.exports = routes