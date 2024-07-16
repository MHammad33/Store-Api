const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products</a>");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;