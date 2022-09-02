const express = require("express");
const TituloController = require("../controller/TituloController");
const upload = require("../config/upload");

const router = express.Router();

router.get("/adicionar", TituloController.abreadd);
router.post("/adicionar", upload.single("foto"), TituloController.add);

router.get("/listar", TituloController.lst);
router.post("/listar", TituloController.filtro);

router.get("/editar/:id", TituloController.abreedt);
router.post("/editar/:id", upload.single("foto"), TituloController.edt);

router.get("/deletar/:id", TituloController.deleta);

module.exports = router;
