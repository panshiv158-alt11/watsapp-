const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 WhatsApp Bot Running");
});

app.get("/webhook", (req, res) => {
  const verify_token = "shivamverify";

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === verify_token) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
