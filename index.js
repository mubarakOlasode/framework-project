import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import data from "./data/data.json" assert { type: "json" };

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
