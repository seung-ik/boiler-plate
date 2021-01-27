const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://seungik:dkahsem04@boilerplate.ykbjn.mongodb.net/boiler-plate?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("mongoose ok");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("get ok");
});

app.listen(port, () => {
  console.log("connect port 5000");
});
