const express = require("express");
const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");

const app = express();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

// Initialization
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Running on Port ${PORT}`);
});
