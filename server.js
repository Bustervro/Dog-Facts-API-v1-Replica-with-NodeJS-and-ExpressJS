const express = require('express');
const app = express();
const PORT = 3000;

const dogFacts = [
  "A group of pugs is called a grumble.",
  "Dogs have three eyelids.",
  "Dogs can learn over 100 words.",
  "Dalmatian puppies are born white.",
  "Dogs have a sense of time."
];

app.get('/facts', (req, res) => {
  const number = parseInt(req.query.number);

  if (req.query.number && (isNaN(number) || number <= 0)) {
    return res.status(400).json({
      success: false,
      message: "Invalid number parameter"
    });
  }

  const facts = number ? dogFacts.slice(0, number) : dogFacts;

  res.json({
    facts: facts,
    success: true
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
