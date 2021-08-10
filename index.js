const express = require("express");
const app = express();

app.use(express.json());

app.route("/", (req, res) => {
  res.status(200).send("<h1>Hola mundo</h1>");
});

app.listen(5000, () => {
  console.log(`app tuning on pot 5000`);
});
