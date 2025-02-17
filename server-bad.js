/* Basic unoptimized server to test the slow site */

const express = require("express");
const path = require("path");

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8001;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get(["/", "/index.html"], (_req, res, _next) => {
  return res.sendFile(path.join(__dirname, "public", "bad.html"));
});

app.listen(PORT, () => {
  console.log(`Unoptimized Server is running on port ${PORT}`);
});
