
const mongoose = require('mongoose');

const ReceipeSchema = new mongoose.Schema({
    title:String,
    des:String,
    ing:String,
    ins:String,
    url:String
})

module.exports = mongoose.model('receipe', ReceipeSchema);