const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: String,
        quantity: Number,
        marketplace: String
    }
);

module.exports = mongoose.model('Products', productSchema);