const express = require("express");
const db = require("./config/connection");
const thoughtRoutes = require("./routes/thoughtRoutes"); // Import the thoughtRoutes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use thought routes
app.use("/api", thoughtRoutes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Connected on http://localhost:${PORT}`));
});
