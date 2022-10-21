const express = require("express");
const app = express();
const cors = require("cors");
const servicesRouter = require("./routes/v1/users.route");
const dbCunnect = require("./utils/dbCunnect");
require("dotenv").config();

// server running on port
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());

// server cunnect
dbCunnect();


app.use("/api/v1/services", servicesRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.all("*", (req, res) => {
  res.send("Route not found.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
