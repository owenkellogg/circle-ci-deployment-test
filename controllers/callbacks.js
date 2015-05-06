
module.exports = function(models, lib) {

  return {
    create: function(req, res, next) {
      console.log('callback received', req.body)
      res.status(200).send({
        success: true
      })
    }
  }
}

