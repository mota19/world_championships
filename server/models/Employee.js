const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    email: String,
    phoneNumber: String,
    password: String,
    birthdate: String,
    firstName: String,
    lastName: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

module.exports = EmployeeModel