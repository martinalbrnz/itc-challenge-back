import express from 'express';
import brandsControllers from '../Controllers/brands';
import BrandsValidation from '../Validations/brands';

const router = express.Router();

router
  .get('/', brandsControllers.getAllBrands)
  .post('/', BrandsValidation, brandsControllers.createBrand);

export default router;
