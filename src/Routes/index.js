import express from 'express';
import products from './products';
import brands from './brands';

const router = express.Router();

router.use('/products', products);
router.use('/brands', brands);

export default router;
