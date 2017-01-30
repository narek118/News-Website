const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: Number,
  romantic: Number,
  original: Number,
  surprise: Number,
  joke: Number,
});


const Gift= mongoose.model('Gift', giftSchema);

module.exports = Gift;
