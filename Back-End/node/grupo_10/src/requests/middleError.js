module.exports = {
  async idError(err, _req, res, _next) {
    res.status(err.statusCode || 500).json({erro: err.message});
  }
}