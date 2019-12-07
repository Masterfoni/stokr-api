const mongoose = require('mongoose');

const StockItem = mongoose.model('StockItem');

module.exports = {
    async list(req, res) {
        const { page = 1 } = req.query;
        const stockItems = await StockItem.paginate({}, { page, limit: 10 });

        return res.json(stockItems);
    },

    async retrieve(req, res) {
        const stockItem = await StockItem.findById(req.params.id);

        return res.json(stockItem);
    },

    async create(req, res) {
        const stockItem = StockItem.create(req.body);
        
        return res.json(stockItem);
    },

    async update(req, res) {
        const stockItem = await StockItem.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        });

        return res.json(stockItem);
    },

    async delete(req, res) {
        await StockItem.findByIdAndRemove(req.params.id);

        return res.send();
    }
};
