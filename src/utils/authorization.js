const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../constants/constants");

const Authorization = (req, res) => {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      const token = authHeader && authHeader.split(" ")[1];

      if (token == null) return res.json({status:false});

      jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.json({status:false});
        res.json({status:true,role:user.role})
      });
    } else {
      res.json({ status:false });
    }
};

module.exports = Authorization
