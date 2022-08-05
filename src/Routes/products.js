import express from 'express';
import productsControllers from '../Controllers/products';

const router = express.Router();

router
  .get('/:id', productsControllers.getById)
  .get('/', productsControllers.getAllProducts)
  .post('/', productsControllers.createProduct);

export default router;
