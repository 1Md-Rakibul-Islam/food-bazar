import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Route
import ProductRoute from './Routes/ProductRoute.js'



// Database Connect
const URI = `mongodb+srv://${process.env.User_Name}:${process.env.Password}@cluster0.gksews0.mongodb.net/${process.env.User_Name}?retryWrites=true&w=majority`;
console.log(URI);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server runnin on: ${port}`)))
  .catch((error) => console.log(`${error} did not connect`))


// API
app.use('/products', ProductRoute);