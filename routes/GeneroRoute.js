const express = require("express");
const GeneroController = require("../controller/GeneroController");
const upload = require("../config/upload");

const router = express.Router();

router.get("/add", GeneroController.abreadd);
router.post("/add", upload.single("foto"), GeneroController.add);

router.get("/lst", GeneroController.lst);
router.post("/filtro", GeneroController.filtro);

router.get("/edt/:id", GeneroController.abreedt);
router.post("/edt/:id", upload.single("foto"), GeneroController.edt);

router.get("/deleta/:id", GeneroController.deleta);

module.exports = router;
