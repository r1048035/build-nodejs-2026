import express from 'express';
import messagesRouter from './routes/api/v1/messages.js';
import mongoose from 'mongoose';
import "dotenv/config";

const app = express();
const port = 3000;

console.log(process.env);

app.use(express.json());

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/nodejsles');

app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
