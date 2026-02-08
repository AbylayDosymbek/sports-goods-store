exports.requireAuth = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

exports.requireRole = (role) => (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    if (req.session.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};

