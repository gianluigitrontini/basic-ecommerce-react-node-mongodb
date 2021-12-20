import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.URI || 'mongodb://localhost/fullecommerce';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Server ready');
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Served on port ${PORT}`);
});
