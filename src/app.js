const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler.middleware");




app.use(errorHandlerMiddleware);

module.exports = app;