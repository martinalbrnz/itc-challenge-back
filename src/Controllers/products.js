import Products from '../Models/Products';

const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find();

    res
      .status(200)
      .json({
        data,
        error: false,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        data: {},
        error: true,
      });
  }
};

export default {
  getAllProducts,
};
