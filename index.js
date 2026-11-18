
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    application: "DevOps Task Tracker",
    status: "running",
    message: "ATU DevOps CI/CD Pipeline - Task 3"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
