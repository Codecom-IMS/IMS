const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;
import {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
  ACCESS_TOKEN_SECRET,
} from "./constants";

const Authentication = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      const token = authHeader && authHeader.split(" ")[1];

      if (token == null) return res.status(error.AUTHORIZATION_FAILED);

      jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.status(error.AUTHORIZATION_FAILED);
        req.user = user;
      });
      next();
    } else {
      res.status(401).json(API_STATUS_CODES.AUTHORIZATION_FAILED);
    }
  } catch (error) {
    console.log(error);
    res.status(401).json(RESPONSE_MESSAGES.AUTHORIZATION_FAILED);
  }
};

module.exports = Authentication;
