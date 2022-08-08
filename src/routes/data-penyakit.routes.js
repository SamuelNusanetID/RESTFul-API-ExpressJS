const Routes = require("express").Router();
const DataPenyakit = require("../controllers/data-penyakit.controllers");

const datapenyakit = new DataPenyakit();
Routes.get("/", datapenyakit.GetDataPenyakit);
Routes.get("/:id", datapenyakit.GetDataPenyakitByID);
Routes.post("/", datapenyakit.SaveDataPenyakit);
Routes.put("/:id", datapenyakit.UpdateDataPenyakit);
Routes.delete("/:id", datapenyakit.DeleteDataPenyakit);

module.exports = Routes;
