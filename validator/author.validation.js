const Joi = require("joi");

exports.AuthorValidator = function (data) {
  try {
    const schema = Joi.object({
      full_name: Joi.string().min(3).pattern(new RegExp(`^[a-zA-Z]{1,50}$`)).required(),
      birth_year: Joi.number().integer().required(),
      death_year: Joi.string().max(new Date().getFullYear).required(),
      image_url: Joi.string().min(15).required(),
      bio: Joi.string().max(10000).required(),
      genre: Joi.string().lowercase().valid( "drama",
          "raman",
          "action",
          "fantastic",
          "comedy",
          "historical",
          "documontary",).required(),
      period: Joi.string().lowercase().valid( "temuriylar davri",
          "jadid adabiyoti",
          "savet davri",
          "mustaqillik davri",).required(),
      creativity: Joi.string().max(10000).required(),
      region: Joi.string().max(50).required(),
    })

    return schema.validate(data)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
