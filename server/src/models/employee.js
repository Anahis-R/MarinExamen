const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    azucar: { type: Number, required: true },
    grasa: { type: Number, required: true },
    oxigeno: { type: Number, required: true },
    riesgo: {type: String, required: false},
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
