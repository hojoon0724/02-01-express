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

app.get("/magic/:question", (req, res) => {
  const eightBallResponseText = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const randomIndexNumber = Math.round(Math.random() * eightBallResponseText.length);
  const questionText = req.params.question;
  res.send(`
  ${questionText}?<br>
  <h1>
  ${eightBallResponseText[randomIndexNumber]}
  </h1>`);
});

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
app.listen(3000, () => {
  console.log(`listening in port 3000`);
});
