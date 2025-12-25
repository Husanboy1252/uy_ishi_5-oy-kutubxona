const CustomErrorHandler = require("../utils/custom-error-handler")
const { AuthorValidator } = require("../validator/author.validation")

module.exports = function(req, res, next){
    const{} = AuthorValidator(req.body) 

    if(error){
      throw CustomErrorHandler.BadRequest(error.message)
    }
    next()
}