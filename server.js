require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  path = require("path"),
  cors = require("cors"),
  port = process.env.PORT || 3000,
  routes = require("./routes/route"),
  app = express();
app.use(cors());

mongoose
  .connect("mongodb://localhost/algoliaSearch", { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, () => {
  console.log("Server is listening on Port:", port);
});
