const provideRouter = require("express").Router();
const { getProvidername } = require("../controller/provider");

provideRouter.get("/provider", getProvidername );

module.exports = provideRouter;
