const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Error: ", err.message);
  return res.status(500).json({ msg: "Something went wrong, please try again later." });
}

module.exports = errorHandlerMiddleware;