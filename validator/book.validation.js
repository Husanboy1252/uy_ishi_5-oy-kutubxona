const Joi = require("joi");

exports.BookValidator = function (data) {
  try {
    const schema = Joi.object({
      title: Joi.string().min(3).pattern(new RegExp(`^[a-zA-Z]{1,150}$`)).required(),
      pages: Joi.number().min(10).integer.required(),
      published_year: Joi.number().integer.max(new Date().getFullYear).required(),
      image_url: Joi.string().min(15).required(),
      description: Joi.string().max(10000).required(),
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
      published_home: Joi.string().min(4).max(100).required(),
      author_id: Joi.string().max(24).required(),
    })

    return schema.validate(data)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
