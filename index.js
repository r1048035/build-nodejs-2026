import express from 'express';
import messagesRouter from './routes/api/v1/messages.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());

console.log('Environment Variables:', process.env);

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/nodejsles');

app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
