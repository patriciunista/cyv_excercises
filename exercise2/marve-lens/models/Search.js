const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  searchTerm: {
    type: String,
    required: true
  },
  page: {
    type: Number,
    required: true
  },
  data: {
    type: {
      results: [{
        name: String,
        avatar: String,
        wikiUrl: String,
        details: {
          modified: String,
          description: String,
          numComics: Number,
          numSeries: Number,
          numStories: Number,
          numEvents: Number,
        }
      }],
      total: {
        type: Number,
        required: true
      }
    }
  }
});


const Search = mongoose.model("searches", SearchSchema);
module.exports = Search;