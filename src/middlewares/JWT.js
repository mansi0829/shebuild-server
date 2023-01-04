require("dotenv").config();
const JWT = require("jsonwebtoken");

async function generateToken(user) {
  const token = await JWT.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.Secret
  );
  return token;
}

async function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res.status(400).json({ error: "User not Authenticated!" });

  const token = authHeader.split(" ")[1];

  try {
    const verified = JWT.verify(token, process.env.Secret);
    req.user = verified;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
}

module.exports = { generateToken, checkToken };
