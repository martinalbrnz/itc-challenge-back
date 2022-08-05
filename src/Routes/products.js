import express from 'express';
import productsControllers from '../Controllers/products';

const router = express.Router();

router
  .get('/', productsControllers.getAll);

export default router;
