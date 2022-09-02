const conexao = require("../config/database");

const TituloSchema = conexao.Schema({
  nome: {
    type: "String",
  },
  dataPub: {
    type: "Date",
  },
  foto: {
    type: "String",
  },
  autores: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "Autor",
    },
  ],
});

module.exports = conexao.model("Titulo", TituloSchema);
