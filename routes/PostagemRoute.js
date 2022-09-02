const express = require("express");
const PostagemController = require("../controller/PostagemController");
const upload = require("../config/upload");

const router = express.Router();

router.get("/add", PostagemController.abreadd);
router.post("/add", upload.single("foto"), PostagemController.add);

router.get("/lst", PostagemController.lst);
router.post("/filtro", PostagemController.filtro);

router.get("/edt/:id", PostagemController.abreedt);
router.post("/edt/:id", upload.single("foto"), PostagemController.edt);

router.get("/deleta/:id", PostagemController.deleta);

module.exports = router;
