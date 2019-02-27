const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const logins = require("../admin-credentials.js").logins;
const getTokenFromHeader = require('../utils/getTokenFromHeader.js');

module.exports = (req, res, next) => {
  try {
    const token = getTokenFromHeader(req);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next()
  } catch (err) {
    return res.status(401).json({
      message: 'Auth failed'
    })
  }
};

