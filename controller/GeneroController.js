const Genero = require("../model/Genero");
const Autor = require("../model/Autor");

function abreadd(req, res) {
  Autor.find({}).then(function (autores) {
    res.render("album/adicionar.ejs", { Login: req.user, Autores: autores });
  });
}
function add(req, res) {
  var genero = new Genero();
  genero.nome = req.body.nome;
  genero.autor = req.body.autor;
  genero.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      Autor.findById(req.body.autor).then(function (autor) {
        autor.generos.push(result._id);
        autor.save();
      });
      res.redirect("/admin/genero/listar");
    }
  });
}

function lst(req, res) {
  Genero.find({})
    .populate("autor")
    .then(function (generos) {
      res.render("genero/listar.ejs", { Generos: generos, Login: req.user });
    });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Genero.find({ nome: new RegExp(pesquisa, "i") })
    .populate("autor")
    .then(function (generos) {
      res.render("genero/listar.ejs", { Generos: generos, Login: req.user });
    });
}

function abreedt(req, res) {
  Autor.find({}).then(function (autores) {
    Genero.findById(req.params.id).then(function (genero) {
      res.render("genero/editar.ejs", {
        Genero: genero,
        Login: req.user,
        Autores: autores,
      });
    });
  });
}
function edt(req, res) {
  Genero.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      autor: req.body.autor,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte errro: " + err);
      } else {
        res.redirect("/admin/genero/listar");
      }
    }
  );
}

function deleta(req, res) {
  Genero.findByIdAndDelete(req.params.id)
    .populate("autor")
    .then(function (valor) {
      Autor.findById(valor.autor).then(function (autor) {
        autor.generos.splice(autor.generos.indexOf(valor._id), 1);
        autor.save();
      });
      res.redirect("/admin/genero/listar");
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
