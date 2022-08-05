import express from 'express';
import productsControllers from '../Controllers/products';
import ProductsValidation from '../Validations/products';

const router = express.Router();

router
  .get('/:id', productsControllers.getById)
  .get('/', productsControllers.getAllProducts)
  .post('/', ProductsValidation, productsControllers.createProduct)
  .put('/:id', ProductsValidation, productsControllers.updateProduct)
  .delete('/:id', productsControllers.deleteProduct);

export default router;
