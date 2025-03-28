const express = require("express");
const app = express();

app.use("/numbers", numbersRouter);

const port = 5000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
