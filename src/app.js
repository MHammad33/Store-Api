const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;