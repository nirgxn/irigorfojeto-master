const Autor = require("../model/Autor");

function abreadd(req, res) {
  res.render("autor/adicionar.ejs", { Login: req.user });
}
function add(req, res) {
  var autor = new Autor();
  autor.nome = req.body.nome;
  autor.nascimento = req.body.nascimento;
  autor.obras = req.body.obras;
  autor.foto = req.file.filename;
  autor.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/admin/autor/listar");
    }
  });
}

function lst(req, res) {
  Autor.find({})
    .populate("generos")
    .populate("titulos")
    .then(function (autores) {
      console.log(autores);
      res.render("autor/lst.ejs", { Autores: autores, Login: req.user });
    });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Autor.find({ nome: new RegExp(pesquisa, "i") }).then(function (autores) {
    res.render("autor/listar.ejs", { Autores: autores, Login: req.user });
  });
}

function abreedt(req, res) {
  Autor.findById(req.params.id).then(function (autor) {
    res.render("autor/editar.ejs", { Autor: autor, Login: req.user });
  });
}
function edt(req, res) {
  Autor.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      nascimento: req.body.nascimento,
      obras: req.body.obras,
      foto: req.file.filename,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte errro: " + err);
      } else {
        res.redirect("/admin/artista/listar");
      }
    }
  );
}

function deleta(req, res) {
  Autor.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/admin/autor/listar");
  });
}

module.exports = {
  abreadd,
  add,
  lst,
  filtro,
  abreedt,
  edt,
  deleta,
};
