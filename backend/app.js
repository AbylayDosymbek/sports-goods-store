const express = require('express');


require('./models/User');
require('./models/Category');
require('./models/Supplier');
require('./models/Product');
require('./models/Order');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5500',
  credentials: true
}));


app.use(express.json());


app.use(
  session({
    name: 'sports.sid',
    secret: 'sports-secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/sports_store'
    }),
    cookie: {
      httpOnly: true,
      secure: false,      // must be false for localhost
      sameSite: 'lax'     // IMPORTANT for cross-origin
    }
  })
);


app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/analytics', require('./routes/analytics.routes'));

app.get('/', (req, res) => {
  res.json({ message: 'Sports Goods Store API is running' });
});

module.exports = app;
