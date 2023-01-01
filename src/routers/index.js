const Router = require("express").Router();
const auth = require("../routers/auth");
const provideRouter = require("./provider");

Router.use("/auth", auth);
Router.use("/user", provideRouter);

Router.get("", (req, res) => {
  res.send("Welcome");
});

module.exports = Router;
