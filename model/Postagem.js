const conexao = require("../config/database");

const PostagemSchema = conexao.Schema({
  autor: {
    type: "String",
  },
  titulo: {
    type: "String",
  },
  dataPub: {
    type: "Date",
    default: Date.now,
  },
  foto: {
    type: "String",
  },
  texto: {
    type: "String",
  },
  usuario: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

module.exports = conexao.model("Postagem", PostagemSchema);
