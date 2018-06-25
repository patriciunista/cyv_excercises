const md5 = require('md5')

// Better store this data into an env file, but for now, it's ok
const publicKey = '3763e54291acc7f3ccf2562191f34d8d'
const privateKey = 'ea987e76f92d6bf4a76bf46c1108a41a827af1ac'
const ts = '12199701'

const hash = md5(ts + privateKey + publicKey)

const apiKeyUrl = '?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;


module.exports = apiKeyUrl;