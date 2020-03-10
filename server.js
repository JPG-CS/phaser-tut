const express = require("express");
const app = express();
const PORT = 3003;

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/assets", express.static(__dirname + "/public/assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
