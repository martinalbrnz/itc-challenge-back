import Brands from '../Models/Brands';

const getAllBrands = async (req, res) => {
  try {
    const data = await Brands.find();
    return res
      .status(200)
      .json({
        message: 'All brands are',
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

const createBrand = async (req, res) => {
  try {
    const brand = new Brands(req.body);
    const data = await brand.save();
    return res
      .status(201)
      .json({
        message: 'Brand has been created',
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

export default {
  getAllBrands,
  createBrand,
};
