const express = require('express');
const routes = express.Router();

const StockItemController = require('./controllers/StockItemController');

routes.get('/stock-items', StockItemController.list);
routes.get('/stock-items/:id', StockItemController.retrieve);
routes.post('/stock-items', StockItemController.create);
routes.put('/stock-items/:id', StockItemController.update);
routes.delete('/stock-items/:id', StockItemController.delete);

module.exports = routes;