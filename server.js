const express = require("express");
const db = require("./config/connection");
const thoughtRoutes = require("./routes/api/thoughtRoutes"); // Import the thoughtRoutes
const userRoutes = require("./routes/api/userRoutes"); // Import the userRoutes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use thought routes
app.use("/thoughts", thoughtRoutes);

// Use user routes
app.use("/users", userRoutes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
