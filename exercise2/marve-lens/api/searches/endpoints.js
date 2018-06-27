const e = require('express')
const routes = e.Router()
const Search = require('../../models/Search')


routes.get('/', (req, res) => {
  return res.send('searches endpoint')
})


routes.get('/:term', (req, res, next) => {
  const reqSearchTerm = (req.params.term).toLowerCase();
  // Search in the database for the search
  return Search.aggregate([{
      $match: {
        searchTerm: new RegExp(reqSearchTerm),
        "data.total": {
          $gt: 0
        }
      }
    },
    {
      $group: {
        _id: '$searchTerm'
      }
    },
    {
      $limit: 5
    },
    {
      $sort: {
        _id: 1
      }
    }
  ]).then((searches) => {

    if (searches !== null) {
      return res.send({
        data: [
          ...searches
        ]
      });
    }
  })

})

module.exports = routes