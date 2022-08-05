import Joi from 'joi';

const ProductsValidation = (req, res, next) => {
  const ProductSchema = Joi.object({
    name: Joi.string().required().messages({ 'string.empty': 'Name is a required field' }),
    description: Joi.string().messages({ 'string.empty': 'Description is a required field' }),
    image_url: Joi.string().uri(),
    price: Joi.number().min(0).precision(2).required(),
  });
  const validation = ProductSchema.validate(req.body);
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

export default ProductsValidation;
