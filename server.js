const express = require('express');
const cors = requre('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/stokr', 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,  
    }
);
requireDir('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3001);