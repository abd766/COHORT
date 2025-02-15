const express = require("express");
const apiRouter = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1",apiRouter);

app.listen(3000);

