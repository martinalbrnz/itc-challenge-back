import Joi from 'joi';

const BrandsValidation = (req, res, next) => {
  const BrandSchema = Joi.object({
    name: Joi.string()
      .required()
      .messages({ 'string.empty': 'Name is a required field' }),
    logo_url: Joi.string().uri(),
  });
  const validation = BrandSchema.validate(req.body);
  if (validation.error) {
    return res
      .status(400)
      .json({
        message: 'There has been an error in the validation',
        data: validation.error.details,
        error: true,
      });
  }
  return next();
};

export default BrandsValidation;
