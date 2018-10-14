const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: String,
        marketplace: String
    }
);

module.exports = mongoose.model('QuickProducts', productSchema, 'quickProducts');