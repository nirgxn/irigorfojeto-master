const express = require("express");
const AutorController = require("../controller/AutorController");
const upload = require("../config/upload");

const router = express.Router();

router.get("/adicionar", AutorController.abreadd);
router.post("/adicionar", upload.single("foto"), AutorController.add);

router.get("/listar", AutorController.lst);
router.post("/listar", AutorController.filtro);

router.get("/editar/:id", AutorController.abreedt);
router.post("/editar/:id", upload.single("foto"), AutorController.edt);

router.get("/deletar/:id", AutorController.deleta);

module.exports = router;
