const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {},
  price: {}
})

module.exports = mongoose.model('Order', orderSchema)