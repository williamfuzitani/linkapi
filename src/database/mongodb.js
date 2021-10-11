const mongoose = require("mongoose");
const { uri } = require("../config/mongo");

const connection = mongoose.connect(uri).then((resp) => {
  console.log("connectado no bd");
});

module.exports = connection;
