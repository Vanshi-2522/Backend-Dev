const express = require("express");
const app = express();

// Route: GET /users/:id/profile
app.get("/users/:id/profile", (req, res) => {
  const userId = req.params.id;       
  const { tab, lang } = req.query;    

  res.json({
    userId: userId,
    selectedTab: tab,
    language: lang
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
