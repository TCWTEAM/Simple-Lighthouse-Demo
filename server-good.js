/* Basic unoptimized server to test the slow site */

const express = require("express");
const compression = require("compression");
const path = require("path");

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8002;

const app = express();

// Enable compression (gzip)
app.use(compression());

// Cache control middleware
app.use((_req, res, next) => {
  res.set("Cache-Control", "public, max-age=31536000");

  next();
});

// Serve static files with proper caching
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "1y",
    etag: true,
  })
);

app.get("/", (_req, res, _next) => {
  return res.sendFile(path.join(__dirname, "public", "good.html"));
});

app.listen(PORT, () => {
  console.log(`Optimized Server is running on port ${PORT}`);
});
