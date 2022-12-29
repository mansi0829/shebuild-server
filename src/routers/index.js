const Router = require("express").Router();
const auth = require("../routers/auth");

Router.use("/auth", auth);

Router.get("", (req, res) => {
  res.send("Welcome");
});

module.exports = Router;
