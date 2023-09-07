const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  img: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
});

const Pokemon = mongoose.model('pokemon',pokemonSchema)

module.exports = Pokemon