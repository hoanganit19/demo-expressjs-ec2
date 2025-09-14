const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const response = await fetch(`http://${req.headers.host}/data`);
  const data = await response.json();
  res.json(data);
});

app.get("/demo", async (req, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();
  res.json(data);
});

app.get("/data", (req, res) => {
  res.json({
    title: "Unicode",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
