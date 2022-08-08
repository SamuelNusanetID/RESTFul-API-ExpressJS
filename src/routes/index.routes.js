const express = require("express");
const defRouter = express();

const DataPenyakitRouter = require("./data-penyakit.routes");
defRouter.use("/data-penyakit", DataPenyakitRouter);

module.exports = defRouter;
