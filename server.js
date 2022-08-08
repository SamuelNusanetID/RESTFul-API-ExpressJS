const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const rootRoutes = require("./src/routes/index.routes");
app.use("/api/v1", rootRoutes);

// this is default in case of unmatched routes
app.use(function (req, res) {
  // Invalid request
  res.json({
    error: {
      name: "Error",
      status: 404,
      message: "Invalid Request",
      statusCode: 404,
      stack: "http://localhost:8000/",
    },
    message: "Testing!",
  });
});

app.listen("8000", () => {
  console.log(`Server is running at http://localhost:${8000}`);
});
