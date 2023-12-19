// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
const express = require("express");

// -----------------------------------------------------
// Application Object
// -----------------------------------------------------
const app = express();

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------

// -----------------------------------------------------
// Routes
// -----------------------------------------------------

// -----------------------------------------------------
// GET requests
// -----------------------------------------------------
app.get("/", (req, res) => {
  res.send(`root response`);
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<p>Hello! ${name}</p>`);
});

app.get("/tip/:total/:tip", (req, res) => {
  const total = Number(req.params.total);
  const tipPercent = Number(req.params.tip);
  let addedTotal = total * (tipPercent / 100) + total;
  res.send(`The ${total} with a ${tipPercent}% tip is ${addedTotal}`);
});

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
app.listen(3000, () => {
  console.log(`listening in port 3000`);
});
