require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  path = require("path"),
  port = process.env.PORT || 3000,
  routes = require("./routes/route"),
  app = express();

mongoose
  .connect("mongodb://localhost/algoliaSearch", { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.listen(port, () => {
  console.log("Server is listening on Port:", port);
});
