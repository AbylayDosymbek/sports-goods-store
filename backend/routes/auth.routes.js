const router = require('express').Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  req.session.userId = user._id;
  req.session.role = user.role;

  res.json({ message: 'Logged in' });
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'Logged out' });
  });
});

router.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

module.exports = router;
