const Router = require("express").Router();
const auth = require("../routers/auth");
const provider = require('./provider')
const getprovider = require('../controller/provider')

Router.use("/auth", auth);
Router.use('/provider', getprovider);

Router.get("", (req, res) => {
  res.send("Welcome");
});

module.exports = Router;
