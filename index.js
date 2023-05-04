const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
const data = require("./data/data.json");

app.get("/home", (req, res) => {
  res.send(data);
});
app.get("/home/:id", (req, res) => {
  const recefiData = data[0].find((recefi) => recefi._id === req.params.id);
  console.log(recefiData);
  res.send(recefiData)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
