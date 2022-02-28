const notFoundMiddleware = (req, res) =>
  res.status(400).send("route not exist");

export default notFoundMiddleware;
