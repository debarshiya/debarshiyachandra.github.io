const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3101;

// Create Express app
const app = express();

// app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.static("public"));
// // define a simple route
// app.get("/", (req, res) => {
//   res.json({
//     message:
//       "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
//   });
// });

// listen for requests

//Create mongoose database connection
mongoose.connect(
  "mongodb+srv://jay:jay@cluster0.zglqm.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Listen to request
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
