import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 500;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Route

const URI = `mongodb+srv://${process.env.UserName}:${process.env.User_Password}@cluster0.gksews0.mongodb.net/?retryWrites=true&w=majority`;


// Database Connect
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server runnin on: ${port}`)))
  .catch((error) => console.log(`${error} did not connect`))


// API
app.use('/products', Productroute);