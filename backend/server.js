
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://127.0.0.1:27017/sports_store')
  .then(() => app.listen(3000))
