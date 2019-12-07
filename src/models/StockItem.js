const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StockItemSchema = new mongoose.Schema({
    itemCode: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

StockItemSchema.plugin(mongoosePaginate);

mongoose.model('StockItem', StockItemSchema);