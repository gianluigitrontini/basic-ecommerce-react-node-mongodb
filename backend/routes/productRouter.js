import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    try {
      //   await Product.deleteMany({});
      const createdProducts = await Product.insertMany(data.products);
      res.send({ createdProducts });
    } catch (error) {
      res.status(404).send(error.message);
    }
  })
);

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      //   await User.deleteMany({});
      const products = await Product.find({});
      res.send(products);
    } catch (error) {
      res.status(404).send(error.message);
    }
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  })
);

export default productRouter;
