const mongoose = require('mongoose');
const { app, PORT, MONGO_URL } = require('./app');

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });