const conexao = require("../config/database");

const AutorSchema = conexao.Schema({
  nome: {
    type: "String",
  },
  nascimento: {
    type: "Date",
  },
  foto: {
    type: "String",
  },
  generos: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "Genero",
    },
  ],
  titulos: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "Titulo",
    },
  ],
});

module.exports = conexao.model("Autor", AutorSchema);
