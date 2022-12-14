/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

mongoose.connect(
  MONGODB_URI,
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database connected');
      app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
      });
    }
  },
);
