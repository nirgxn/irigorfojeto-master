const Postagem = require("../model/Postagem");

function abreadd(req, res) {
  res.render("postagem/add.ejs", { Login: req.user });
}

function add(req, res) {
  var postagem = new Postagem();
}
function lst(req, res) {}
function filtro(req, res) {}
function abreedt(req, res) {}
function edt(req, res) {}
function deleta(req, res) {}
module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
