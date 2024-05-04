import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import booksRoutes from "./routes/book.routes.js";

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

//create express app
const app = express();

//use middlewares
app.use(express.json());
app.use(cors());

//use routes
app.use("/api/books", booksRoutes);

//connect to mongoose
await mongoose.connect(URI).then(() => {
  console.log("Successfully conncted to database");
  //start the express app
  app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
  });
});
