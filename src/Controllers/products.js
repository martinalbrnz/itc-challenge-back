import Products from '../Models/Products';

const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find();
    return res
      .status(200)
      .json({
        message: 'All products are',
        data,
        error: false,
      });
  } catch (error) {
    return res
      .status(400)
      .json({
        message: 'An error has occured',
        data: error,
        error: true,
      });
  }
};

const getById = async (req, res) => {
  try {
    if (req.params.id.length !== 24) {
      return res
        .status(400)
        .json({
          message: 'You must provide a valid id',
          data: {},
          error: true,
        });
    }
    const data = await Products.findById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({
          message: `Product with id:${req.params.id} not found`,
          data: {},
          error: true,
        });
    }
    return res
      .status(200)
      .json({
        message: `Product with id:${req.params.id}`,
        data,
        error: false,
      });
  } catch (error) {
    return res
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
    return res
      .status(201)
      .json({
        message: 'Product has been created',
        data,
        error: false,
      });
  } catch (error) {
    return res
      .status(400)
      .json({
        message: 'An error has occured',
        data: error,
        error: true,
      });
  }
};

const updateProduct = async (req, res) => {
  try {
    if (req.params.id.length !== 24) {
      return res
        .status(400)
        .json({
          message: 'You must provide a valid id',
          data: {},
          error: true,
        });
    }
    const data = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) {
      return res
        .status(404)
        .json({
          message: `Product with id:${req.params.id} not found`,
          data: {},
          error: true,
        });
    }
    return res
      .status(200)
      .json({
        message: 'Product has been updated',
        data,
        error: false,
      });
  } catch (error) {
    return res
      .status(400)
      .json({
        message: 'An error has occured',
        data: error,
        error: true,
      });
  }
};

const deleteProduct = async (req, res) => {
  try {
    if (req.params.id.length !== 24) {
      return res
        .status(400)
        .json({
          message: 'You must provide a valid id',
          data: {},
          error: true,
        });
    }
    const data = await Products.findByIdAndDelete(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({
          message: `Product with id:${req.params.id} not found`,
          data: {},
          error: true,
        });
    }
    return res.status(204);
  } catch (error) {
    return res
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
  updateProduct,
  deleteProduct,
};
