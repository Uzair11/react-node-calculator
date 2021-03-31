import express = require("express");
import path = require("path");
import { useRoutes } from "./app/routes";

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

// bootstrap routes
useRoutes(app);

// React-Application Page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
