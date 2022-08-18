const Employee = require("../models/employee");

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
  const employee = new Employee({
    name: req.body.name,
    azucar: req.body.azucar,
    grasa: req.body.grasa,
    oxigeno: req.body.oxigeno,
    riesgo: req.body.riesgo,
  });
  await employee.save();
  res.json({ status: "Paciente Registrado" });
};

employeeCtrl.getEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Paciente actualizado" });
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: "Paciente eliminado" });
};

module.exports = employeeCtrl;
