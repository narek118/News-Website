const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: String,
  romantic: Number,
  original: Number,
  surprise: Number,
  joke: Number,
  description: String,
  picture: String
});


const Gift= mongoose.model('Gift', giftSchema);

module.exports = Gift;
