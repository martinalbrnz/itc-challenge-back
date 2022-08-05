import Products from '../Models/Products';

const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find();
    res
      .status(200)
      .json({
        message: 'All products are',
        data,
        error: false,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        message: 'An error has occured',
        data: {},
        error: true,
      });
  }
};

const getById = async (req, res) => {
  try {
    if (req.params.id.length !== 24) {
      res
        .status(400)
        .json({
          message: 'You must provide a valid id',
          data: {},
          error: true,
        });
    }
    const data = await Products.findById(req.params.id);
    if (!data) {
      res
        .status(404)
        .json({
          message: `Product with id:${req.params.id} not found`,
          data: {},
          error: true,
        });
    }
    res
      .status(200)
      .json({
        message: `Product with id:${req.params.id}`,
        data,
        error: false,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        message: 'An error has occured',
        data: error,
        error: true,
      });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    const data = await product.save();
    res
      .status(201)
      .json({
        message: 'Product has been created',
        data,
        error: false,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        message: 'An error has occured',
        data: error,
        error: true,
      });
  }
};

export default {
  getAllProducts,
  getById,
  createProduct,
};
