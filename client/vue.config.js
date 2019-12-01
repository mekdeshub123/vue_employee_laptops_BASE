module.exports = {
    devServer: {
      proxy: 'http://127.0.0.1:3000',
      overlay: {
        warnings: false,
        errors: false
      }
    }
  }