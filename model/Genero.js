const conexao = require("../config/database");

const GeneroSchema = conexao.Schema({
  nome: {
    type: "String",
  },
  autor: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Autor",
  },
});

module.exports = conexao.model("Genero", GeneroSchema);
