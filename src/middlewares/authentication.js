const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

const Authentication = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      const token = authHeader && authHeader.split(" ")[1];

      if (token == null) return res.status(401);

      jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.status(403);
        req.user = user;
      });
      next();
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized User" });
  }

};

module.exports = Authentication;
