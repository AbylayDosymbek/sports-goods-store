const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
require('dotenv').config();

require('./models/User');
require('./models/Category');
require('./models/Supplier');
require('./models/Product');
require('./models/Order');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/sports_store';
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5500';

app.use(cors({
    origin: FRONTEND_ORIGIN,
    credentials: true
}));

app.use(express.json());

app.use(
    session({
        name: 'sports.sid',
        secret: process.env.SESSION_SECRET || 'sports-secret',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: MONGO_URL }),
        cookie: {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        }
    })
);

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/suppliers', require('./routes/supplier.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/analytics', require('./routes/analytics.routes'));

app.get('/', (req, res) => {
    res.json({ message: 'Sports Goods Store API is running' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
});

module.exports = { app, PORT, MONGO_URL };
