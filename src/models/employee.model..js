const mongoose  = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    role: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;