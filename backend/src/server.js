require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/db.js");

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
