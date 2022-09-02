const mongoose = require("mongoose");

const uri =
  "mongodb+srv://nirgxn:nirgxn00@irigorfojetos.xuaf0qa.mongodb.net/?retryWrites=true&w=majority";
//const uri = "mongodb://localhost:27017/info";

mongoose.connect(uri);

module.exports = mongoose;
