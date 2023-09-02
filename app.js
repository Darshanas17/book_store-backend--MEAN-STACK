const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:iReJM5uIURdJxwAu@cluster0.si5davk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//mongodb+srv://admin:kHcfU7KPyqKilDSj@aba.og8yqcx.mongodb.net/?retryWrites=true&w=majority

  //password: kHcfU7KPyqKilDSj