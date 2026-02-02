const authorizeAdmin = (req, res, next) => {
  const { token } = req.query;

  if (token !== 'admin123') {
    return res.status(401).json({
      error: 'Unauthorized',
    });
  }

  next();
};

module.exports = authorizeAdmin;