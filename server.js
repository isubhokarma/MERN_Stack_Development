const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

const db = require("./config/dev").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Mongoose Connected.."))
  .catch(err => console.log(err));

app.use("/api/items", items);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
