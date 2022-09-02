const Autor = require("../model/Autor");
const Titulo = require("../model/Titulo");

function abreadd(req, res) {
  Autor.find({}).then(function (autores) {
    res.render("titulo/adicionar.ejs", { Login: req.user, Autores: autores });
  });
}
function add(req, res) {
  var titulo = new Titulo();
  titulo.nome = req.body.nome;
  titulo.datapub = req.body.datapub;
  titulo.autores = req.body.autores;
  titulo.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      for (let i = 0; i < req.body.autores.length; i++) {
        Autor.findById(req.body.autores[i]).then(function (autor) {
          autor.titulo.push(result._id);
          autor.save();
        });
      }
      res.redirect("/admin/titulo/listar");
    }
  });
}

function lst(req, res) {
  Titulo.find({})
    .populate("autores")
    .then(function (titulos) {
      res.render("titulo/listar.ejs", { Titulos: titulos, Login: req.user });
    });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Titulo.find({ nome: new RegExp(pesquisa, "i") })
    .populate("autores")
    .then(function (titulos) {
      res.render("titulo/listar.ejs", { Titulos: titulos, Login: req.user });
    });
}

function abreedt(req, res) {
  Autor.find({}).then(function (autores) {
    Titulo.findById(req.params.id).then(function (titulo) {
      res.render("titulo/editar.ejs", {
        Titulo: titulo,
        Login: req.user,
        Autores: autores,
      });
    });
  });
}
function edt(req, res) {
  Titulo.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      datapub: req.body.dataPub,
      autores: req.body.autores,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte errro: " + err);
      } else {
        res.redirect("/admin/titulo/listar");
      }
    }
  );
}

function deleta(req, res) {
  Titulo.findByIdAndDelete(req.params.id)
    .populate("autores")
    .then(function (valor) {
      for (let i = 0; i < valor.autores.length; i++) {
        Autor.findById(valor.autores[i]).then(function (autor) {
          autor.titulos.splice(autor.titulos.indexOf(valor._id), 1);
          autor.save();
        });
      }
      res.redirect("/admin/titulo/listar");
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
