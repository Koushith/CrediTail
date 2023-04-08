import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
